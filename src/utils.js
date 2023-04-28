const gettingRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const gettingSign = () => {
  const signs = ['+', '-', '*'];
  const min = 0;
  const max = signs.length - 1;
  const indexOfRandomSign = Math.floor(Math.random() * (max - min + 1) + min);
  return signs[indexOfRandomSign];
};

export { gettingRandomNumber, gettingSign };
