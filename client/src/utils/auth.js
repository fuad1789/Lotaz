export function displayElapsedTime(startTime, sec) {
  const currentTime = new Date();
  const elapsedTimeInSeconds = Math.floor(
    sec - (currentTime - startTime) / 1000
  );

  return elapsedTimeInSeconds;
}

const formatNumber = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

export const convertToMinutesAndSeconds = (seconds) => {
  const minutes = formatNumber(Math.floor(seconds / 60));
  const remainingSeconds = formatNumber(seconds % 60);
  return { minutes, seconds: remainingSeconds };
};

export const parseTimeString = (timeString) => {
  const [minutesStr, secondsStr] = timeString.split(":");
  const minutes = parseInt(minutesStr);
  const seconds = parseInt(secondsStr);
  return { minutes, seconds };
};
