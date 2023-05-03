import game from '../index.js';
import getRandomNumber from '../utils.js';

const exerciseAndRightAnswer = () => {
  const resultArray = [];
  const maxDelta = 10;
  const minDelta = 1;

  const delta = Math.floor(Math.random() * (maxDelta - minDelta + 1) + minDelta);
  let startNumber = getRandomNumber();
  const progressLength = 10;
  resultArray.push(startNumber);
  for (let i = 1; i < progressLength; i += 1) {
    const nextNumber = startNumber + delta;
    resultArray.push(nextNumber);
    startNumber = nextNumber;
  }

  const minIndex = 0;
  const maxIndex = progressLength - 1;
  const indexMissingNumber = Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
  resultArray[indexMissingNumber] = '..';

  const index = resultArray.indexOf('..');
  let rightAnswer = resultArray[index - 1] + delta;
  if (index === 0) {
    rightAnswer = resultArray[index + 1] - delta;
  }
  return [(resultArray.join(' ')), String(rightAnswer)];
};

const startProgressionGame = () => {
  const taskForUser = 'What number is missing in the progression?';
  game(taskForUser, exerciseAndRightAnswer);
};

export default startProgressionGame;
