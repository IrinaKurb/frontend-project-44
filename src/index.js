import readlineSync from 'readline-sync';

export default (taskForUser, exerciseAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(taskForUser);

  const countOfAttempts = 3;
  for (let i = 1; i <= countOfAttempts; i += 1) {
    const [exercise, rightAnswer] = exerciseAndRightAnswer();
    console.log(`Question: ${exercise}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
