import {prisma} from '../config/prisma.js';
// findAll
export const findAll = ({grado} ={}) => {
    return prisma.alumno.findMany({
        where: grado ? {grado} : undefined,
    });
};

//findById - devuelve un alumno por su ID
export const findById = (id) => {
    return prisma.alumno.findUnique({
        where: {id},
    });
};

//findByNombreCompleto - devuelve un alumno por su nombre completo
export const findByNombreCompleto = (nombre, apellido) => {
    return prisma.alumno.findFirst({
        where: {nombre, apellido},
    });
};

//agrega un nuevo alumno a la base de datos
export const save = ({nombre, apellido, grado, seccion}) => {
    return prisma.alumno.create({
        data: {nombre, apellido, grado, seccion},
    });
}

//update actualiza un alumno existente
export const updateById = (id, campos) => {
    return prisma.alumno.update({
        where: {id},
        data: campos,
    });
};

//delete
export const deleteById = (id) => {
    return prisma.alumno.delete({
        where: {id},
    });
}

