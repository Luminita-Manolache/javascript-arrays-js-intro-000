var chocolateBars = ["snickers", "hundred grand", "kitkat", "skitels"];

function addElementToBeginningOfArray(array, element) {
  return array = [...array, element];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  arr = newArr = [element, ...array];
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  arr = newArr.push(element);
  return newArr
}
