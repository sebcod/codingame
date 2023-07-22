var inputs = readline().split(' ');
const exitFloor = parseInt(inputs[3]); // floor on which the exit is found
const exitPos = parseInt(inputs[4]); // position of the exit on its floor
const nbElevators = parseInt(inputs[7]); // number of elevators
let elevatorFloor= [];
let elevatorPos= [];
let blockFloor= [];

for (let i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    elevatorFloor.push(i); // floor on which this elevator is found
    elevatorPos[parseInt(inputs[0])] = parseInt(inputs[1]); // position of the elevator on its floor
}

while (true) {
    var inputs = readline().split(' ');
    const cloneFloor = parseInt(inputs[0]); // floor of the leading clone
    const clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
    const direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT
    
    rep = 'WAIT';
    
    if (cloneFloor === exitFloor){
        if(clonePos > exitPos & direction === 'RIGHT' || clonePos < exitPos & direction === 'LEFT'){
            rep = 'BLOCK';
            blockFloor[cloneFloor] != 'block' ? blockFloor.push('block') : "" ;
        }
    }
    
    if (cloneFloor === elevatorFloor[cloneFloor]){
        if(clonePos > elevatorPos[cloneFloor] && direction === 'RIGHT' || clonePos < elevatorPos[cloneFloor] && direction === 'LEFT'){
            rep = 'BLOCK';
            blockFloor[cloneFloor] != 'block' ? blockFloor.push('block') : "" ;
        }
    }
    
    console.log(rep);
}
