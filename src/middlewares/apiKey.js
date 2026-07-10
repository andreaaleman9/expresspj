export const apiKey = (req, res, next) =>{
    const claveRecibida = req.header(('x-api-key'));
    if(!claveRecibida || claveRecibida !== process.env.API_KEY){
        return res.status(401).json({error: 'Error APIKEY invalida o ausente'});
    };
    next();
};