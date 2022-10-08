function CalculateBingo(moves) {
  let result = -1;

  if (moves > 5) {
    result = 1;
  }

  if (moves > 19) {
    result = 2;
  }

  if (moves === 5) {
    result = 0;
  }

  return (
    result
  );
}

module.exports = CalculateBingo;
