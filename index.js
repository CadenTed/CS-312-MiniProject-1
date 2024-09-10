import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 1000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server live on ${port}`);
});
