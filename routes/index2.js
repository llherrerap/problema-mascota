var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index2', { titulo: 'Mascotas', nombre: 'Slayder', apellido: 'Reyes' });
});

router.post('/login-mascotas', (req, res) => {
  const password = req.body.pass
  const usuario = req.body.user
  const mascotas = [
  {nombre: 'mascota1', edad: 31},
  {nombre: 'mascota1', edad: 25},
  {nombre: 'mascota1', edad: 41},
  {nombre: 'mascota1', edad: 26},
  {nombre: 'mascota1', edad: 31},
  {nombre: 'mascota1', edad: 25},
  {nombre: 'mascota1', edad: 41}
  ]
  if (password==='mascota1234' && usuario==='mascota') {
  res.render('mascotas', {mascotas})
  } else{
    res.render('index2', {mensaje: 'Credenciales incorrectas', error: true})
  }
  })

module.exports = router;