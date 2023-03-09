const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server has started at port " + PORT));