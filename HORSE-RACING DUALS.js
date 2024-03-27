const N = parseInt(readline());
let arrayHorses = [];
let piDiff = 10000000;

for (let i = 0; i < N; i++) {
  const pi = parseInt(readline());
  arrayHorses.push(pi);
}

arrayHorses = arrayHorses.sort((a, b) => b - a);

for (let j = 0; j < arrayHorses.length - 1; j++) {
  if (arrayHorses[j] - arrayHorses[j + 1] < piDiff) {
    piDiff = arrayHorses[j] - arrayHorses[j + 1];
  }
}

console.log(piDiff);
