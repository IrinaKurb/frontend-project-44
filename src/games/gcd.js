import { game, gettingRandomNumber } from '../index.js';

const gettingExercise = () => {
  const first = gettingRandomNumber();
  const second = gettingRandomNumber();
  console.log(`Question: ${first} ${second}`);
  return [first, second];
};

const gettingRightAnswer = (numbers) => {
  let [firstNumber, secondNumber] = numbers;
  while (secondNumber) {
    const term = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = term;
  }
  return String(firstNumber);
};

const gcd = () => {
  const taskForUser = 'Find the greatest common divisor of given numbers.';
  game(taskForUser, gettingExercise, gettingRightAnswer);
};

export default gcd;
