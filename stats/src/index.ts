import fs from 'fs';

const file = fs.readFileSync('football.csv', {
  encoding: 'utf-8',
});

const matches = file.split('\n').map((item) => item.split(','));

enum winResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === winResult.HomeWin) {
    manUnitedWins++;
  }
  if (match[2] === 'Man United' && match[5] === winResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(manUnitedWins);
