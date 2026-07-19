import {AppError } from '../errors/appError.js';

export const requireRole = (...rolesPermitidos) => {
    return (req, res, next) => {
        if (!rolesPermitidos.includes(req.usuario.rol)) {
            throw new AppError('Acceso denegado', 403);
        }
        next();
    };
};
