const mongoose = require('mongoose');

const userScoreSchema = new mongoose.Schema({
  username: String,
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userScoreSchema);
