import 'dotenv/config'; //esta libreria llama a el archivo .env con las variables de entorno
import express from 'express';
import alumnosRoutes from './src/routes/alumno.routes.js';
import {errorHandler} from './src/middlewares/errorHandler.js';

//crearmos una instancia de express
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json()); //vamos a usar el formato json en nuestra app
//arrancar el servidor y escuchar peticiones en el puerto especificado

app.use('/api/alumnos', alumnosRoutes);

//capturar cualquier solicitud que no coincida con las rutas establecidas
app.use((req, res) => {
    res.status(404).json({
        error: "ruta no encontrada"
    });
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
});

//LO ANTERIOR
/*
//rutas
app.get('/', (req, res) => {
    res.json({
        message: 'API de colegio',
    });
});

//base de datos temporal en memoria
let alumnos = [
    { id: 1, nombre: 'María', apellido: 'González', grado: '5to', seccion: 'A' },
    { id: 2, nombre: 'Carlos', apellido: 'Ramos', grado: '5to', seccion: 'B' },
    { id: 3, nombre: 'Andrea', apellido: 'López', grado: '6to', seccion: 'A' },
];

//variable para generar el id autoincremental
let idActual = 4;

// GET /alumnos
//devuelve un alumno especifico por su ID
//usaremos la funcion find para buscar en el arreglo el alumno por id
app.get('/alumnos/:id', (req, res) =>{
    const alumno = alumnos.find((a) => a.id === Number(req.params.id))
    //si no encuentra al alumno retornamos 404 alumno no encontraado
    if(!alumno){
        return res.status(404).json({
            error: 'Alumno no encontrado',
        });
    }
    res.json(alumno);
});

//listar todos los alumnos
app.get('/alumnos', (req, res) => {
    const grado = req.query.grado;
    const resultado = grado ? alumnos.filter((a) => a.grado === grado):alumnos;
    res.json(resultado);
});

//registrar alumnos
//POST /alumnos

app.post('/alumnos', (req, res) => {
    //si van vacios
    if(req.body === undefined || 
        req.body.nombre === undefined ||
        req.body.apellido === undefined ||
        req.body.grado === undefined ||
        req.body.seccion === undefined){
            return res.status(400).json({
                //retornamos un error de usuario porque no esta mandando datos completos
                error: "Todos los campos son requeridos: nombre, apellido, grado, seccion",
            })
        }
    const {nombre, apellido, grado, seccion} = req.body;
    //creamos un nuevo alumno
    const nuevoAlumno = {
        id:idActual++,
        nombre, //como tiene el mismo nombre equivale a esto= nombre:nombre
        apellido,
        grado,
        seccion,
    };
    //agregar un nuevo objeto al arreglo
    alumnos.push(nuevoAlumno);
    //respondemos
    res.status(201).json({
        message:'alumno registrado exitosamente',
        alumno:nuevoAlumno,
    });
});

//PATCH /alumnos/:id
//actualiza solo los campos enviados en el body, los demas se mantienen igual
app.patch('/alumnos/:id', (req, res) => {

    if(req.body === undefined){
        return res.status(400).json({
            error: "El body no puede estar vacio"
        });
    }

    const alumno = alumnos.find((a) => a.id === Number(req.params.id));
    if(!alumno){
        return res.status(400).json({
            error: "Alumno no encontrado",
        });
    }
    
    const {nombre, apellido, grado, seccion} = req.body;
    if(nombre) alumno.nombre = nombre;
    if(apellido) alumno.apellido = apellido;
    if(grado) alumno.grado = grado;
    if(seccion) alumno.seccion = seccion;
    res.json({
        message: "Alumno actualizado exitosamente",
        alumno,
    });
});

//PUT /alumnos/:id
//reemplaza todos los datos enviados de un alumno, requiere todos los campos
app.put('/alumnos/:id', (req, res) => {

    if(req.body === undefined){
        return res.status(400).json({
            error: "El body no puede estar vacio"
        });
    }

    const alumno = alumnos.find((a) => a.id === Number(req.params.id));
    if(!alumno){
        return res.status(400).json({
            error: "Alumno no encontrado",
        });
    }
    
    const {nombre, apellido, grado, seccion} = req.body;
    alumno.nombre = nombre;
    alumno.apellido = apellido;
    alumno.grado = grado;
    alumno.seccion = seccion;

    res.json({
        message: "Alumno actualizado exitosamente",
        alumno,
    });
});

//DELETE /alumnos/:id
// elimina un alumno por su id
app.delete('/alumnos/:id', (req, res) => {
    //findindex para buscar en base al indice y devuelve la posicion
    const alumnoIndex = alumnos.findIndex((a) => a.id === Number(req.params.id));
    //validamos si no lo encontr
    if(alumnoIndex === -1){
        return res.status(404).json({
            message:"Alumno no encontrado",
        });
    }
    //splice nos permite remover elemento del arreglo, 
    // //le damos el indice y cuantos registros queremos eliminar
    alumnos.splice(alumnoIndex, 1);
    res.status(204).send();
});
*/
