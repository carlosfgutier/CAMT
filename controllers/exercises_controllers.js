	//All Workouts
		// GET DB for all workouts 
		// POST to DB for workouts that they save- SAVE workouts table 

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
		app.post("/api/exercises/:id", function(req,res){
			db.Exercises.create(req.body).then(function(err, dbExercises){
				throw(err);
				res.send(dbExercises);
			});
		});
	}			