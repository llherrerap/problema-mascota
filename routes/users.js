var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const mascotas = [
    {nombre: 'Gato'},
    {nombre: 'perro'},
    {nombre: 'raton'},
    {nombre: 'loro'}
  ]
  res.render('mascotas', { mascotas });
});

module.exports = router;
