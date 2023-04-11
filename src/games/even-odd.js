import { game, gettingRandomNumber } from '../index.js';

const gettingExercise = () => {
  const exercise = gettingRandomNumber();
  console.log(`Question: ${exercise}`);
  return exercise;
};

const gettingRightAnswer = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');

const evenOdd = () => {
  const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(taskForUser, gettingExercise, gettingRightAnswer);
};

export default evenOdd;
