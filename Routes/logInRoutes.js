// signup page
// create a POST to create acct that stores the username and password
// LOGIN user information ??? 

var db = require("../models")

module.exports = function(app){
	// posts new user account
	app.post("/api/logIn", function(req,res){
		db.logIn.create(req.body).then(function(dbLogIn){
			res.send(dbLogIn);
		});
	});
};

