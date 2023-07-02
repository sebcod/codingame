const wife = readline();
const husband = readline();

let textTop = wife;
let textButtom = husband;

while(textTop.length != textButtom.length){
    if (textTop.length < textButtom.length){
        textTop += wife;
    }else{
        textButtom += husband; 
    }
}

let texteArray2d = new Array(textTop.length);

console.log(textTop);
for (i=0 ; i< textTop.length ; i++){
    texteArray2d[i] = textButtom[i].padEnd(textButtom.length-1, ' ')+ textTop[i];
    console.log(texteArray2d[i])
}
console.log(textButtom);
