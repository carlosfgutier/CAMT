var db = require("../models");
var path = require("path");

module.exports = function(app){
	// get request to see current workout
	app.get("/api/profile", function(req,res){
		db.profile.findAll({
			name: req.name
		}).then(function(dbFinishedExercise){
			throw(err);
			res.render("profile", dbFinishedExercise);
			// res.json(dbFinishedExercise);
		});
	});

	//HTLM Route
	app.get("/api/allExercises", function(req, res) {
	    res.sendFile(path.join(__dirname, "../views/layouts/mainProfile.handlebars"));
	});
};	
