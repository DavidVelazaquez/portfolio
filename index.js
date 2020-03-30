const express = require("express");
const path = require("path");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");

const port = 3000;

const portfolioView = require("./routes/portfolio/portfolio");
const portfolioApi = require("./routes/api/portfolioApi");

app.use(bodyParser.json());
app.use(express.urlencoded());

app.use(helmet());

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/projects", portfolioView);
app.use("/api", portfolioApi);

app.get("/", (req, res) => {
  res.redirect("/projects");
});

app.listen(port, () => {
  console.log(`Site running on port: ${port}`);
});
