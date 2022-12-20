//https://adventjs.dev/es/challenges/2022/11

function getCompleted(part, total) {
  const [hoursPart, minutesPart, secondsPart] = part.split(":");
  const [hoursTotal, minutesTotal, secondsTotal] = total.split(":");

  const partInSeconds =
    Number(hoursPart) * 3600 + Number(minutesPart) * 60 + Number(secondsPart);
  const totalInSeconds =
    Number(hoursTotal) * 3600 +
    Number(minutesTotal) * 60 +
    Number(secondsTotal);

  const gcd = (a, b) => {
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  };

  const den = gcd(partInSeconds, totalInSeconds);
  const numerator = partInSeconds / den;
  const denominator = totalInSeconds / den;
  return `${numerator}/${denominator}`;
}

getCompleted("01:00:00", "03:00:00"); // '1/3'
getCompleted("02:00:00", "04:00:00"); // '1/2'
getCompleted("01:00:00", "01:00:00"); // '1/1'
getCompleted("00:10:00", "01:00:00"); // '1/6'
getCompleted("01:10:10", "03:30:30"); // '1/3'
getCompleted("03:30:30", "05:50:50"); // '3/5
