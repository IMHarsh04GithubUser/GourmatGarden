const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  username: String,
  score: Number,
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
