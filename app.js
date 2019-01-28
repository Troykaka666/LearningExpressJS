var catme = require("cat-me"),
    knock_joke = require("knock-knock-jokes"),
    faker = require("faker"),
    express = require("express"),
    app = express();

app.get("/",function(request,response){
    response.send("Hi, welcome");
});


//taking requests from the HTTP
//handle the requests depend on the specific action
//send out the handled info to the page
app.get("/r/:action/:whatto/:times",function(request,response){
    var action = request.params.action;
    var whatto = request.params.whatto;
    var num = request.params.times;
    if(action == "speak"){
        switch (whatto) {
            case "pig":
                response.send("The "+ whatto+" says Oink");
                break;
            case "cow":
            response.send("The "+ whatto+" says Moo");
            break;
            case "dog":
            response.send("The "+ whatto+" says Woof Woof");
            break;
            default:
                break;
        }
    }else if(action == "repeat"){
        var str = "";
        for (let index = 0; index < num; index++) {
            str = str + " " + whatto;
        }
        response.send(str);
    }
});

//req is an object, params is a property of req which container all the reques 
//info from the URL
app.get("/r/:subreddit/comments/:id/:title/", function (req, res) {
    var subreddit = req.params.subreddit;
    var id = req.params.id;
    var title = req.params.title;
    
    res.send('hi,'+subreddit+" ,  "+id+"  , "+title);
});

app.get("*", function (req, res) {
    res.send('Just need to display something~')
});
app.listen(3000,function(){
    console.log("Server Has Started!!");  
});
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server Has Started!!");
    
// });