import game from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const exerciseAndRightAnswer = () => {
  const exercise = getRandomNumber();
  const rightAnswer = isEven(exercise) ? 'yes' : 'no';
  return [exercise, rightAnswer];
};

const startEvenGame = () => {
  const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(taskForUser, exerciseAndRightAnswer);
};

export default startEvenGame;
