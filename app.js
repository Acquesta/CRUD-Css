//importar as configs do servidor
const {app,porta} = require('./config/servidor')

//çigar o servidor
app.listen(porta,()=>{
    console.log("https://localhost:" + porta)
})
