var express= require("express");

var app = express();

//  http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Welcome to my Home page !!!");
}
);
//  http://localhost:3000/welcome
app.get('/welcome', (req, res) => {
    res.send("<h1 style='color:red'> Welcome to my welcome page !!!</h1>");
}
);