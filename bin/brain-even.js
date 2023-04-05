#!/usr/bin/env node
import readlineSync from 'readline-sync';

const evenParity = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const min = 1;
  const max = 1000;
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    let rightAnswer = 'no';

    if (randomNumber % 2 === 0) {
      rightAnswer = 'yes';
    }

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
evenParity();
