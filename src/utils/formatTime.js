export function formatSecondsToTime(seconds) {
  // 전체 시간을 구하기 위해 초를 시간으로 나누고 나머지를 구합니다.
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // 0을 채워 2자리로 만들기
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  // "HH:MM:SS" 형식으로 반환
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
