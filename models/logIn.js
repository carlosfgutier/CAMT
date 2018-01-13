module.exports = function(sequelize, DataTypes){
 
 var logIn = sequelize.define("logIn", {
	
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		city: DataTypes.STRING,
		zip: DataTypes.STRING
	});

 	logIn.associate = function(models){
 		logIn.hasMany(models.allExercises, {
 			onDelete: "cascade"
 		});
 	};
 return logIn; 

};