const express = require('express');
const app = express();
const estudiantesRoutes = require('./routers/estudiantesRoutes')

app.get('/', (req,res)=>{
    res.send("Hola mundo")
});

app.use('/estudiantes', estudiantesRoutes);

app.listen(6500, ()=> {
    console.log('Servidor activo');
});