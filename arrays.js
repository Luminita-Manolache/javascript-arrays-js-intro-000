var chocolateBars = ["snickers", "hundred grand", "kitkat", "skitels"];

function addElementToBeginningOfArray(array, element) {
  var newArr;
  newArr = [...array, element];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  var newArr;
  newArr = [element, ...array];
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}














