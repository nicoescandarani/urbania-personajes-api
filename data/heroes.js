const connection = require('./connection');
let objectId = require('mongodb').ObjectId;

async function getHeroes(){
    const clientmongo = await connection.getConnection();
    const heroes = await clientmongo.db('urbania')
                                        .collection('heroes')
                                        .find()
                                        .toArray();
    return heroes;
}

async function getHero(id) {
  const clientmongo = await connection.getConnection();
  const hero = await clientmongo.db('urbania')
                                  .collection('heroes')
                                  .findOne({ _id: new objectId(id) });
  return hero;
}

async function addHero(hero){
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('urbania')
                                        .collection('heroes')
                                        .insertOne(hero);
    return result;
}

async function updateHero(hero) {
  const clientmongo = await connection.getConnection();
  const query = {_id: new objectId(hero._id)};
  const newValues = { $set: {
          id: hero.id,
          userId: hero.userId,
          name: hero.name,
          stats: {
              wisdom: hero.stats.wisdom,
              power: hero.stats.power,
              strength: hero.stats.strength,
              agility: hero.stats.agility,
              mana: hero.stats.mana,
          },
          money: hero.money,
          level: hero.level,
          enemiesDefeated: hero.enemiesDefeated,
          sashaGrade: hero.sashaGrade,
          weapons: hero.weapons
      }
  };
  const result = await clientmongo.db('urbania')
                  .collection('heroes')
                  .updateOne(query, newValues);
  return result;
}

async function deleteHero(id) {
  const clientmongo = await connection.getConnection();
  const result = await clientmongo.db('urbania')
                                  .collection('heroes')
                                  .deleteOne({ _id: new objectId(id) });
  return result;
}

module.exports = { getHeroes, getHero, addHero, updateHero, deleteHero };
