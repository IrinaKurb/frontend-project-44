export default () => {
  const signs = ['+', '-', '*'];
  const min = 0;
  const max = signs.length - 1;
  const indexOfRandomSign = Math.floor(Math.random() * (max - min + 1) + min);
  return signs[indexOfRandomSign];
};
