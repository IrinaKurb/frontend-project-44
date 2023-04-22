import game from '../index.js';
import gettingRandomNumber from '../utils/random _number.js';

const execiseAndRightAnswer = () => {
  const execise = gettingRandomNumber();
  const rightAnswer = execise % 2 === 0 ? 'yes' : 'no';
  return [execise, rightAnswer];
};

const startEvenGame = () => {
  const taskForUser = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(taskForUser, execiseAndRightAnswer);
};

export default startEvenGame;
