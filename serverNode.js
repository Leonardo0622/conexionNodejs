//requerimientos
var mysql = require('mysql2'); 

var express = require('express');
var cors = require('cors');
var app = express();


app.use(cors());

app.get('/data', function(req, res) {
  var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'usuarios',
    user: 'root',
    password: '',
  });

  conexion.connect(function(err) {
    if (err) throw err;
    conexion.query('SELECT * FROM usuario', function (error, results, fields) {
      if (error) throw error;
      res.send(results);
      conexion.end();
    });
  });
});

app.listen(3000, function() {
  console.log('App está escuchando en el puerto 3000');
});


