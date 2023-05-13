import game from '../index.js';
import { getRandomNumber } from '../utils.js';

const taskForUser = ('What is the result of the expression?');

const getAnswer = (number1, number2, sign) => {
  let answer = null;
  switch (sign) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      throw new Error(`this sign was not found: '${sign}'`);
  }
  return answer;
};

const getExerciseAndRightAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const signs = ['+', '-', '*'];
  const indexOfSign = getRandomNumber(0, signs.length - 1);
  const sign = signs[indexOfSign];

  const rightAnswer = getAnswer(firstNumber, secondNumber, sign);
  const exercise = `${firstNumber} ${sign} ${secondNumber}`;
  return [exercise, String(rightAnswer)];
};

const startCalcGame = () => {
  game(taskForUser, getExerciseAndRightAnswer);
};

export default startCalcGame;
