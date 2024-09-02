const express = require('express')
const router = express.Router()
const controlador = require('../ControladorClientes/controladorCliente')


router.get('', controlador.listaCliente)
router.get('/:id', controlador.getCliente)
router.post('/:id', controlador.createCliente)
router.post('', controlador.updateCliente)
router.delete('/:id', controlador.deleteCliente )

module.exports = router;