//https://adventjs.dev/es/challenges/2022/12

function selectSleigh(distance, sleighs) {
  const MAX_WATTS = 20;
  const bestSleight = sleighs.find(
    (item) =>
      item.consumption ===
      Math.max(
        ...sleighs
          .filter((i) => i.consumption * distance <= MAX_WATTS)
          .map((i) => i.consumption)
      )
  );
  
  return bestSleight !== undefined ? bestSleight.name:null
}

const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
];

selectSleigh(distance, sleighs); // => "Dancer"

const sleighs2 = [
  { name: "pheralb", consumption: 0.3 },
  { name: "TMChein", consumption: 0.5 },
];
selectSleigh(1, sleighs2); // => "Dancer"
