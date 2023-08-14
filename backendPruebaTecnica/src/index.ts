import express from "express";
const app = express();
const mongoose = require("mongoose");
const proyectoRouter = require("./routes/crud");
const cors = require('cors');


app.use(express.json())
app.use(cors());

const PORT = 3000



//middelware
app.use('/api', proyectoRouter);

//routes
app.get("/", (_req, res) => {
    console.log("someone pinged here: "  + new Date().toLocaleDateString())
    res.send("pong")
})


//conexion mongo
mongoose.connect('mongodb://127.0.0.1/Proyectos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//validación
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos MongoDB');
});
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})