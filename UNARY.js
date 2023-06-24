const MESSAGE = readline();
let MessageBenary = "";
let res = "";

for(let i=0 ; i<MESSAGE.length ; i++){
    MessageBenary += MESSAGE[i].charCodeAt().toString(2).padStart(7, "0");
}

for(let j=0 ; j<MessageBenary.length ; j++){
    MessageBenary[j] === "0" && MessageBenary[j-1]  !=  "0" ? res += " 00 " : "" ;
    MessageBenary[j] === "0" && MessageBenary[j]    === "0" ? res += "0"    : "" ;
    MessageBenary[j] === "1" && MessageBenary[j-1]  !=  "1" ? res += " 0 "  : "" ;
    MessageBenary[j] === "1" && MessageBenary[j]    === "1" ? res += "0"    : "" ;
}
print(res.trim());
