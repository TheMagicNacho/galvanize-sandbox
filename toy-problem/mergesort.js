
/*
INPUT: Array of int
OUTPUT: Sortted Array
EDGE: Up to a milion inputs
Constraints: Must complete computaion within 1 sec
*/

/*
  CONDITION
  - Take Array and make array of array
  input

  primaryArray = [];
  primaryArray.map() // each index to the array

  find middle
  Math.round(primaryArray.length / 2)

  ACT
  - Loop While the primary array length is > 1
  LEFT
  - preProcess
    - compare index 0, 0 if index0 > index1, send index 1 to array thensend index2
    send result to post process
    - postProcess
  RIGHT
  - preProcess
    - compare index 0, 0 if index0 > index1, send index 1 to array thensend index2
    send result to post process
    - postProcess
      
    push left push right

  RETURN
  - return sigular output


  [4, 3, 2, 1]
  [[4], [3], [2], [1]]

  find middle: 2

  for loop:
  compare left if index0 > index1, send index 1 to array thensend index2
  [[4], [3]]
  Temp array[3, 4]
  push to primary Array

 */
  var mergeSort = function (array) {
    // CONDITION
    // get starting size
    const startSize = array.length;
    if (startSize === 1) { return array;}
    // find middle
    const middleTrue = Math.round(startSize / 2) - 1;
  
    let index = 0;
    let sizePass = startSize;
  
    // - Take Array and make array of array
    let primaryArray = []
    // primaryArray.map() // each index to the array
    array.forEach(element => primaryArray.push([element]));
  
  
  
    // ACT
    // - Loop While the primary array length is > 1
    
    // ASYNC?
    // merge two arrays
    while (primaryArray.length > 1){ //as the arrays get merged together eventually the array length will only be one
      let array1 = primaryArray.shift();
      let array2 = primaryArray.shift();
  
      //ASYNC
      // let tempArray = []
      // merge(array1, array2)
      //   .then(v => primaryArray.push(v)) // <=== THE LOOPS OUTPUT
      //   .catch(e => {
      //     console.error(e);
      //     return primaryArray});
      
      //SYNCRONOUSLY
      let v = merge(array1, array2);
      primaryArray.push(v);
      console.log(primaryArray);
  
      // //return carrage
      // if (sizePass === index){
      //   // everything get's reset
      //   sizePass=primaryArray.length; 
      //   index=0;
      // } else {
      //   // carrage keps get advnacing
      //   index += 1;
      // }
  
    }
  
        
    //   push left push right
  
    // RETURN
    // - return sigular output
    // console.log(primaryArray);
    return primaryArray;
  };
  
  
  // Take 2x arrays of n size
  // resolve with 1x array of merged arrays
  // let merge = (array1, array2) = 
  
  let merge = function(array1, array2) {
    try{
      //catch undefined
      // let largestSize = 0;
      
      // - preProcess  (array1.length === undefined || array2.length === undefined) ? 1 :
      // What's the largest array?
      let largestSize = (array1.length > array2.length) ? array1.length : array2.length;;
      
      
      let output = [];
  
      // For loop through the index of the largest array
      for (let i = 0; i < largestSize; i =+ 1){
        let tempArray = [];
        // if any of the arrays at index = undefined
          // push the defined value to the output array and return
        
        //   - compare index 0, 0 if index0 > index1, send index 1 to array thensend index2
        if (array1[i] < array2[i]) {
          tempArray.push(array1[i], array2[i]);
        } else {
          tempArray.push(array2[i], array1[i]);
        }
        //   send result to post process
        //   - postProcess
        output.push(tempArray);
      }
      // resolve(output);
      return output;
    } catch(e){
      console.error(e);
      // reject([]);
    }
  };
  
  // let merge = function(array1, array2){
  //   return new Promise(
  //     function(resolve, reject) {
  //       try{
  //         //catch undefined
  //         // let largestSize = 0;
          
  //         // - preProcess
  //         // What's the largest array?
  //         let largestSize = (array1.length === undefined || array2.length === undefined) ? 0 : (array1.length > array2.length) ? array1.length : array2.length;;
  //         let output = [];
    
  //         // For loop through the index of the largest array
  //         for (let i = 0; i < largestSize; i =+ 1){
  //           let tempArray = [];
  //           // if any of the arrays at index = undefined
  //             // push the defined value to the output array and return
            
  //           //   - compare index 0, 0 if index0 > index1, send index 1 to array thensend index2
  //           if (array1[i] < array2[i]) {
  //             tempArray.push(array1[i], array2[i]);
  //           } else {
  //             tempArray.push(array2[i], array1[i]);
  //           }
  //           //   send result to post process
  //           //   - postProcess
  //           output.push(tempArray);
  //         }
  //         resolve(output);
  //       } catch(e){
  //         console.error(e);
  //         reject([]);
  //       }
  //     }
  //   );
  // }
  
  
  
  
  console.log("" + mergeSort(Array.from({length: 3}, () => Math.floor(Math.random() * 100))));
  
  // let x = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
  // console.log(x);
  
  