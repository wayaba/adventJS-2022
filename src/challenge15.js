//https://adventjs.dev/es/challenges/2022/15

function decorateTree(base) {
  const deco = {
    PP: "P",
    RR: "R",
    BB: "B",
    BP: "R",
    BR: "P",
    PB: "R",
    PR: "B",
    RB: "P",
    RP: "B",
  };
  const level = base.split(" ");
  const newTree = new Array(level.length).fill(level);

  const getNewLevel = (arr) => {
    let newLevel = [];
    for (let i = 0; i < arr.length - 1; i++) {
      newLevel.push(deco[arr.slice(i, i + 2).join("")]);
    }
    return newLevel;
  };

  const output = [];

  newTree.forEach((item, index) => {
    index === 0
      ? output.push(item)
      : output.push(getNewLevel(output[index - 1]));
  });

  return output.reverse().flatMap((item) => item.join(" "));
}

decorateTree("B P R P");
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

//decorateTree('B B') // ['B', 'B B']
