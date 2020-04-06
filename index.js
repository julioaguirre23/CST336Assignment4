var express = require("express");
var faker = require("faker");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("css"));
app.use(express.static("img"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   let recentDate = faker.date.recent();
   res.render("home",{recentDate}); 
});

app.get("/buisness", function(req, res){
   let recentDate = faker.date.recent();
   res.render("topic1",{recentDate}); 
});

app.get("/robotics", function(req, res) {
   let recentDate = faker.date.recent();
   res.render("topic2",{recentDate}); 
});

app.get("/computerVision", function(req, res) {
   let recentDate = faker.date.recent();
   res.render("topic3",{recentDate}); 
});

app.get("*", function(req, res) {
   res.render("error"); 
});

app.listen(process.env.PORT, function(){
    console.log("Server is up and running");
})