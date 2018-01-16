var db = require("../models");
var path = require("path");

module.exports = function(app){
	// get request to see all exercises on the workout page
	app.get("/api/allExercises", function(req,res){
		console.log("request sent ");
		db.allExercises.findAll({
			name: req.name,
			descripton: req.description

		}).then(function(err, dbAllExercises){
			//throw(err);
			res.json(dbAllExercises);
			
		});
	});

	//create a different request for the data that will be rendered within handlebars
	app.get("/views/exercises", function(req,res){
		db.allExercises.findAll({
			name: req.name,
			description: req.description
		}).then(function(err, dbAllExercises){
			throw(err);
			// I can modify the data here
			//the code bellow renders dbExercises into the allWorkouts handlebars
			res.render("allExercises", dbAllExercises);
			// res.send(dbAllExercises);
		});
	});

	// might need a different route related to workout_exercises/:id
	app.post("/api/savedExercises", function(req,res){
		db.savedExercises.create(req.body).then(function(err, dbSavedExercises){
			throw(err);
			res.send(dbSavedExercises);
		});
	});

	//HTLM Route
	app.get("/api/allExercises", function(req, res) {
	    res.sendFile(path.join(__dirname, "../views/layouts/mainAllExercises.handlebars"));
	});
};	