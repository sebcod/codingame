/**
 * Find empty park lot for current vehicle
 **/

let frontLeft = [""];
let backLeft = [""];
let frontRight = [""];
let backRight = [""];

let carLeftLength = 0;
let carRightLength = 0;
let carLength = 0;
let sayCarLength = true;

const N = parseInt(readline()); // Road length

for (let i = 0; i < N; i++) {
    const sensorData = readline(); // Datas from four sensor with values 1 or 0 (e.g 1001)
    frontLeft += sensorData[0] === "1"? "1" : "0";
    frontRight += sensorData[1] === "1"? "1" : "0";
    backRight += sensorData[2] === "1"? "1" : "0";
    backLeft += sensorData[3] === "1"? "1" : "0";
}

for (let i = 0; i < N; i++) {
    if (frontLeft[i] === '0'){       
         if(backLeft[i] === '0' && carLeftLength > 3){
             if (sayCarLength){
                carLeftLength += 1;
                carLength = carLeftLength > carRightLength ? carLeftLength : carRightLength;
                print(carLength);
                sayCarLength = false;
             }
         }else{
            carLeftLength += 1;
         }
    }else {
         carLeftLength = 0;
    }
    if (frontRight[i] === '0'){       
        if(backRight[i] === '0' && carRightLength > 3){
            if (sayCarLength){
                carRightLength += 1;
                carLength = carLeftLength > carRightLength ? carLeftLength : carRightLength;
                print(carLength);
                sayCarLength = false;
            }
        }else{
            carRightLength += 1;
        }
    }else {
        carRightLength = 0;
    }
}

for (let i = 0; i < N; i++) {
    if (frontLeft[i] === '0'){       
         if(backLeft[i] === '0' && carLeftLength >= carLength -1){
            print(i+carLeftLength + "L");
         }else{
             carLeftLength += 1;
         }
    }else {
         carLeftLength = 0;
    }
    if (frontRight[i] === '0'){       
        if(backRight[i] === '0' && carRightLength >= carLength -1){
            print(i+carRightLength + "R");
        }else{
            carRightLength += 1;
        }
    }else {
        carRightLength = 0;
    }
}
