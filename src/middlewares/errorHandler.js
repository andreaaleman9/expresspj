import {AppError} from '../errors/appError.js';
export const errorHandler = (err, req, res, next) =>{
    console.error(`[ERROR] ${req.method} ${req.url} => ${err.message}`);
    
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }
    res.status(500).json({
        error: 'Error interno del servidor',
    });
};
