import express from "express";
import db from "./database/db.json";

const app = express();
const port = process.env.PORT || 3000;
app.get("/miduapi", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.send(db);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
