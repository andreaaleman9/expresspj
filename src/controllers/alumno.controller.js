import * as AlumnoService from "../services/alumno.service.js";

//getall
export const getAll = async (req, res) => {

    const { grado } =  req.query;
    const alumnos = await AlumnoService.getAll({ grado });
    res.json(alumnos);

};

//getById
export const getById = async (req, res) => {
  const alumno = await AlumnoService.getById(Number(req.params.id));
  res.json(alumno);
};

export const create = async (req, res) => {
  const nuevoAlumno = await AlumnoService.create({
    nombre: req.body?.nombre,
    apellido: req.body?.apellido,
    grado: req.body?.grado,
    seccion: req.body?.seccion,
    //puede ser que venga o no, por eso va el signo de interrogacion
  });
  res.status(201).json(nuevoAlumno);
};
//

export const update = async (req, res) => {
  const alumnoActualizado = await AlumnoService.update(
    Number(req.params.id),
    req.body,
  );
  res.json(alumnoActualizado);
};

export const remove = async (req, res) => {
  await AlumnoService.remove(Number(req.params.id));
  res.status(204).send();
};
