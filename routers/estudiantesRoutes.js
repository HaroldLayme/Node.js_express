const express = require('express');
const router = express.Router();

router.get('/estudiantes', (req,res) =>{
    res.json({msg: 'Consulta de estudiantes'});
});

router.post('/estudiantes', (req,res) =>{
    res.json({msg: 'Ingreso de estudiantes'});
});

router.put('/estudiantes', (req,res) =>{
    res.json({msg: 'Actualizacion de estudiantes'});
});

router.delete('/estudiantes', (req,res) =>{
    res.json({msg: 'Borrado de estudiantes'});
});

 module.export = router;