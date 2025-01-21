import  express  from "express";
import  mongoose  from "mongoose";

const Usuario = mongoose.model('Usuario', new mongoose.Schema({
    nombre: String,
    apellido: String,
}))

mongoose.connect('mongodb://usuario:password@base-datos:27017/miapp?authSource=admin')

const app = express()

app.get ('/', async (req, res) => {
    console.log(req);
    const usuarios = await Usuario.find();
    return res.send(usuarios)
})

app.get('/crear', async (req, res) => {
    const nombres = ["Carlos", "María", "Juan", "Ana", "Pedro", "Laura", "Luis", "Sofía", "Jorge", "Elena"];
    const apellidos = ["González", "Rodríguez", "Pérez", "López", "Martínez", "Gómez", "Fernández", "Sánchez", "Ramírez", "Torres"];

    let nombre = nombres[obtenerAleatorio()];
    let apellido = apellidos[obtenerAleatorio()];
    
    console.log(req);
    await Usuario.create({nombre: nombre.toString(), apellido: apellido.toString()})
    return res.send('Usuario Creado')
})

function obtenerAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * 10);
    return indiceAleatorio;
}

app.listen(3000, ()=> console.log('listening...'))