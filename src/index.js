import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const game = (taskForUser, userName, gettingExercise, gettingRightAnswer) => {
  console.log(taskForUser);
  for (let i = 1; i <= 3; i += 1) {
    const exercise = gettingExercise();

    console.log(`Question: ${exercise}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = gettingRightAnswer(exercise);

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { greeting, game };
