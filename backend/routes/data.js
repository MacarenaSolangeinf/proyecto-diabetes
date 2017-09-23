var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
      id: 1,
      fecha: new Date(),
      medicion: 123,
      descripcion: "Después de la merienda",
      insulina: false,
      medicacion: true
    }, {
      id: 2,
      fecha: new Date(),
      medicion: 124,
      descripcion: "Después de la cena",
      insulina: false,
      medicacion: true
    }]);
});

module.exports = router;
