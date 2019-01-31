var request = require('request'),
    express = require("express"),
    app = express();
    app.set("view engine", "ejs");
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

//////////////////////////// Making Request From weather API //////////////////////
// request('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22', function(error,response,body) {
//     if(error){
//         console.log("Something went wrong");
//         console.log(error);
//     }else{
//         if(response.statusCode == 200){
//             var parsedData = JSON.parse(body);
//             console.log(parsedData.weather[0].description);
            
//         }
//     }
// }) 
app.listen(8000, function(){
    console.log("Movie App is listening!!"); 
});

app.get("/results", function(req,res){
   var user_in = req.query.movie_n;
   var url = `http://www.omdbapi.com/?apikey=thewdb&s=${user_in}`;
   
    request(url, function(error,response,body) {
    if(!error && response.statusCode == 200){
        var result_data = JSON.parse(body);
            res.render("results", {search_result: result_data});
        }
    });
});

app.get('/',function(req,res){
    res.render("search");
});

app.get('/ha',function(req,res){
    res.render("ha/ha");
});

