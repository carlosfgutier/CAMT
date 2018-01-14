
module.exports = function(sequelize, DataTypes){
	var savedExercises =  sequelize.define('savedExercises', {
		name: DataTypes.STRING,
 		description: DataTypes.TEXT
	});
	return savedExercises;
};