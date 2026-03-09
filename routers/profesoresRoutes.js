const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesoresControlers')

router.get('/', profesorController.consultar);

router.post('/', profesorController.ingresar);

router.route("/:id")
    .get(profesorController.consultarDetalle)
    .put(profesorController.actualizar)
    .delete(profesorController.borrar);

 module.exports = router;