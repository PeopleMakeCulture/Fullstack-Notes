var names1 = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];

function strFrequency(namesArray){
	//Input: array of strings
	//Output: dict of frequency of strings
	//Req: use .reduce() function
  var countedNames = ["Bob", "Bill", "Bo", "Ben", "Bob"].reduce(function (allNames, currentName) { 
    if (currentName in allNames) {
      allNames[currentName]++;
    }
    else {
      allNames[currentName] = 1;
  }
  return allNames;
}, initialValue = {});
}

//console.log(strFrequency(names));

//array reduce for sums
let array1 = [0, 1, 2, 3, 4]
let sum = array1.reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});

//console.log(sum);

//array reduce for flattening
let array2 = [[0, 1], [2, 3], [4, 5]];

let flattened = array2.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue), initialValue = []);

//console.log(flattened);

//array reduce for counting instances
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

//console.log(countedNames);

function strFrequency(namesArray){

  var countedNames = names.reduce(function (allNames, currentName) { 
    if (currentName in allNames) {
      allNames[currentName]++;
    }
    else {
      allNames[currentName] = 1;
  }
  return allNames;
}, initialValue = {});
return countedNames;
}
console.log(strFrequency(names));

//array reduce for grouping objects