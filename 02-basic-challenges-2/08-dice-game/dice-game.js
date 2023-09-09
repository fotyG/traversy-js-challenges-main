function diceGameSimulation(num) {
  const resultArr = [];
  let result;

  for (let i = 1; i <= num; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;
    if (sum === 7 || sum === 11) result = "win";
    else if (sum === 2 || sum === 3 || sum === 12) result = "lose";
    else result = "roll again";
    let localObj = {
      dice1,
      dice2,
      sum,
      result,
    };

    resultArr.push(localObj);
  }

  return resultArr;
}

function rollDice() {
  return Math.ceil(Math.random() * 6);
}

const result = diceGameSimulation(10);

console.log(rollDice());
console.log(result);
module.exports = diceGameSimulation;
