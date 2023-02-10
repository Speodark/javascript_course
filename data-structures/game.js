'use strict';


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// Question 1
const [players1, players2] = game.players;
// Question 2
const [gk, ...fieldPlayers] = players1;
// Question 3
const allPlayers = [...players1, ...players2];
// Question 4
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// Question 5
const {
    odds: {
        team1, 
        x: draw, 
        team2
    }
} = game;

const printGoals = function(...players) {
    console.log(players)
    console.log(`${players.length} goals were made in total`)
};

// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');