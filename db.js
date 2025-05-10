const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL =  'mongodb://127.0.0.1:27017/hotels' // hotels is my database name

//Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true
})

//get the default connection
//mongoose maintains a default connection object represting the mongoDB connection.
const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected', () =>{
    console.log('Connected to MongoDB server');
});

db.on('error', (err) =>{
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () =>{
    console.log('MongoDB disconnected');
});

//Export the database connection
module.exports = db;