const { Pool }= require('pg');

const pool= new Pool(
                    {
                        host: 'localhost',
                        user: 'postgres',
                        password: 'myllen.1469',
                        database: 'dibtecnico',
                        allowExitOnIdle: true
});

const getDate = async ()=>{
    const query = 'SELECT NOW()'
    const result = await pool.query(query);
    console.log(result.rows);
};
getDate();

module.exports = pool;