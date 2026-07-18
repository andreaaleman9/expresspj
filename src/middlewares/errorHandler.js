/*
import {AppError} from '../errors/appError.js';

import {Prisma} from '@prisma/client';

export const errorHandler = (err, req, res, next) =>{
    console.error(`[ERROR] ${req.method} ${req.url} => ${err.message}`);
    
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }

    if(err instanceof Prisma.PrismaClientKnownRequestError){
        if(err.code === 'P2002'){
            return res.status(400).json({  
                error: 'El registro ya existe',
            });
        }
        if(err.code === 'P2025'){
            return res.status(404).json({  
                error: 'registro no encontrado',
            });
        }
    };

    res.status(500).json({
        error: 'Error interno del servidor',
    });
};
*/

import { AppError } from '../errors/appError.js';

// 1. Importamos el paquete completo por defecto para evitar el SyntaxError
import pkg from '@prisma/client';

// 2. Extraemos Prisma de forma segura
const { Prisma } = pkg;

export const errorHandler = (err, req, res, next) => {
    console.error(`[ERROR] ${req.method} ${req.url} => ${err.message}`);
    
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }

    // Tu lógica de Prisma ahora funcionará perfectamente aquí
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            return res.status(400).json({  
                error: 'El registro ya existe',
            });
        }
        if (err.code === 'P2025') {
            return res.status(404).json({  
                error: 'registro no encontrado',
            });
        }
    }

    res.status(500).json({
        error: 'Error interno del servidor',
    });
};