# ✅ Todo List App

A simple, server-rendered Todo application built with Node.js, Express, and PostgreSQL. It allows users to add, edit, and delete tasks, with data persisted in a Supabase-hosted Postgres database.


Check-out my app [here](https://todo-app-y4pm.onrender.com).
---

## 📖 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Database Schema](#database-schema)
5. [Setup & Installation](#setup--installation)
6. [Running Locally](#running-locally)
7. [Deployment to Supabase and Render](#deployment-to-supabase-and-render)
8. [Project Structure](#project-structure)
9. [Troubleshooting & Tips](#troubleshooting--tips)
10. [Future Improvements](#future-improvements)

---

## Project Overview

This app presents a single-day todo list where items can be created, edited inline, marked complete (deleted), and viewed immediately in the browser. All changes are reflected in a PostgreSQL database via Supabase's API.

---

## Features

- ✅ Add new tasks
- ✏️ Inline editing of existing tasks
- 🗑️ Mark tasks as done (delete)
- 💾 Persistent storage in PostgreSQL
- 🖥️ Responsive, minimal UI with EJS templates

---

## Tech Stack

- 🟩 **Node.js** & **Express** for server
- 🎨 **EJS** for templating
- 🐘 **pg (node-postgres)** for database connectivity
- 🛠️ **Supabase** for hosted PostgreSQL
- 📦 **Body-Parser** for form handling
- 🔐 **Dotenv** for environment variables

---

## Database Schema

Defined in `queries.sql`:

```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

INSERT INTO items (title)
VALUES ('Buy milk'), ('Finish homework'); --sample data
```

- 📝 **items**: stores each todo with an auto-incrementing `id` and text `title`.

---

## Setup & Installation

1. 📂 **Clone the repository**:
   ```bash
   git clone https://github.com/VINAYMADIVAL/Todo-App.git
   cd Todo-App
   ```
2. 📦 **Install dependencies**:
   ```bash
   npm install
   ```
3. 🛡️ **If you have `PostgreSQL` installed locally then create a `db` and you can just put all the required credentials into a **`.env`** file at project root:**
   ```env
   HOST=<hostName>
   USER=<userName>
   DATABASE=<databseName>
   PASSWORD=<your_postgres_password>
   PORT=<5432>
   ```
   **OR If you don't have it locally the you can sign up for one like supabase:**
   -  Create a new project and database.
   - goto project dashboard click connect you'll see a connection string
   - Copy your **Connection String** (URI).
   - create a `.env` file at your root project:
      ```env
      DATABASE_URL=postgresql://<user>:<YOUR-PASSWORD>@<host>:<port>/<database>
      ```
4. 🧱 **Run the SQL schema** on your Supabase database through psql CLI installed locally :
   >Note: Here while copying connection string choose psql as the type not URL because URL is for hosting on render/connecting to database via your express app.</mark>

   ```bash
   psql -h [host] -p [port] -d [database] -U [user]
   ```
  - Once you're connected to the database you can just paste the entire Schema from `queries.sql` in the command line and press Enter
  - Now you have successfully created tables in your database and it's ready for your project
---

## Running Locally

🖥️ Start the app:

```bash
npm start
```

🌐 Open `http://localhost:3000` in your browser.

---

## Deployment to Render

 🚀 **Render**:
   - 🔁 Push your code to GitHub.
   - 🧩 In Render dashboard, create a **Web Service** linked to your repo.
   - 🏗️ Set Build Command: `npm install` and Start Command: `node index.js`.
   - 🔐 Add `DATABASE_URL` to Environment Variables with your Supabase URI.
   - ✅ Deploy and verify the live URL.

---

## Project Structure

```
/
├─ index.js            # 🚀 Server entrypoint
├─ package.json        # 📦 Dependencies & scripts
├─ queries.sql         # 🗄️ DB schema & seed data
├─ public/styles       # 🎨 CSS assets
├─ views/
│   ├─ header.ejs
│   ├─ index.ejs
│   └─ footer.ejs
└─ .env                # 🔐 Env variables (not in repo)
```

---

## Troubleshooting & Tips

- ✅ Ensure `DATABASE_URL` is correct and includes `?sslmode=require`.
- 🧱 If see `SELF_SIGNED_CERT_IN_CHAIN`, add at top of `index.js`:
  ```js
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  ```
- 🔊 Confirm you are listening on Render’s port:
  ```js
  const port = process.env.PORT || 3000;
  ```
- 🌐 Use Supabase’s **Transaction Pooler** URL for IPv4 support.

---

## Future Improvements

- 🗂️ Sort by creation date
- 📝 Support multiple lists (e.g., **Family Todo Lists**)
- 🔍 Add search/filter functionality
- 🧑‍💻 Integrate user accounts and authentication
- 🗃️ Add categories & due dates

---

