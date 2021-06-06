const express = require('express');
const router = express.Router();
const dataPersonajes = require('../data/personajes');
const joi = require('joi');

/* GET personajes listing. */
router.get('/', async (req, res, next) => {
  let personajes = await dataPersonajes.getPersonajes();
  res.json(personajes);
});

/* POST Añadir personaje sin ID (el objectID se genera en bbdd). */
router.post('/', async (req, res)=>{
    const schema = joi.object({
      //VER CAMPOS DEL PERSONAJE PARA VALIDAR
    });
    const result = schema.validate(req.body);
    if(result.error){
      res.status(400).send(result.error.details[0].message);
    } else {
      let personaje = req.body;
      personaje = await dataPersonajes.addPersonaje(personaje);
      res.json(personaje);
    } 
});


module.exports = router;
