import { greeting, game, gettingRandomNumber } from '../index.js';

const gettingExercise = () => {
  const randomNumber = gettingRandomNumber();
  console.log(`Question: ${randomNumber}`);
  return randomNumber;
};

const gettingRightAnswer = (randomNumber) => {
  if (randomNumber === 1) {
    return 'no';
  }
  let divider = 2;
  let rightAnswer = ' ';
  do {
    const remainder = randomNumber % divider;
    if (remainder !== 0) {
      rightAnswer = 'yes';
      divider += 1;
    } else {
      rightAnswer = 'no';
    }
  } while (rightAnswer === 'yes' && divider < randomNumber);
  return rightAnswer;
};

const prime = () => {
  const userName = greeting();
  const taskForUser = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(taskForUser, userName, gettingExercise, gettingRightAnswer);
};
export default prime;
