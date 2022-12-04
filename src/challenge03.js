//https://adventjs.dev/es/challenges/2022/2

function countHours(year, holidays) {
  /*
  let cont = 0
  holidays.forEach(date=> {
    const currentDate = new Date(`${date}/${year}`);
    const dayOfWeek = currentDate.getDay()
    if(dayOfWeek !==0 && dayOfWeek !== 6)
      cont = cont + 2
  })
  return cont
  */
  return holidays.reduce((current, date) => {
    const currentDate = new Date(`${date}/${year}`);
    const dayOfWeek = currentDate.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6 ? current + 2 : current;
  }, 0);
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays); // 2 días -> 4 horas extra en el año
