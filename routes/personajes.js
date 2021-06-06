const express = require('express');
const router = express.Router();
const dataPersonajes = require('../data/personajes');
const joi = require('joi');

// ! /api/personajes
router.get('/', async (req, res, next) => {
  let personajes = await dataPersonajes.getPersonajes();
  res.json(personajes);
});

router.get('/:id', async (req, res) => {
  const personaje = await dataPersonajes.getPersonaje(req.params.id);
  res.json(personaje);
});

/* POST Añadir personaje sin ID (el objectID se genera en bbdd). */
// ! /api/personajes
router.post('/', async (req, res)=>{
    const schema = joi.object({
      name: joi.string().alphanum().max(20).required(),
      //VER STATS
      money: joi.number().min(0).required,
      level: joi.number().min(1).required,
      sashaGrade: joi.boolean().required,
      //VER WEAPONS
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

router.delete('/:id', async (req, res)=>{
  const personaje = await dataPersonajes.getPersonajes(req.params.id)
  if(!personaje){
      res.status(404).send('Personaje no encontrado');
  } else {
      dataPersonajes.deletePersonaje(req.params.id);
      res.status(200).send('Personaje eliminado');
  }
});

// ! /api/personajes/id
router.put('/:id', async (req, res) => {
  let personaje = req.body;
  personaje._id = req.params.id;
  dataPersonajes.updatePersonaje(personaje);
  res.json(personaje);
});

module.exports = router;
