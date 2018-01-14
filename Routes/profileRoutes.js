var db = require("../models")

module.exports = function(app){
	// get request to see current workout
	app.get("/api/profile", function(req,res){
		db.profile.findAll({
			name: req.name
		}).then(function(dbFinishedExercise){
			throw(err);
			res.json(dbFinishedExercise);
		});
	});

	//Will render information inside handlebars
	app.get("/api/profile", function(req,res){
		db.profile.findAll({
			name: req.name
		}).then(function(dbFinishedExercise){
			throw(err);
			res.render("profile", dbFinishedExercise);
		});
	});
};	
