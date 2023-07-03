const N = readline();
let clumps = [];
let clump = "";
let evenModulo;
let lastClumpsLenght = 0;

for (b=1 ; b<=9 ; b++){
    clumps = [];
    for(i=0; i<N.length ; i++){
        if(i === 0){
            clump += N[i].toString();
            evenModulo = N[i]%b
        }
        if(evenModulo === N[i]%b && i != 0){
            clump += N[i].toString();
        }
        if (evenModulo != N[i]%b  && i != 0){
            evenModulo = N[i]%b
            clumps.push(clump)
        }
        if(i === N.length-1){
            clumps.push(clump)
        }
    }
    if(b === 9){
        console.log('Normal');
    }
    if(clumps.length < lastClumpsLenght){
        console.log(b)
        b=9;
    }
    lastClumpsLenght = clumps.length;
}
