//base de datos temporal en memoria
let alumnos = [
    { id: 1, nombre: 'María', apellido: 'González', grado: '5to', seccion: 'A' },
    { id: 2, nombre: 'Carlos', apellido: 'Ramos', grado: '5to', seccion: 'B' },
    { id: 3, nombre: 'Andrea', apellido: 'López', grado: '6to', seccion: 'A' },
];

//variable para generar el id autoincremental
let idActual = 4;

// findAll
export const findAll = ({grado} ={}) => {
    if(grado) return alumnos.filter(a => a.grado === grado);
    return alumnos;
};

//findById - devuelve un alumno por su ID
export const findById = (id) => {
    return alumnos.find((a) => a.id === Number(id) ?? null);
};

//findByNombreCompleto - devuelve un alumno por su nombre completo
export const findByNombreCompleto = (nombre, apellido) => {
    return (alumnos.find((a) => a.nombre === nombre && a.apellido === apellido) ?? null);
};

//agrega un nuevo alumno a la base de datos
export const save = ({nombre, apellido, grado, seccion}) => {
    const nuevoAlumno = {
        id: idActual++,
        nombre, 
        apellido, 
        grado, 
        seccion,
    };
    alumnos.push(nuevoAlumno);
    return nuevoAlumno;
}

//update actualiza un alumno existente
export const updateById = (id, campos) => {
    const alumno = alumnos.find(a => a.id === Number(id));
    if(!alumno) return null;
    
    const permitidos = ['nombre', 'apellido', 'grado','seccion'];
    permitidos.forEach(campo => {
        if(campos[campo] !== undefined) alumno[campo] = campo[campo];
        //si lo encuentra lo asigna
    });
    return alumno;
};

//delete
export const deleteById = (id) => {
    const alumnoIndex = alumnos.findIndex(a => a.id === Number(id));
    if(alumnoIndex === -1) return false;
    alumnos.splice(alumnoIndex, 1);
}
//1:25
