const connection = require("../config/connection");

function getUsers(req, res) {
    let id = req.body.id
    try {
        const querry = id ? `SELECT * FROM user_list where user_id=${id}` : 'SELECT * FROM user_list '
        connection.query(querry, (err, results, fields) => {
            if (err) {
              console.error('Error executing query: ' + err.stack);
              return;
            }
            console.log('Query results: ', results);
            res.json({
                "state": 1,
                "data": results,
                "message":"Successfully executed query"
            })
          });
    } catch (err) {
        res.json({
            "state": -1,
            "message": err.message || "Something went wrong"
        });
    }
}
// function getUsers(req, res) {
//     try {
//         connection.query('SELECT * FROM user_list', (err, results, fields) => {
//             if (err) {
//               console.error('Error executing query: ' + err.stack);
//               return;
//             }
//             console.log('Query results: ', results);
//             res.json({
//                 "state": 1,
//                 "data": results,
//                 "message":"Successfully executed query"
//             })
//           });
//     } catch (err) {
//         res.json({
//             "state": -1,
//             "message": err.message || "Something went wrong"
//         });
//     }
// }


module.exports = { getUsers }