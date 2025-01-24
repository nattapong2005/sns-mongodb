const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");

// Create variable route
const postRoute = require("./routes/post.route");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// match GET localhost:9999/
app.get("/", (req, res)=>{
  res.send("API is online");
});


// Create route
app.use("/posts", postRoute);


app.listen(port, () => {
  console.log("App started at port: " + port);
});
