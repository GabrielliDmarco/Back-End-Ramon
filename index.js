const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas_produtos = require('./rotas/rotaProdutos')
const clientes = require('./rotas/rotaClientes')


app.use(bodyParser.json())

app.use('/produtos', rotas_produtos)
app.use('/clientes', clientes)

// app.listen(5500)

module.exports = app