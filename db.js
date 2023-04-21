const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hedgenet',
  password: '',
  port: 5432
});

module.exports = pool;

pool.connect();
pool.query('SELECT * FROM public.comment', (err, res) => {
    console.log(res.rows);
    pool.end();
  });