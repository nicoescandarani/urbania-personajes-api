const  connection = require('./connection');
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

async function deleteHero(id) {
  const clientmongo = await connection.getConnection();
  const result = await clientmongo.db('urbania')
                                  .collection('heroes')
                                  .deleteOne({ _id: new objectId(id) });
  return result;
}

module.exports = { getHeroes, getHero, addHero, deleteHero };
