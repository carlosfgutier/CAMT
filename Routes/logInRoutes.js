// signup page
// create a POST to create acct that stores the username and password
// LOGIN user information ??? 

var db = require("../models")

module.exports = function(app){
	// posts new user account
	app.post("/api/logIn", function(req,res){
		console.log("This is the body req"+req.body);
		db.logIn.create(req.body).then(function(err, dbLogIn){
			console.log("here is the dbLogin"  + dbLogIn);
			console.log("here is the res dbLogin" + dbLogIn);
			res.send(dbLogIn);
		});
	});
};

