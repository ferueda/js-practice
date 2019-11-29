const gradeCalc = function(score, totalScore) {
  const grade =
    score / totalScore >= 0.9
      ? 'A'
      : score / totalScore >= 0.8
      ? 'B'
      : score / totalScore >= 0.7
      ? 'C'
      : score / totalScore >= 0.6
      ? 'D'
      : 'F';
  return `You got a ${grade}!`;
};
