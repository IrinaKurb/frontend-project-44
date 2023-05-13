import game from '../index.js';
import { getRandomNumber } from '../utils.js';

const taskForUser = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let gcd = 1;
  const minNumber = number1 >= number2 ? number2 : number1;
  for (let i = 1; i <= minNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const getExerciseAndRightAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const exercise = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGcd(firstNumber, secondNumber);
  return [exercise, String(rightAnswer)];
};

const startGcdGame = () => {
  game(taskForUser, getExerciseAndRightAnswer);
};

export default startGcdGame;
