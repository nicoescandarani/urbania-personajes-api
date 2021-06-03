const  connection = require('./connection');
let objectId = require('mongodb').ObjectId;

async function getPersonajes(){
    const clientmongo = await connection.getConnection();
    const personajes = await clientmongo.db('urbania')
                                        .collection('personajes')
                                        .find()
                                        .toArray();
    return personajes;
}

async function addPersonaje(personaje){
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('urbania')
                                        .collection('personajes')
                                        .insertOne(personaje);
    return result;
}

module.exports = {getPersonajes, addPersonaje};
