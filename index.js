const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "assests")));
app.use(favicon(path.join(__dirname, "assests", "favicon.ico")));
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`Server started at ${port}...`);
});
