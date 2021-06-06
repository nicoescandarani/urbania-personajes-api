const  connection = require('./connection');
let objectId = require('mongodb').ObjectId;

// ! Get All Personajes.
async function getPersonajes(){
    const clientmongo = await connection.getConnection();
    const personajes = await clientmongo.db('urbania')
                                        .collection('personajes')
                                        .find()
                                        .toArray();
    return personajes;
}

// ! Get one Personaje.
async function getPersonaje(id) {
    const clientmongo = await connection.getConnection();
    const personaje = await clientmongo.db('urbania')
                                    .collection('personajes')
                                    .findOne({ _id: new objectId(id) });
    return personaje;
}

// ! Add Personaje.
async function addPersonaje(personaje){
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('urbania')
                                        .collection('personajes')
                                        .insertOne(personaje);
    return result;
}

// ! Update Personaje.
async function updatePersonaje(personaje) {
    const clientmongo = await connection.getConnection();
    const query = {_id: new objectId(personaje._id)};
    const newValues = { $set: {
            id: personaje.id,
            userId: personaje.userId,
            name: personaje.name,
            stats: {
                wisdom: personaje.stats.wisdom,
                power: personaje.stats.power,
                strength: personaje.stats.strength,
                agility: personaje.stats.agility,
                mana: personaje.stats.mana,
            },
            money: personaje.money,
            level: personaje.level,
            enemiesDefeated: personaje.enemiesDefeated,
            sashaGrade: personaje.sashaGrade,
            weapons: personaje.weapons
        }
    };
    const result = await clientmongo.db('urbania')
                    .collection('personajes')
                    .updateOne(query, newValues);
    return result;
}

// ! Delete Personaje.
async function deletePersonaje(id) {
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('urbania')
                                    .collection('personajes')
                                    .deleteOne({ _id: new objectId(id) });
    return result;
}

module.exports = {getPersonajes, getPersonaje, addPersonaje, updatePersonaje, deletePersonaje};
