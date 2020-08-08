export default function convertHourToMinutes(time: string) {
  // 8:00
  const [hour, minutes] = time.split(':').map(Number); // Divide por : e transforma em numero;
  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes;
}