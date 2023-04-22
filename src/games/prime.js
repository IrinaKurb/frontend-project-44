import game from '../index.js';
import gettingRandomNumber from '../utils/random _number.js';

const execiseAndRightAnswer = () => {
  const randomNumber = gettingRandomNumber();

  let divider = 2;
  let rightAnswer = '';
  do {
    const remainder = randomNumber % divider;
    if ((remainder !== 0 && randomNumber !== 1) || randomNumber === 2) {
      rightAnswer = 'yes';
      divider += 1;
    } else {
      rightAnswer = 'no';
    }
  } while (rightAnswer === 'yes' && divider < randomNumber);

  return [randomNumber, rightAnswer];
};

const startPrimeGame = () => {
  const taskForUser = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(taskForUser, execiseAndRightAnswer);
};

export default startPrimeGame;
