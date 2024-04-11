const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://alejandrofigueroa07:agosto07@cluster0.pawgw5l.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Conexión establecida con MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar con MongoDB Atlas:', error);
    }
}

module.exports = { client, connectToMongoDB };
