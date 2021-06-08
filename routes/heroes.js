const express = require('express');
const router = express.Router();
const heroesData = require('../data/heroes');
const joi = require('joi');

// ! /api/heroes/
router.get('/', async (req, res) => {
    const heroes =  await heroesData.getHeroes();
    res.json(heroes);
});

// ! /api/heroes/id
router.get('/:id', async (req, res) => {
  const hero = await heroesData.getHero(req.params.id);
  if(hero) {
    res.json(hero);
  } else {
    res.status(404).send('No se encontró el usuario deseado.');
  }
});

// ! /api/heroes/
router.post('/', async (req, res)=>{
    let hero = req.body;
    console.log(hero);
    hero = await heroesData.addHero(hero);
    res.json(hero);
});

// ! /api/heroes/id
router.put('/:id', async (req, res) => {
  let hero = req.body;
  hero._id = req.params.id;
  heroesData.updateHero(hero);
  res.json(hero);
});

// ! /api/heroes/id
router.delete('/:id', async (req, res) => {
    const hero = await heroesData.getHero(req.params.id);
    if(hero) {
        heroesData.deleteHero(req.params.id);
        res.status(200).send('Heroe eliminado.');
    } else {
        res.status(404).send('Heroe no encontrado.');
    }
});

module.exports = router;
