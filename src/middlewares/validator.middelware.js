
export const validateSchema = (schema) => (req,res,next) => {
try {
    schema.parse(req.body)
    next();
} catch (error) {
    return res.status(400).json({ error: error && error.errors ? error.errors.map((error) => error.message) : 'Error de validación' });

}
};