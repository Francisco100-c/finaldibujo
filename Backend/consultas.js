const pool = require('./conexion')
const bcrypt = require('bcryptjs')
import pg from 'pg';



const getUsuarios = async () => {
    const { rows: usuarios } = await pool.query("SELECT * FROM usuarios1")
    return usuarios
};

const agregarUsuario = async (email,password, rol, programa)=>{
    const consulta = 'INSERT INTO usuarios1 values (DEFAULT, $1, $2, $3, $4 )';
    const values = [email, password , rol, programa];
    
    
    
    try {
        await pool.query(consulta, values); 
        
    } catch (error) {
        return false;
    }
    console.log("Usuario Agregado");
    return true;
       
};
const verificarCredenciales = async (email, password) => {
    const consulta = "SELECT * FROM usuarios1 WHERE email = $1 AND password = $2"
    const values = [email, password]
    const { rowCount } = await pool.query(consulta, values)
    if (!rowCount)
        throw { code: 404, message: "No se encontró ningún usuario con estas credenciales" }

};

const obtenerUsuario = async (email) => {
    const consulta = "SELECT * FROM usuarios1 WHERE email = $1"
    const values = [email];
    const { rows } = await pool.query(consulta, values);
    return rows;
    
};

const getPortadas = async () => {
    const { rows: portadas } = await pool.query("SELECT * FROM portadas Full JOIN vermas on portadas.id = vermas.id full JOIN proyectos on vermas.id = proyectos.id")
    return portadas
};


module.exports= {getUsuarios, agregarUsuario, verificarCredenciales, obtenerUsuario, getPortadas};