var db = require("../models");
var path = require("path");

module.exports = function(app){
	// get request to see current workout
	app.get("/profile", function(req,res){
		db.profile.findAll({
			name: req.name
		}).then(function(dbFinishedExercise){
			res.render("profile", dbFinishedExercise);
			// res.json(dbFinishedExercise);
		});
	});
};	
