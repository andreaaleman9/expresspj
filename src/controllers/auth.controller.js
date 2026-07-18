import * as AuthService from '../services/auth.service.js';

export const registrar = async (req, res) => {
    const usuario = await AuthService.registrar({
        nombre: req.body?.nombre,
        email: req.body?.email,
        password: req.body?.password,
    });
    res.status(201).json(usuario);
};

export const login = async (req, res) => {
    const usuario = await AuthService.iniciarSesion({
        email: req.body?.email,
        password: req.body?.password,
    });
    res.json(usuario);
};

export const cambiarPassword = async (req, res) => {
    await AuthService.cambiarPassword(Number(req.params.id), {
        passwordActual: req.body?.passwordActual,
        passwordNuevo: req.body?.passwordNuevo,
    });
    res.status(204).send();
}
