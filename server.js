const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: false }));

function gettime() {
  var datetime = new Date();
  return datetime.toLocaleString(); // -> "2/1/2013 7:37:08 AM"
}

// app.get("/", function (req, res) {
//   res.send("hello world");
//   console.log(gettime(), "[Server Activity]: Request Received");
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server has started at port " + PORT));
