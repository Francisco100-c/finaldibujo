const express = require ('express');
const fs = require('fs')
const app = express();
const cors = require('cors');
const pool  = require('./conexion');
const jwt = require("jsonwebtoken");
const {api_secret }= require ('./config')

const {getUsuarios, agregarUsuario, verificarCredenciales, obtenerUsuario, getPortadas} = require('./consultas')


app.use(cors());
app.use(express.json());

app.listen( 3000, console.log("SERVER ON PROYECTO FINAL"))

app.get("/usuarios", async (req, res) => {
    try {
        const usuarios = await getUsuarios();
        res.json(usuarios)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
});

app.post("/usuarios", async (req, res) => {
    
    const { email,password, rol, programa } = req.body;
    const result = await agregarUsuario(email,password, rol, programa);
    res.send("Usuario agregado con éxito");
    
      
});

app.post("/login", async (req, res) => {
    try {
        const { email, password} = req.body
        await verificarCredenciales(email, password)
        const token = jwt.sign({ email }, api_secret)
        res.send(token)
    } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }
});

app.get("/usuarios", async (req, res) => {
    const Authorization = req.header("Authorization")
        const token = Authorization.split("Bearer")[1]
        jwt.verify(token, api_secret)
        const { email } = jwt.decode(token)
        const result = await obtenerUsuario(email);
        res.json(result[0]);

});

app.get("/portadas", async (req, res) => {
    try {
        const portadas = await getPortadas();
        res.json(portadas)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
});
