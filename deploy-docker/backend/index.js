const express = require("express");
const {Pool} = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  database: process.env.POSTGRES_DB || "mydatabase",
  password: process.env.POSTGRES_PASSWORD || "mypassword",
  port: process.env.POSTGRES_PORT || 3000,
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error executing query");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
