const mongoose = require('../mongoose.js');

const newsSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String,
  url: String,
  urlToImage: String,
  publishedAt: Date
});

const newsModel = mongoose.model('News', newsSchema);

module.exports = newsModel;