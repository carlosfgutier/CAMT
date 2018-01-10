// create the routes here to connect to the server 
	// ROUTES 
	var db = require("../models")



	module.exports = function(app){
		// get request to see current workout
		app.get("/api/workouts", function(req,res){
			db.Workouts.findAll({
				name: req.name
				// description: req.description
			}).then(function(dbWorkouts){
				res.json(dbWorkouts);
			});
		});
		// post current workout to db
		app.post("/api/workouts/:id", function(req,res){
			db.Workouts.create(req.body).then function(dbWorkouts)
		});
	}	


	// call the db /models

	//module.export function that export the routes 

// Personal Account 
	// GET older saved workouts 
	// GET to personal account
	// POST update to personal account 



	// My workouts
		// GET of current work
		// POST of current workout to db

