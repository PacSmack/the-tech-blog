const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) { 
        return bcrypt.compareSync(loginPw, this.password);
    }
}  

//define table columns and configuration
User.init(
    {
        id: {
            //use the special Sequelize Datatypes object provide what type of data it is
            type: DataTypes.INTEGER,
            //this is the equivalent of SQL's NOT NULL option
            allowNull: false,
            //primary key instruction
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //the cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the tabble data
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means that the password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
        hooks: {
            //  set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
                return updatedUserData
            }
        },
        //pass in our imported sequelize connection (direct connection to our database)
        sequelize,
        //dont automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // dont plurazie name of database table
        freezeTableName: true,
        //use underscores intead of camel-casing 
        underscored: true,
        //make it so our model name stays lowercase in the database
        modelName: 'user'
    },
);



module.exports = User;