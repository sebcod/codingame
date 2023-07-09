const inputs = readline().split(' ');
const L = parseInt(inputs[0]);
const regex_Slice_L_Elements = new RegExp(`.{1,${L}}`, 'g');
const H = parseInt(inputs[1]);
let mayaNumberValueNum1 = 0;
let mayaNumberValueNum2 = 0;
let StartAfter0 = false;
let numerals = new Array(H);

for (let i = 0; i < H; i++) {
    numerals[i] = readline().match(regex_Slice_L_Elements); 
}

function returnsSymbolMayaNumberValue(num) {
    const repeatCounter = [];
    for (let i = 0; i < num.length; i++) {
        const number = num[i];
        repeatCounter[number] = (repeatCounter[number] || 0) + 1;
    }
    for (const number in repeatCounter) {
        if (repeatCounter[number] === H) {
            return parseInt(number);
        }
    }
    return null;
}

const S1 = parseInt(readline());
for (let i = (S1/H)-1; i > -1; i--) {
    let num1 = [];
    for (let j = 0; j < H; j++) {
        num1Line = readline();
        for (let i = 0; i < numerals[0].length; i++){
            line1 = numerals[j][i];
            if (num1Line === line1){num1.push(i);}   
        };
    }
    mayaNumberValueNum1 += returnsSymbolMayaNumberValue(num1)*Math.pow(20,i);
}   

const S2 = parseInt(readline());
for (let i = (S2/H)-1; i > -1; i--) {
    let num2 = [];
    for (let j = 0; j < H; j++) {
        num2Line = readline();
        for (let i = 0; i < numerals[0].length; i++){
            line2 = numerals[j][i];
            if (num2Line === line2){num2.push(i);}
        };
    }
    mayaNumberValueNum2 += returnsSymbolMayaNumberValue(num2)*Math.pow(20,i);
}   

result = eval(mayaNumberValueNum1 + readline() + mayaNumberValueNum2);

for (let i=63 ; i>-1 ; i--) {
    let result_div_20i = Math.floor(result / Math.pow(20,i));   
    if(result_div_20i != 0) {StartAfter0 = true};
    if( StartAfter0 || i===0){
        result -= result_div_20i*Math.pow(20,i);
        for (let j=0 ; j<H ; j++) {
            console.log(numerals[j][result_div_20i])
        }
    }
}
