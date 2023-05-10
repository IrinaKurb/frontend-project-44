import game from '../index.js';
import getRandomNumber from '../utils.js';

const isNumberPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const exerciseAndRightAnswer = () => {
  const exercise = getRandomNumber();
  const rightAnswer = isNumberPrime(exercise) ? 'yes' : 'no';
  return [exercise, rightAnswer];
};

const startPrimeGame = () => {
  const taskForUser = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(taskForUser, exerciseAndRightAnswer);
};

export default startPrimeGame;
