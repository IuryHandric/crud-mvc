require('dotenv').config();
const { Sequelize } = require('sequelize')

// Primeiro nome do banco, depois usuário e senha
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

// Testando conexão com o banco.
async function connect() {
    try {

        await sequelize.authenticate();
        console.log('Conexão bem sucedida ao MySQL!')

    } catch (e) {
        console.log('Erro na conexão com o banco:', e)
    }
}

connect();

module.exports = sequelize;