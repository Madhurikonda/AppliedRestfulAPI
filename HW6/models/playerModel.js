const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  playerId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  handedness: {
    type: String,
    required: true,
  },
  tournamentsWon: {
    type: Number,
    required: true,
  },
  ranking: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Player", playerSchema, "tableTennisPlayers");
