// Input: an int
// Output: an final post-processed interger
// Constraints: must use spread
// Explination: can be used to conduct an algorithmmic process like orbital mechanics
function myFunction(input){
    // Define the function array
        const functionArray = [
          (num)=>{return num += 1}, // Given by prompt
          (num)=>{return num * 2}, // take last answer and double it
          (num)=>{return num * 534}, // multiply by 534
          (num)=>{return num / 3}, // devide by 3
          (num)=>{return Math.round(num)} // round to the next whole int
        ]
        
        // Store the outputs of each function
        let out = []; //v1.
        // declare the reducer function
        const reducer = (x, current)=>{return 0 + current};
    
        // loop through the function array
        for (let func of functionArray) {
          // assign the functions output to var calculated (private)
          // take the answer from the last array
          let _calculated = func(out.reduce(reducer, input)); //v1
          // send the answer to the array for storage
          out.push(_calculated); // v2
    
        }
        // the last answer in the array is going to be the final answer.
        return out.pop();
      }
    
    
    
    ///// UNIT TEST ////
    let output = myFunction(1337);
    console.log(output);