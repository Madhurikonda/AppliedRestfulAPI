// I chose the table tennis for my sample data and some sample information. Associated into the required format. 
use tableTennisPlayers

db.tableTennisPlayers.insertMany([
  { playerId: 1, name: "Ma Long", handedness: "right", tournamentsWon: 60, ranking: 1, country: "China" },
  { playerId: 2, name: "Timo Boll", handedness: "left", tournamentsWon: 30, ranking: 6, country: "Germany" },
  { playerId: 3, name: "Fan Zhendong", handedness: "right", tournamentsWon: 40, ranking: 2, country: "China" },
  { playerId: 4, name: "Hugo Calderano", handedness: "right", tournamentsWon: 15, ranking: 4, country: "Brazil" }
])

// I want to find all left handed players.
db.tableTennisPlayers.find({ handedness: "left" })

// I want to find from below 3 ranking
db.tableTennisPlayers.find({ ranking: { $lte: 3 } })

// I want to find players who have won more than 20 tournaments.
db.tableTennisPlayers.find({ tournamentsWon: { $gt: 20 } })

// I want to find players who are ranked at least 1.
db.tableTennisPlayers.find().sort({ ranking: 1 })

// I want to find players from China
db.tableTennisPlayers.find({ country: "China" })
