var db = require("../models");
var path = require("path");

module.exports = function(app){
	// get request to see all exercises on the workout page
	app.get("/allExercises", function(req,res){
		db.allExercises.findAll({
			name: req.name,
			description: req.description,
			muscle_group: req.muscle_group
		}).then(function(dbAllExercises){
			console.log(dbAllExercises);
			res.render("allExercises", {allExercises: dbAllExercises});
			// res.send(dbAllExercises);
		});
	});

	// might need a different route related to workout_exercises/:id
	app.post("/api/savedExercises", function(req,res){
		db.savedExercises.create(req.body).then(function(dbSavedExercises){
			res.send(dbSavedExercises);
		});
	});
};	