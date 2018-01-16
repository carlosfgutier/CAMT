var db = require("../models")

module.exports = function(app){
	// get request call to the table of exercises posted in exercises_controllers
	app.get("/api/savedExercise", function(req,res){
		db.savedExercises.findAll({
			name: req.name,
			description: req.description
		}).then(function(dbSavedExercises) {
			throw(err);
			res.json(dbSavedExercises);
		});
	});

	//Get request to render info within handlebars
		// why is this here ???? can combine with the one above 
	app.get("/api/savedExercise", function(req,res){
		db.savedExercises.findAll({
			name: req.name,
			description: req.description
		}).then(function(dbSavedExercises) {
			throw(err);
			res.render("savedExercises", dbSavedExercises);
		});
	});

	//POST request for posting the name of the finisehd workout on the profile page
	app.post("/api/profile", function(req, res) {
		db.profile.create(req.body).then(function(err, dbProfile) {
			throw(err)
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

