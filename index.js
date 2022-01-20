// /*
// Bubble sort is the most basic sorting algorithm in all of Computer Sciencedom. It works by starting at the first element of an array and comparing it to the second element; if the first element is greater than the second element, it swaps the two. It then compares the second to the third, and the third to the fourth, and so on; in this way, the largest values "bubble" to the end of the array. Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique. Don't use JavaScript's built-in sorting function (Array.prototype.sort).
// QUERY: What's the time complexity of your algorithm? If you don't already know, try to intuit this without consulting the Googles.
// Extra credit: Optimization time! During any given pass, if no elements are swapped we can assume the list is sorted and can exit the function early. After this optimization, what is the time complexity of your algorithm?

// Moar credits: Do you need to consider every element every time you iterate through the array? Make it happen, boss. Again: Has the time complexity of your algorithm changed?
// Example usage:
// bubbleSort([2, 1, 3]); // yields [1, 2, 3]

// Feel free to add helper functions if needed.

// */

// //INPUT: Array of int
// //OUTPUT: Sortted array of int
// //EDGE:
// //CONSTRAINTS: Must use bubble sort. Don't use sort


// var bubbleSort = function(array) {
//   // let output=[];
//   function a(element, index) {
//     // console.log(`current element: ${element}`);
//     let a = element;
//     let b = array[index+1]
//       if(a > b){ 
//         array[index] = b;
//         array[index+1] = a;
//       }
//     }

//   for (let i = 0; i < array.length; i++){
//     array.forEach(a);
//   }  

//   return array;
// };





// module.exports = firstNonRepeatedCharacter;

/*
    function a(element, index) {
      // console.log(`current element: ${element}`);
        if(element > tickerBase){ 
          counterArray[index]=0;
          counterArray[index+1]++;
        }
      }
*/
  // function sortHelper(element, index) {
  //   // console.log(`current element: ${element}`);
  //   let a = element;
  //   let b = array[index+1]
  //     if(a > b){ 
  //       array[index] = b;
  //       array[index+1] = a;
  //     }
  //   };

let c = 0;
var bubbleSort = function(array) {
    //let finLength = (array.length * array.length)
    // let boolArray = [];
    for(var i = 0; i < array.length; i++){
      if (array[i] < array[i+1]) {
          return array;
          // boolArray.push(false);
      }
    }
    // if(!boolArray.includes(false)){
    //   return;
    // }

    // if (array ===  array.sort()) {
    //   return array;
    // }
    if (c === array.length) {
        c = 0;
        bubbleSort(array)
    }
    else if (array[c] > array[c+1]) 
    {
        let tempVal = array[c];
        array[c] = array[c+1];
        array[c+1] = tempVal;
        c += 1;
        bubbleSort(array)
    }
    else {
        c += 1;
        bubbleSort(array)
    }
};

var result = bubbleSort([ 1, 2, 43, 100, 100, 21, 21 ]);
console.log(result);



function bubbleSortRecursion(arr)
{
  const n = array.length;
 function recurse(){
    // Base case
    if (n == 1)
        return;
  
    // One pass of bubble
    // sort. After this pass,
    // the largest element
    // is moved (or bubbled)
    // to end.
     
    for (var i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1])
        {
         
            // swap arr[i], arr[i+1]
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
  
    // Largest element is fixed,
    // recur for remaining array
    bubbleSort(arr, n - 1);
 }
 recurse();

}