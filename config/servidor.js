//importar o express
const express = require('express')

//executar o express aplication
const app = express()

//configurar a porta local
const porta = process.env.PORT || 3030

//importar o consign
const consign = require('consign')

//executar  consign 
consign().include('./routes').into(app)

//indicar a pasta dos assets (css, js, images, webfonts)
app.use(express.static('./src/'))

module.exports = {app, porta}