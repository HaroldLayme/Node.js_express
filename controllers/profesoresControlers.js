class ProfesoresController {
    constructor() {

    }
    consultar(req, res){
        res.json({msg: 'Consulta de Profesoress'}); 
    }
    consultarDetalle(req, res) {
        res.json({msg: 'Consulta de un Profesor'}); 
    }

    ingresar(req, res) {
        res.json({msg: 'Ingrso de Profesor'}); 
    }

    actualizar(req, res) {
        res.json({msg: 'Actualizacion de Profesor'}); 
    }

    borrar(req, res) {
        res.json({msg: 'Borrado de Profesor'}); 
    }
}

module.exports = new ProfesoresController();