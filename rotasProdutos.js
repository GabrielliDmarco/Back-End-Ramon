const express = require('express')
const router = express.Router()
const controlador = require('../ControladorProduto.js/controlador')


router.get('', controlador.listaProdutos)
router.get('/:id', controlador.getProduto)
router.post('/:id', controlador.createProduto )
router.post('', controlador.updateProduto )
router.delete('/:id', controlador.deleteProduto)

module.exports = router;