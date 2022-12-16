//https://adventjs.dev/es/challenges/2022/11

function getCompleted(part, total) {
  /*
  dt1 = new Date("October 13, 2014 " + part);
  dt2 = new Date("October 13, 2014 " + total);

  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  console.log(dt2.getTime());

  console.log(dt1.getTime());

  let pepe = (dt1.getTime() * 100) / dt2.getTime();
  console.log(pepe);

  const getFraction = (decimal) => {
    for (var denominator = 1; (decimal * denominator) % 1 !== 0; denominator++);
    return { numerator: decimal * denominator, denominator: denominator };
  };
  let aaa = 3 / 1;
  console.log(getFraction(33,3));
  //console.log(diff);
  diff /= 60;
  return Math.abs(Math.round(diff));
  */
}

getCompleted("01:00:00", "03:00:00"); // '1/3'
/*
getCompleted("02:00:00", "04:00:00"); // '1/2'
getCompleted("01:00:00", "01:00:00"); // '1/1'
getCompleted("00:10:00", "01:00:00"); // '1/6'
getCompleted("01:10:10", "03:30:30"); // '1/3'
getCompleted("03:30:30", "05:50:50"); // '3/5
*/
//3600+600+10 = 4210 --- 10800+1800+30 = 12630
//10800+1800+30 = 12630 --- 18000+3000+50 = 21050
