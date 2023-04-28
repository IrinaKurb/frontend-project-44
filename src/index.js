import readlineSync from 'readline-sync';

export default (rules, execiseAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  const countOfAttempts = 3;
  for (let round = 1; round <= countOfAttempts; round += 1) {
    const [execise, rightAnswer] = execiseAndRightAnswer();
    console.log(`Question: ${execise}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
