const mongoclient = require('mongodb').MongoClient;
require('dotenv').config();
const uri = process.env.MONGO_URI;

const client = new mongoclient(uri, {useUnifiedTopology : true});

let instance = null;

async function getConnection(){
    if(instance == null){
        try{
            instance = await client.connect();
        } catch(err) {
            console.log(err.message);
            throw new Error('Problemas en la conexión de la BBDD');
        }
    }
    return instance;
}

module.exports = {getConnection};