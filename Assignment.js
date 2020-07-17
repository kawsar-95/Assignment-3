// feetToMile

function feetToMile(mile){
    var feet = mile/5280; //1 mile = 5280 feet
    return feet; 
}
var result = feetToMile(144);
console.log(result);

// woodCalculator

function woodCalc(chair,table,bed){

    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount =bed*5;
    var totalWoodCount = chairCount+tableCount+bedCount;
    return totalWoodCount;
}
var woodResult =woodCalc(10,12,20);
console.log(woodResult);


//brickCaclulator

















//tinyFriend

var friends =['jon','robo','brandon','eddard'];
var tiny = friends[0];
for(var i=0;i<friends.length;i++){
    var element = friends[i];
    var tinyFriend=element[i].length;
    if(tinyFriend<tiny){
        tiny = tinyFriend;
    }
}

console.log(tiny);  