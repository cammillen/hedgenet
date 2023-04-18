//example of a backend call. Copy on the top the const pool line and then follow the below steps(remove error part, 
//not needed)
const pool = require('./db.js');
function fetchMyData() {
    pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      client.query('UPDATE public.comment SET time = $1 WHERE commentid = 2', ["2023-04-13 09:12:06"], (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
      });
    });
  }

fetchMyData();