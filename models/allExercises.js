// Exports the exercises 
module.exports = function(sequelize, DataTypes){
    // Creates exercise table 
    var allExercises = sequelize.define("allExercises", {
         name: DataTypes.STRING,
         description: DataTypes.TEXT,
         muscle_group: DataTypes.STRING

    });
    // Links to the workout file so that is has a many to many relationship
        // this is used to create the saved workouts 
    allExercises.associate =  function(models){
        allExercises.belongsToMany(models.allExercises,{as: "exercise", through: 'savedExercises'})
    }

    return allExercises;
};