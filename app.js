const express = require("express");
var path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/proyek1.html");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is listening on port 3000.")
})