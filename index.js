const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://mockend.up.railway.app/api/products");
    const data = await response.json();
    res.send(data);
    console.log("success");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log("Server running!");
});
