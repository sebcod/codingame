var inputs = readline().split(" ");
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let currentTx = parseInt(inputs[2]); // Thor's starting X position
let currentTy = parseInt(inputs[3]); // Thor's starting Y position
let direction = "";

// game loop
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  if (currentTy > lightY) {
    currentTy--;
    direction = "N";
    if (currentTx !== lightX) {
      direction += initialTx < lightX ? "E" : "W";
    }
  } else if (currentTy < lightY) {
    currentTy++;
    direction = "S";
    if (currentTx !== lightX) {
      direction += initialTx < lightX ? "E" : "W";
    }
  } else {
    direction = currentTx < lightX ? "E" : "W";
  }

  console.log(direction);
  direction = "";
}
