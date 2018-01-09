// Exports the exercises 
module.exports = function(sequelize, DataTypes){
	// Creates exercise table 
	var Exercise = sequelize.define("Exercise", {
 		name: DataTypes.STRING,
 		description: DataTypes.TEXT,
 		muscle_group: DataTypes.STRING
 	});
	// Links to the workout file so that is has a many to many relationship
		// this is used to create the saved workouts 
	Exercise.associate =  function(models){
		Exercise.belongsToMany(models.Workout,{through: 'workout_exercises'})
	}

	return Exercise;
};