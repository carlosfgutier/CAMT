// exports the workout module
module.exports = function(sequelize, DataTypes){
	// creates table for the different personal workouts
		// uses sequlize 
	var Workout = sequelize.define("Workout",{
	 	name: DataTypes.STRING,

	 });
	// work is added an associate with accounts
		// links the accounts so that each acct can have mult workouts
	Workout.associate = function(models){
 		Workout.belongsTo(models.Account, {
	 		foreignKey: {
	 			allowNull: false
	 		}
 		});
 	}
 	// Workout now is associate with exercise
 		// Exercises have a many to many relationship
 	Workout.associate = function(models){
 		Workout.belongsToMany(models.Exercise, {through: 'workout_exercises'})
 	}

 	return Workout;
}



