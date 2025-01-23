require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('MongoDB connection string (MONGODB_URI) is undefined.');
}

const client = new MongoClient(uri);

async function testConnection() {
    try {
        await client.connect();
        console.log('Successfully connected to MongoDB!');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    } finally {
        await client.close();
    }
}

testConnection();
