var db = require("../models")

	models.exports = function(app){
		// get request call to the table of exercises posted in exercises_controllers
		app.get("/api/exercises/:id", function(req,res){
			db.Exercises.findAll()
		});
	}

	//POST request for posting the name of the finisehd workout on the profile page

	//DELETE request to delete completed workout from mySavedexercises table