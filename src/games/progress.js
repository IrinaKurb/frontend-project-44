import game from '../index.js';
import { getRandomNumber } from '../utils.js';

const taskForUser = 'What number is missing in the progression?';

const getExerciseAndRightAnswer = () => {
  const sequenceOfNumbers = [];
  const maxDelta = 10;
  const minDelta = 1;

  const delta = getRandomNumber(minDelta, maxDelta);
  let startNumber = getRandomNumber();
  const progressLength = 10;
  sequenceOfNumbers.push(startNumber);
  for (let i = 1; i < progressLength; i += 1) {
    const nextNumber = startNumber + delta;
    sequenceOfNumbers.push(nextNumber);
    startNumber = nextNumber;
  }

  const minIndex = 0;
  const maxIndex = progressLength - 1;
  const indexMissingNumber = getRandomNumber(minIndex, maxIndex);
  sequenceOfNumbers[indexMissingNumber] = '..';

  const index = sequenceOfNumbers.indexOf('..');
  let rightAnswer = sequenceOfNumbers[index - 1] + delta;
  if (index === 0) {
    rightAnswer = sequenceOfNumbers[index + 1] - delta;
  }
  return [(sequenceOfNumbers.join(' ')), String(rightAnswer)];
};

const startProgressionGame = () => {
  game(taskForUser, getExerciseAndRightAnswer);
};

export default startProgressionGame;
