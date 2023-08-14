const express = require("express")
const proyectosSchema = require("../models/proyectos")

const router = express.Router();

//Agregar
router.post("/proyectos", (req, res) => {
    const proyectos = proyectosSchema(req.body);
    proyectos.save().then(() => res.json(data)).catch((error) => res.json({ message: error }));
});

//leer 
router.get("/proyectos",(req,res) => {
    proyectosSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
})
//eliminar
router.delete("/proyectos/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await proyectosSchema.findOneAndRemove({ system_id: id });
        res.json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar:', error);
        res.json({ message: error });
    }
});

module.exports = router;