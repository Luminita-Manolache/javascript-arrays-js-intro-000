var chocolateBars = ["snickers", "hundred grand", "kitkat", "skitels"];

function addElementToBeginningOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

