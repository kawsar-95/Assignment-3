function feetToMile(mile){
    var feet = mile/5280; //1 mile = 5280 feet
    return feet; 
}
var mileCalc =[1,2,3];

var mile1 = feetToMile(mileCalc[0]);
console.log(mile1);
var mile2 = feetToMile(mileCalc[1]);
console.log(mile2);
var mile3 = feetToMile(mileCalc[2]);
console.log(mile3);