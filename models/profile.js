// exports the profile module
module.exports = function(sequelize, DataTypes){
	// creates table for the different personal profiles
		// uses sequlize 
	var profile = sequelize.define("profile",{
	 	name: DataTypes.STRING,
	 });
	// work is added an associate with logIns
	// links the logIns so that each acct can have mult profiles
	profile.associate = function(models){
 		profile.belongsTo(models.logIn, {
	 		foreignKey: {
	 			allowNull: false
	 		}
 		});
 	};
 	// profile now is associate with exercise
 	// Exercises have a many to many relationship
 	profile.associate = function(models){
 		profile.belongsToMany(models.allExercises, {as: "exercise", through: 'savedExercises'})
 	}

 	return profile;
};



