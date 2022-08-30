const mongoose = require('mongoose')

const user = "user3tri"
const pw ="123"
const cluster = "cluster0.umqxy.mongodb.net"
const bd = "html5up"

const conexao = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://' + user + ":" + pw + "@" + cluster + "/" + bd)
}

const modelo = mongoose.Schema({
    estilos:String,
    imagem:String,
    titulo:String,
    texto:String,
    cadastradoem:{type:Date, defult:Date.now}
})

const conteudo = mongoose.model('conteudo', modelo)

module.exports = {conteudo, conexao}