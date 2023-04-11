import { game, gettingRandomNumber } from '../index.js';

let delta = 0;

const gettingExercise = () => {
  const resultArray = [];
  const maxDelta = 10;
  const minDelta = 1;
  delta = Math.floor(Math.random() * (maxDelta - minDelta + 1) + minDelta);
  let startNumber = gettingRandomNumber();

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

  console.log(`Question: ${resultArray.join(' ')}`);
  return resultArray;
};

const gettingRightAnswer = (resultArray) => {
  const index = resultArray.indexOf('..');
  let rightAnswer = resultArray[index - 1] + delta;
  if (index === 0) {
    rightAnswer = resultArray[index + 1] - delta;
  }
  return String(rightAnswer);
};

const progress = () => {
  const taskForUser = 'What number is missing in the progression?';
  game(taskForUser, gettingExercise, gettingRightAnswer);
};

export default progress;
