import { greeting, game, gettingRandomNumber } from '../index.js';

const gettingExercise = () => {
  const resultArray = [];
  const firstNumber = gettingRandomNumber();
  const secondNumber = gettingRandomNumber();
  resultArray.push(firstNumber);
  resultArray.push(secondNumber);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  return resultArray;
};

const gettingRightAnswer = (numbers) => {
  let firstNumber = numbers[0];
  let secondNumber = numbers[1];
  while (secondNumber) {
    const term = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = term;
  }
  return String(firstNumber);
};

const gcd = () => {
  const userName = greeting();
  const taskForUser = 'Find the greatest common divisor of given numbers.';
  game(taskForUser, userName, gettingExercise, gettingRightAnswer);
};

export default gcd;
