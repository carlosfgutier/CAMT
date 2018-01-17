var db = require("../models");
var path = require("path");

module.exports = function(app){
	// get request call to the table of exercises posted in exercises_controllers
	app.get("/savedExercises", function(req,res){
		db.savedExercises.findAll({
			name: req.name,
			description: req.description,
		}).then(function(dbSavedExercises) {
			console.log(dbSavedExercises);
			res.render("savedExercises", {savedExercises: dbSavedExercises});
			// res.json(dbSavedExercises);
		});
	});

	//POST request for posting the name of the finisehd workout on the profile page
	app.post("/api/profile", function(req, res) {
		db.profile.create(req.body).then(function(dbProfile) {
			res.send(dbProfile);
		});
	});

	//DELETE request to delete completed workout from mySavedexercises table
	app.delete("/api/savedExercises/:exerciseName", function(req,res) {
		db.savedExercises.destroy({
			where: {
				name: req.params.exerciseName
			}
		});
	});
};

