const express = require("express");
const app = express();
const port = 3000;
const middleware = require("./middleware.js");
app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, (req, res) => {
  res.send("This is the about page");
});

app.use(express.static(__dirname + "/public")); //serving up a static folder

app.listen(port, () => {
  console.log(`You just started the express server on ${port}`);
});
