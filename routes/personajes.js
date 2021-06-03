var express = require('express');
var router = express.Router();

/* GET personajes listing. */
router.get('/', function(req, res, next) {
  res.send('HOLA!!');
  console.log('Nico!!');
});

module.exports = router;
