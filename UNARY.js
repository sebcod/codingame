const MESSAGE = readline();
let MessageBinary = "";
let res = "";

for(let i=0 ; i<MESSAGE.length ; i++){
    MessageBinary += MESSAGE[i].charCodeAt().toString(2).padStart(7, "0");
}

for(let j=0 ; j<MessageBinary.length ; j++){
    MessageBinary[j] === "0" && MessageBinary[j-1]  !=  "0" ? res += " 00 " : "" ;
    MessageBinary[j] === "0" && MessageBinary[j]    === "0" ? res += "0"    : "" ;
    MessageBinary[j] === "1" && MessageBinary[j-1]  !=  "1" ? res += " 0 "  : "" ;
    MessageBinary[j] === "1" && MessageBinary[j]    === "1" ? res += "0"    : "" ;
}
print(res.trim());
