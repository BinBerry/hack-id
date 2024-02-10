import Sequelize from 'sequelize'; 

let seq = new Sequelize.Sequelize(process.env.database as string, 
    process.env.db_username as string,
    process.env.db_password as string, {
        host: process.env.db_host,
        dialect: 'mysql'
});



const db = {
    sequelize: seq
}

export = db;