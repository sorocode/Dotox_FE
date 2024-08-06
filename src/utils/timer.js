export const startTimer = () => {
  const startTime = new Date().getTime();
  localStorage.setItem("startTime", startTime);
};

export const getElapsedTime = () => {
  const startTime = localStorage.getItem("startTime");
  if (!startTime) {
    return 0;
  }
  const currentTime = new Date().getTime();
  return currentTime - startTime;
};
