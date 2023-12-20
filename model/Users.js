const { DataTypes, Sequelize, Model } = require('sequelize');


// sequelize will auto add a createdAt, updatedAt, and auto increment id
module.exports = (sequelize) => {
    const User = sequelize.define('user', {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        encryptedPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        resetPasswordToken:{
            type: DataTypes.STRING
        },
        resetPasswordSentAt: {
            //Sequelize date type is equal to MySQL's datetime type
            type: DataTypes.DATE
        },
        rememberCreatedAt: {
            type: DataTypes.DATE
        },
        signInCount:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        currentSignInAt: {
            type: DataTypes.DATE
        },
        lastSignInAt: {
            type: DataTypes.DATE
        },
        currentSignInIp: {
            type: DataTypes.STRING
        },
        lastSignInIp: {
            type: DataTypes.STRING
        },
        provider: {
            type: DataTypes.STRING
        },
        uid: {
            type: DataTypes.STRING
        },
        reminderSentAt: {
            type: DataTypes.DATE
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        receiveWeeklyReport: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, 
    {
        indexes: [
            {
                unique: true,
                fields: ['email']
            }, 
            {
                unique: true,
                fields: ['reset_password_token']
            },
            {
                fields: ['provider']
            },
            {
                fields: ['uid']
            }
        ]
    });
    return User;
}