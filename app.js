//jshint esversion:6

const express = require("express");
const body_parser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

app.use(express.static("static"));
app.use(body_parser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const items = [];
const work_items = [];

app.get("/", function(req, res){
  // res.send("Hello World");

  // res.write("<h1>Hello World</h1>");
  // res.write("<p>This is my first project</p>");
  // res.send();

  // res.sendFile(__dirname + "/index.html");

  res.render("index", {title: date.getDate(), items: items});
});

app.get("/work", function(req, res){
  res.render("index", {title: "Work", items: work_items});
});

app.post("/", function(req, res){
  const button = req.body.button;
  console.log(req.body);
  if (button === "Work"){
    work_items.push(req.body.new_item);
    res.redirect("/Work");
  }else{
    items.push(req.body.new_item);
    res.redirect("/");
  }
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
