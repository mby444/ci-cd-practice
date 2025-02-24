const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello ${name}!` });
});

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}...`);
});

module.exports = { app, server };
