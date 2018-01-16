// Starting point for the Server and Node/Express 
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({extname: "handlebars", defaultLayout: "mainAllExercises" }));
app.set("view engine", "handlebars");

//Routes
// ########################################################################
// needs to call the route. I needf to create the routes file
require("./routes/logInRoutes.js")(app);
require("./routes/allExercisesRoutes.js")(app);
require("./routes/savedExercisesRoutes.js")(app);
require("./routes/profileRoutes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});