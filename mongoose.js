const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongodbroot:rootmongodb@cluster0-csqcz.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Successfully connected to ${db.host}`);
});

module.exports = mongoose;