import { Sequelize } from 'sequelize-typescript';
import { OauthTokens } from '../models/OauthTokens';
import { User } from '../models/User';

const seq = new Sequelize({
    database: process.env.database as string, 
    username: process.env.db_username as string,
    password: process.env.db_password as string,
    host: process.env.db_host as string,
    dialect: 'mysql',
    models: [User, OauthTokens],
});



const db = {
    sequelize: seq
}

export = db;