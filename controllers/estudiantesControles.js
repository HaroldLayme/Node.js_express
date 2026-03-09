class EstudiantesController {
    constructor() {

    }
    consultar(req, res){
        res.json({msg: 'Consulta de estudiantes'}); 
    }
    consultarDetalle(req, res) {
        res.json({msg: 'Consulta de un estudiante'}); 
    }

    ingresar(req, res) {
        res.json({msg: 'Ingrso de estudiante'}); 
    }

    actualizar(req, res) {
        res.json({msg: 'Actualizacion de estudiante'}); 
    }

    borrar(req, res) {
        res.json({msg: 'Borrado de estudiante'}); 
    }
}

module.exports = new EstudiantesController();