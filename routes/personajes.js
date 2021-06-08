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

// ! /api/personajes
router.post('/', async (req, res) => {
  let personaje = req.body;
  personaje = await dataPersonajes.addPersonaje(personaje);
  res.json(personaje);
});

// ! /api/personajes/id
router.put('/:id', async (req, res) => {
  let personaje = req.body;
  personaje._id = req.params.id;
  dataPersonajes.updatePersonaje(personaje);
  res.json(personaje);
});

// ! /api/personajes/id
router.delete('/:id', async (req, res) => {
  const personaje = await dataPersonajes.getPersonajes(req.params.id)
  if(!personaje){
      res.status(404).send('Personaje no encontrado');
  } else {
      dataPersonajes.deletePersonaje(req.params.id);
      res.status(200).send('Personaje eliminado');
  }
});

module.exports = router;
