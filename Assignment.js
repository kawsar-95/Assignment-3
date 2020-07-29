// feetToMile

function feetToMile(mile) {
  var feet = mile / 5280; //1 mile = 5280 feet
  return feet;
}
var result = feetToMile(144);
console.log(result);

// woodCalculator

function woodCalc(chair, table, bed) {
  var chairCount = chair * 1;
  var tableCount = table * 3;
  var bedCount = bed * 5;
  var totalWoodCount = chairCount + tableCount + bedCount;
  return totalWoodCount;
}
var woodResult = woodCalc(10, 12, 20);
console.log(woodResult);

//brickCalculator

function brickCalc(floor) {
  var firstTen = 15000 * 10;
  var secondTen = firstTen + 12000 * 10;
  var brick;
  if (floor <= 10) {
    return (brick = floor * 15000);
  } else if (floor <= 20) {
    return (brick = (floor - 10) * 12000 + firstTen);
  } else {
    return (brick = (floor - 20) * 10000 + secondTen);
  }
}
var total = brickCalc();
console.log(total);

//tinyFriend

function tinyFriend(names) {
  var tinyName = names[0];
  for (var i = 0; i < names.length; i++) {
    var newName = names[i];
    if (newName.length < tinyName.length) {
      tinyName = newName;
    }
  }
  return newName;
}
var tinyName = tinyFriend([]);
console.log(tinyName);
