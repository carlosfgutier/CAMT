module.exports = function(sequelize, DataTypes){
 
 var logIn = sequelize.define("logIn", {
	
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		city: DataTypes.STRING,
		zip: DataTypes.STRING
	});
//##############################################
// CREATE a relationship with the savedEXercises
			// Many to one relationship, Many savedExercises to one Login
 	logIn.associate = function(models){
 		// needs to be saved Excercise so that 
 		logIn.hasMany(models.savedExercises, {
 			//write the connection to the savedExercise
 			foreignKey: 'id'
 		});
 	};

 return logIn; 

};