const { application } = require("express");

module.exports = (sequelize, Sequelize) => {
    const oauthTokens = sequelize.define('oauth_tokens', {
        token:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: None
        },
        resourceOwnerId:{
            type: Sequelize.STRING,
        },
        refreshToken: {
            type: Sequelize.STRING,
        },
        applicationId: {
            type: Sequelize.STRING,
        }
    }, 
    {
        indexes: [
            {
                unique: true,
                fields: ['token']
            }, 
            {
                unique: true,
                fields: ['refreshToken']
            }
        ]
    });
    return oauthTokens;
}