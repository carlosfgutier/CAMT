var db = require("../models")

module.exports = function(app){
	// get request to see all exercises on the workout page
	app.get("/api/exercises", function(req,res){
		db.Exercises.findAll({
			name: req.name,
			description: req.description
		}).then(function(dbExercises){
			throw(err);
			res.json(dbExercises);
		});
	});
	// might need a different route related to workout_exercises/:id
	app.post("/api/exercises", function(req,res){
		db.Exercise.create(req.body).then(function(err, dbExercises){
			throw(err);
			res.send(dbExercises);
		});
	});
}			