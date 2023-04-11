import { game, gettingRandomNumber } from '../index.js';

const gettingSign = () => {
  const signs = ['+', '-', '*'];
  const min = 0;
  const max = signs.length - 1;
  const indexOfRandomSign = Math.floor(Math.random() * (max - min + 1) + min);
  return signs[indexOfRandomSign];
};

const gettingExercise = () => {
  const first = gettingRandomNumber();
  const second = gettingRandomNumber();
  const sign = gettingSign();
  console.log(`Question: ${first} ${sign} ${second}`);
  return [first, second, sign];
};

const gettingRightAnswer = (array) => {
  const [firstNumber, secondNumber, sign] = array;
  switch (sign) {
    case '+':
      return String(firstNumber + secondNumber);
    case '-':
      return String(firstNumber - secondNumber);
    default:
      return String(firstNumber * secondNumber);
  }
};

const calc = () => {
  const taskForUser = 'What is the result of the expression?';
  game(taskForUser, gettingExercise, gettingRightAnswer);
};

export default calc;
