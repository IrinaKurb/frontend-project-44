import readlineSync from 'readline-sync';

const gettingRandomNumber = () => {
  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const game = (taskForUser, userName, gettingExercise, gettingRightAnswer) => {
  console.log(taskForUser);
  for (let i = 1; i <= 3; i += 1) {
    const answer = gettingExercise();
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = gettingRightAnswer(answer);

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { greeting, game, gettingRandomNumber };
