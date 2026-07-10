import { AppError } from "../errors/appError.js";
import * as AlumnoRepository from "../repositories/alumno.repository.js";

//getAll devuelve todos los alumons con opcion de filtrar porl grado
export const getAll = ({ grado } = {}) => {
  return AlumnoRepository.findAll({ grado });
};

//getById
export const getById = () => {
  const alumno = AlumnoRepository.findById(id);
  if (!alumno) throw new appError("Alumno no encontrado", 404);
  return alumno;
};

//create
export const create = ({ nombre, apellido, grado, seccion }) => {
  if (!nombre || !apellido || !grado || !seccion) {
    throw new AppError(
      "Todos los campos son requeridos: nombre, apellido, grado, seccion",
      400,
    );
  }
  const existente = AlumnoRepository.findByNombreCompleto(nombre, apellido);
  if (existente) {
    throw new AppError('Ya existe un alumno registrado con el mismo nombre y apellido', 409);
  }
  return AlumnoRepository.save({nombre, apellido, grado, seccion});
};

export const update = (id, campos) => {
    const existe = AlumnoRepository.findById(id);
    if(!existe){ throw new AppError('Alumno no encontrado', 404)}
    
    if(!campos){throw new AppError('No se proporcionaron campos para actualizar', 400)}

    const camposPermitidos = ['nombre', 'apellidos', 'grado', 'seccion'];
    const camposEnviados = Object.keys(campos).filter((campo) =>
        camposPermitidos.includes(campo),
    );

    if(camposEnviados.length === 0){
        throw new AppError('Debes enviar al menos un campo valio: nombre, apellido, grado, seccion', 400);
    }

    return AlumnoRepository.updateById(id, campos);
};

export const remove = (id) => {
    const existe = AlumnoRepository.findById(id);

    if(!existe){
        throw new AppError('Alumno no encontrado', 404);
    }

    AlumnoRepository.deleteById(id);
}