var db = require("../models")

	models.exports = function(app){
		// get request call to the table of exercises posted in exercises_controllers
		app.get("/api/exercise", function(req,res){
			db.Exercises.findAll()
		});

		//POST request for posting the name of the finisehd workout on the profile page
		app.post("/api/profileTable", funciton(req,res) {

		});


		//DELETE request to delete completed workout from mySavedexercises table
		app.delete("/api/whatevertable/:id", function(req,res) {
			db.whatevertable.destroy({
				where: {
					id: req.params.id
				}
			}).then(run some function that will reload the page 
			with updated version of savedWorkouts table)
		});

	}

	//POST request for posting the name of the finisehd workout on the profile page

