const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>{
    console.log(req.body);
    res.redirect("/");
})


app.listen(PORT, ()=>{
    console.log("Server is running at PORT "+PORT);
})