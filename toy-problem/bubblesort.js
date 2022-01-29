let c = 0;
var bubbleSort = function (array) {
  let finLength = array.length * array.length;
  if (c === finLength) {
    return array;
  } else if (array[c] > array[c + 1]) {
    let tempVal = array[c];
    array[c] = array[c + 1];
    array[c + 1] = tempVal;
    c += 1;
    bubbleSort(array);
  } else {
    c += 1;
    bubbleSort(array);
  }
};
var result = bubbleSort([1, 2, 43, 100, 100, 21, 21]);
console.log(result);
