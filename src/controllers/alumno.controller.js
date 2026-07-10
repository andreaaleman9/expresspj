import * as AlumnoService from '../services/alumno.service.js';

//getall
export const getAll = (req, res) => {
    try {
        const {grado} = req.query;
        const alumnos = AlumnoService.getAll({grado});
        res.json(alumnos);
    } catch (error) {
        res.status(error.statusCode ?? 500).json({error: error.message});
    }
};

//getById
export const getById = (req, res) => {
    try {
        const alumno = AlumnoService.getById(Number(req.params.id));
        res.json(alumno);
    } catch (error) {
        res.status(error.statusCode ?? 500).json({error: error.message});
    }
};

export const create = (req, res) => {
    try {
        const nuevoAlumno = AlumnoService.create({
            nombre: req.body?.nombre,
            apellido: req.body?.apellido,
            grado: req.body?.grado,
            seccion: req.body?.seccion
            //puede ser que venga o no, por eso va el signo de interrogacion
        });
        res.status(201).json(nuevoAlumno);
    } catch (error) {
        res.status(error.statusCode ?? 500).json({error: error.message});
    }
};
//

export const update = (req, res) => {
    try {
        const alumnoActualizado = AlumnoService.update(Number(req.params.id), req.body);
    } catch (error) {
        res.status(error.statusCode ?? 500).json({error: error.message});
    }
};

export const remove = (req, res) => {
    try {
        AlumnoService.remove(Number(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(error.statusCode ?? 500).json({error: error.message});
    }
};