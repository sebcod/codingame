const LON_User = parseFloat(readline().replace(',' , '.'));
const LAT_User = parseFloat(readline().replace(',' , '.'));
const N = parseInt(readline());
let defibs = new Array(N);
let MinDistance = 100000000;
let nearestDefibrillator = "";

for (let i = 0; i < N; i++) {
    defibs[i] = readline().split(';');
}

defibs.forEach(defib =>{
    let LON_Defib = parseFloat(defib[4].replace(',' , '.'));
    let LAT_Defib = parseFloat(defib[5].replace(',' , '.'));

    x = (LON_Defib - LON_User)* Math.cos((LAT_User + LAT_Defib)/2)
    y = LAT_Defib - LAT_User;
    d = Math.sqrt(Math.pow(x,2)+Math.pow(y,2))*6371;

    if (d < MinDistance){
        MinDistance = d;
        nearestDefibrillator = defib[1];
    }
});

console.log(nearestDefibrillator);
