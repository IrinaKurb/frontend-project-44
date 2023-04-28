import game from '../index.js';
import { gettingRandomNumber } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const execiseAndRightAnswer = () => {
  const execise = gettingRandomNumber();
  const rightAnswer = isEven(execise) ? 'yes' : 'no';
  return [execise, rightAnswer];
};

const startEvenGame = () => {
  const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(taskForUser, execiseAndRightAnswer);
};

export default startEvenGame;
