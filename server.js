const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Welcome to Homepage!");
// });
app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.use(express.static(__dirname + "/public")); //serving up a static folder

app.listen(port, () => {
  console.log(`You just started the express server on ${port}`);
});
