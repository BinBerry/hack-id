import {Sequelize, DataTypes} from 'sequelize'; 

module.exports = (sequelize: Sequelize) => {
    const oauthTokens = sequelize.define('oauth_tokens', {
        token:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: null
        },
        resourceOwnerId:{
            type: DataTypes.STRING,
        },
        refreshToken: {
            type: DataTypes.STRING,
        },
        applicationId: {
            type: DataTypes.STRING,
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