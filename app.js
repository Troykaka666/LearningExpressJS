var catme = require("cat-me"),
    knock_joke = require("knock-knock-jokes"),
    faker = require("faker"),
    express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

//tell experss to search anything inside the public folder    
app.use(express.static("public"));

//set every render files defauls as ejs file
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
});

app.get("/posts", function(req,res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Hello, hahaha", author: "John"},
        {title: "See You, My friends", author: "Troy"}
    ];
    res.render("posts", {posts: posts});
});

var friends = ["Tony","Miranada","Justin","Lily","Troy"];

app.post("/addfriend", function(req,res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/fallinlovewith/:thing/");//trigger this route again 
})
app.get("/fallinlovewith/:thing/", function(req,res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing, friendsVar: friends });
});


app.listen(8000, function(){
    console.log("Server is listening!!");
    
});