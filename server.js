const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")


const app = express()
//Middleware parts

app.use(morgan("dev"));
app.use(bodyParser.json());



//make connection with client side
app.use(express.static(__dirname + "/public"));


//listen to specific port
app.listen(8848, function() {
  console.log("listening on port successful man!");
});