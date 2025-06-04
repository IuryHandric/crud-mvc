// Imports
const express = require('express');
const exphbs = require('express-handlebars');
require('dotenv').config();

// Modulos

const Task = require('./models/Task')
const taskRoutes = require('./routes/tasksRoutes');

const app = express();
const port = process.env.PORT || 3000;

const conn = require('./db/conn')

// Configurando a engine Handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// Pasta estática
app.use(express.static('public'))

// Ativando arquivo de rotas
app.use('/', taskRoutes);

// Iniciando Servidor usando Sequelize
conn.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta http://localhost:${port}`)
    })
}).catch((e) => console.log(e))