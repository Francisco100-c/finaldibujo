const { Pool }= require('pg');
const env =require('dotenv')
import pg from 'pg';
const pool= new Pool(
                    {
                        connectionString: process.env.POSTGRES_URL + "?sslmode=require",                     
});


module.exports = pool;