function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  const totalTime = waitingTimes.reduce((prev, current) => {
    prev + current;
  }, 0);
  const averageTime = Math.round(totalTime / waitingTimes.length);

  const remainingPeople = serialNumber - waitingTimes.length - 1;

  if (remainingPeople <= 0) {
    return 0;
  }

  return remainingPeople * averageTime;
}
