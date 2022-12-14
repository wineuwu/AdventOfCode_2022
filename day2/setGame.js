import data from './data'

let game = `A Y
B X
C Z`;


function Rule(rock, paper, scissors){
  this[rock] = {action: "rock", score :1, paper: 0 , scissors: 6};
  this[paper] ={action: "paper", score :2 , rock:6 , scissors: 0} ;
  this[scissors] = {action: "scissors", score : 3 , rock:0 , paper:6 };
}



function Rule2(lose, round, win){
  // this[lose] =  0; 
  // this[round] = 3 ;
  // this[win] = 6 ;
  this[lose] = { score :0,  rock:3, paper: 1 , scissors: 2, };
  this[round] ={ score :3 , rock:1, paper: 2 , scissors: 3,} ;
  this[win] = { score : 6 , rock:2, paper: 3 , scissors: 1,};
}

// Y:3 X:0  Z:6

const opponent = new Rule("A", "B", "C");
const resultList = new Rule2("X", "Y", "Z");

const getScore = () => {
  let meScore = 0;
  data.split('\n').map(i=> {
    let opp = opponent[i.split(' ')[0]];
    let mee = me[i.split(' ')[1]];
    meScore += (((mee.action === opp.action)? 3 : mee[opp.action])+ mee.score )
  })
  return meScore;
}

const getActionScore = () => {
  let meScore = 0;
  data.split('\n').map(i=> {
    let opp = opponent[i.split(' ')[0]];
    let result = resultList[i.split(' ')[1]];
    meScore += (result.score + result[opp.action])
    // meScore += (((mee.action === opp.action)? 3 : mee[opp.action])+ mee.score )
  })

  console.log("day2",meScore)
  return meScore;
}


export default getActionScore

