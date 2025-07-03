process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";

const app = express();
const port = 3000;

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

await pool.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

async function itemlist() {
  const result = await pool.query("SELECT * FROM items ORDER BY id ASC ");
  items = result.rows;
  console.log(items);
  return items;
}
app.get("/", async(req, res) => {
  const items = await itemlist();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  await pool.query("INSERT INTO items (title) VALUES ($1)",[item]);
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  const itemid = req.body.updatedItemId;
  const item = req.body.updatedItemTitle;
  await pool.query("UPDATE items SET title=($1) WHERE id=($2);",[item, itemid]);
  res.redirect("/");
});

app.post("/delete", async(req, res) => {
  const itemid = req.body.deleteItemId;
  await pool.query("DELETE FROM items WHERE id=($1)",[itemid]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
