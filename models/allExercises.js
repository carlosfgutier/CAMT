// Exports the exercises 
module.exports = function(sequelize, DataTypes){

    // Creates exercise table 
    var allExercises = sequelize.define("allExercises", {
         name: DataTypes.STRING,
         description: DataTypes.TEXT,
         muscle_group: DataTypes.STRING
    }); 
//#######################################################################
// CREATE a relationship to the savedExercise file 
            // This relationship is a many to many = many exercises can belong to many savedExercises 
    // allExercises.associate =  function(models){
    //     allExercises.belongsToMany(models.savedExercises,{through:'allExercises'})
    // }
    return allExercises;

};