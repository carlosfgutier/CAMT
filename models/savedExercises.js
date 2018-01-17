
module.exports = function(sequelize, DataTypes){

    var savedExercises =  sequelize.define('savedExercises', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
    });
//####################################################
//CREATE a two different connections
// FIRST a many - one relationship, with many savedExercise to one login
// Second a many - many, with many allExercises to many savedExercises

    // savedExercises.associate =function(models){
    //     savedExercises.belongsTo(models.logIn, {foreignKey: 'id'});
    // }
    // savedExercises.associate =  function(models){
    //     savedExercises.hasMany(models.allExercises,{through:'savedExercises'})
    // }
   return savedExercises;   
};


