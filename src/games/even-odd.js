import game from '../index.js';
import { getRandomNumber } from '../utils.js';

const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getExerciseAndRightAnswer = () => {
  const exercise = getRandomNumber();
  const rightAnswer = isEven(exercise) ? 'yes' : 'no';
  return [exercise, rightAnswer];
};

const startEvenGame = () => {
  game(taskForUser, getExerciseAndRightAnswer);
};

export default startEvenGame;
