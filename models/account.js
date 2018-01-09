module.exports = function(sequelize, DataTypes){
 
 var Account = sequelize.define("Account", {
	
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		city: DataTypes.STRING,
		zip: DataTypes.STRING
	});

 	Account.associate = function(models){
 		Account.hasMany(models.Workout, {
 			onDelete: "cascade"
 		});
 	};
 return Account; 

};