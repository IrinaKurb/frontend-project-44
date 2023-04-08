import { game, greeting } from '../index.js';

const gettingExercise = () => {
  const min = 1;
  const max = 1000;
  const expressionForSolving = Math.floor(Math.random() * (max - min + 1) + min);
  return expressionForSolving;
};

const gettingRightAnswer = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');

const evenOdd = () => {
  const userName = greeting();
  const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(taskForUser, userName, gettingExercise, gettingRightAnswer);
};

export default evenOdd;
