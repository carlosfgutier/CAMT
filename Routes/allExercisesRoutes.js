var db = require("../models");
var path = require("path");

module.exports = function(app){
	// get request to see all exercises on the workout page
	app.get("/api/allExercises", function(req,res){
		db.allExercises.findAll({
			name: req.name,
			description: req.description,
			muscle_group: req.muscle_group
		}).then(function(dbAllExercises){
			console.log(dbAllExercises);
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