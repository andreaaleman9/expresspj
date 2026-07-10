import * as AlumnoService from "../services/alumno.service.js";

//getall
export const getAll = (req, res) => {

    const { grado } = req.query;
    const alumnos = AlumnoService.getAll({ grado });
    res.json(alumnos);

};

//getById
export const getById = (req, res) => {
  const alumno = AlumnoService.getById(Number(req.params.id));
  res.json(alumno);
};

export const create = (req, res) => {
  const nuevoAlumno = AlumnoService.create({
    nombre: req.body?.nombre,
    apellido: req.body?.apellido,
    grado: req.body?.grado,
    seccion: req.body?.seccion,
    //puede ser que venga o no, por eso va el signo de interrogacion
  });
  res.status(201).json(nuevoAlumno);
};
//

export const update = (req, res) => {
  const alumnoActualizado = AlumnoService.update(
    Number(req.params.id),
    req.body,
  );
  res.json(alumnoActualizado);
};

export const remove = (req, res) => {
  AlumnoService.remove(Number(req.params.id));
  res.status(204).send();
};
