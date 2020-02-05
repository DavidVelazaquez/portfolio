const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

const portfolioView = require("./routes/portfolio/portfolio");

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/projects", portfolioView);

app.get("/", (req, res) => {
  res.redirect("/projects");
});

app.listen(port, () => {
  console.log(`Site running on port: ${port}`);
});
