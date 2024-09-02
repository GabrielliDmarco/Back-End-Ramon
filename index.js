const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotasProdutos = require('../Aula Ramon/Rotas/rotasProdutos')
const rotasClientes = require('../Aula Ramon/Rotas/rotasClientes')
app.use(bodyParser.json())

app.use('/produtos', rotasProdutos)
app.use('/clientes', rotasClientes)

// app.listen(8000)

module.exports = app