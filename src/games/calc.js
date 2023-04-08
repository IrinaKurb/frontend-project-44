import { greeting, game } from '../index.js';

let first = 0;
let second = 0;
let sign = '';
const signs = ['+', '-', '*'];

const gettingSign = () => {
  const min = 0;
  const max = signs.length - 1;
  const indexOfRandomSign = Math.floor(Math.random() * (max - min + 1) + min);
  const randomSign = signs[indexOfRandomSign];
  return randomSign;
};

const gettingRandomNumbers = () => {
  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

const gettingExercise = () => {
  first = gettingRandomNumbers();
  second = gettingRandomNumbers();
  sign = gettingSign();
  return (`${first} ${sign} ${second}`);
};

const gettingRightAnswer = () => {
  let rightAnswer = 0;
  switch (sign) {
    case '+':
      rightAnswer = String(first + second);
      break;
    case '-':
      rightAnswer = String(first - second);
      break;
    default:
      rightAnswer = String(first * second);
  }
  return rightAnswer;
};

const calc = () => {
  const userName = greeting();
  const taskForUser = 'What is the result of the expression?';
  game(taskForUser, userName, gettingExercise, gettingRightAnswer);
};

export default calc;
