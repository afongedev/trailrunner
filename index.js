//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home.ejs");
    });

      
// app.get("/runmappop", function (req, res) {
//     res.render("runMapPopUp.ejs");
//     });
         
      
// Set up listener
app.listen(8080, function() {
    console.log("Server started on port 8080");
  });

