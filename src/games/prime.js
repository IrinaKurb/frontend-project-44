import game from '../index.js';
import { gettingRandomNumber } from '../utils.js';

const isNumberPrime = (number) => {
  let divider = 2;
  let isPrime = null;
  do {
    const remainder = number % divider;
    if ((remainder !== 0 && number !== 1) || number === 2) {
      isPrime = true;
      divider += 1;
    } else {
      isPrime = false;
    }
  } while (isPrime && divider < number);

  return isPrime;
};

const execiseAndRightAnswer = () => {
  const exercise = gettingRandomNumber();
  const rightAnswer = isNumberPrime(exercise) ? 'yes' : 'no';
  return [exercise, rightAnswer];
};

const startPrimeGame = () => {
  const taskForUser = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(taskForUser, execiseAndRightAnswer);
};

export default startPrimeGame;
