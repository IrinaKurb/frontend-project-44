import { game, greeting, gettingRandomNumber } from '../index.js';

const gettingExercise = () => {
  const exercise = gettingRandomNumber();
  console.log(`Question: ${exercise}`);
  return exercise;
};

const gettingRightAnswer = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');

const evenOdd = () => {
  const userName = greeting();
  const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(taskForUser, userName, gettingExercise, gettingRightAnswer);
};

export default evenOdd;
