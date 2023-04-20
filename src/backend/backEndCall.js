// const pool = require('./db.js');

// function fetchMyData(sqlArg) {
//     pool.connect((err, client, release) => {
//       if (err) {
//         return console.error('Error acquiring client', err.stack);
//       }
//       client.query(sqlArg, (err, result) => {
//         release();
//         if (err) {
//           return console.error('Error executing query', err.stack);
//         }
//         return result.rows;
//       });
//     });
// }

// function pushMyData(sqlArg) {
//     pool.connect((err, client, release) => {
//         if (err) {
//           return console.error('Error acquiring client', err.stack);
//         }
//         client.query(sqlArg, (err) => {
//           release();
//           if (err) {
//             return console.error('Error executing query', err.stack);
//           }
//         });
//       });
// }

// export default {pushMyData, fetchMyData};

