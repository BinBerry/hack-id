// sequelize will auto add a createdAt, updatedAt, and auto increment id
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ""
        },
        firstName: {
            type: Sequelize.STRING,
        },
        lastName: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        encryptedPassword: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ""
        },
        resetPasswordToken:{
            type: Sequelize.STRING
        },
        resetPasswordSentAt: {
            //Sequelize date type is equal to MySQL's datetime type
            type: Sequelize.DATE
        },
        rememberCreatedAt: {
            type: Sequelize.DATE
        },
        signInCount:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        currentSignInAt: {
            type: Sequelize.DATE
        },
        lastSignInAt: {
            type: Sequelize.DATE
        },
        currentSignInIp: {
            type: Sequelize.STRING
        },
        lastSignInIp: {
            type: Sequelize.STRING
        },
        provider: {
            type: Sequelize.STRING
        },
        uid: {
            type: Sequelize.STRING
        },
        reminderSentAt: {
            type: Sequelize.DATE
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        receiveWeeklyReport: {
            type: Sequelize.BOOLEAN,
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
                fields: ['resetPasswordToken']
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