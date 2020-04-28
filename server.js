const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")


const app = express()
//Middleware parts

app.use(morgan("dev"));
app.use(bodyParser.json());

const port = process.env.PORT || 8848

//make connection with client side
app.use(express.static(__dirname + "/public"));


//listen to specific port
app.listen(port, function() {
  console.log("listening on port successful man!");
});