/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!
Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.)

Tips:

    Phone numbers are strings! (A phone number can start with a zero.)
    The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
    Don't return every combination of those digits in any order, just the order given.

Extra credit: There's a list of English dictionary words at /usr/share/dict/words . Why not filter your results to only return words contained in that file?

telephoneWords('2745');
=> ['APGJ',
    'APGK',
    'APGL',
    ..., // many many more of these
    'CSIL']
*/

var phoneDic = {
  0: '000',
  1: '111',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

//INPUT:  String of Four digits
//OUTPUT: Array of combinations
//Constraints: Must allign with phone pad numarics
//Edge: Must handle if no usefull combination is passed.
//Justification: usefull tool for marketers

var telephoneWords = function (digitString) {
  //CONDITION
  // turn string into array
  const stringArray = digitString.split('');
  // turn string array into possiblities array: this is the main
  let possibilityArray = [];
  // loop through string array
  for(let input of stringArray){
    //push number dic result to possiblityArray
    possibilityArray.push(phoneDic[parseInt(input)])
  }
  console.log(possibilityArray);
  //Initiate the output array that holds strings ['','','']
  let outputArray = [];

  //Initiate counter array: used in recurse
  let counterArray = [0, 0, 0, 0]

  /*
  Works like a clock driving a time piece
  While loop drives index 0 forward. Everything else gets ticked forward later.

    | 1 | 0 | 0 | 0 | COUNTER

    | A | A | A | D | POSSIBLITY
    | B | B | B | E |
    | C | C | C | F |

  */
  //WORKER

  // start driving while loop (counterArray[3] < 2) < moves counter up

  while(counterArray[3] < 2){

    //WORKING LOGIC < creates the strings for the array
    //init tempString
    let tempString = '';
    //for loop (i = 0; i < possibilityArray.length; i++) possiblityArray
    for(i = 0; i < possibilityArray.length; i++){
      // init currentStr = PossibilityArray[index] Get the current string of Char
      let currentStr = possibilityArray[i];
      // get the char index IAW counterArray
      tempString += currentStr[counterArray[i]]
      
    }
    //once tempString loop is done, send the temp string to the array
    outputArray.push(tempString);

    //ITTERATE THE COUNTER ARRAY < drive the counter clock
      //counterArray[0]++ < The watch driver
      counterArray[0]++
      //counter Reducer with Logic
      // if a == 2 than b++ < the ticker

      //TODO: this part his is hurting
      let tempArray = counterArray
        .reduce()
        .map()
      // counterArray = counterArray.reduce((a, b)=>{if(a===2){return ++b}else{return b}}); 

      //?? What is it do at this point?
      console.log("counter array: " + counterArray);

    //zero the tempString
    tempString = '';
  }


  



  //RETURN OUTPUT
  //array of strings
  return outputArray;
};


var result = telephoneWords('0002');
console.log(result);

// module.exports = firstNonRepeatedCharacter;






  // //CONDITION
  // // turn string into array
  // let stringArray = digitString.split('');
  // // turn string array into possiblities array: this is the main
  // let possibilityArray = [];
  
  // // loop through string array
  // for(let input of stringArray){
  //   //push number dic result to possiblityArray
  //   possibilityArray.push(phoneDic[parseInt(input)])
  // }
  // console.log(possibilityArray);
  // //Initiate the output array that holds strings ['','','']
  // let outputArray = [];

  // //Initiate counter array: used in recurse
  // let counterArray = [0, 0, 0, 0]

  // //RECURSE & WORK
  // //init function
  // function recurse(){
  //   //Base Case: if counter array === [3,3,3,3] return
  //   if (counterArray === [2, 2, 2, 2]) {return}
  //   //init temp string to hold output
  //    let _tempString = '';
    
  //    //loop through each item of the posiblities array
  //   for (let i = 0 ; i < possibilityArray.length; i++){
  //     //create a string from the array's output: string at index from counter array
  //     let _evaluateStr = possibilityArray[i];
  //     _tempString = _tempString + _evaluateStr[counterArray[i]];

  //   }
  //   //push string to output array. Once per recursion
  //   outputArray.push(_tempString);

  //   //Handle the counter
  //     //Loop through counter
  //     for(let j = 0; j < counterArray.length; j++){
  //       //if index 3 == 3 on counter - set to 0 otherwise increment
  //       if (counterArray[j] === 2){
  //         counterArray[j] == 0; 
  //       }
  //       counterArray[j]++;
  //       //recurse again
  //       recurse();
  //       // break;

  //     }

  //   }  ////////////////////////////END RECURSION



  // //OUTPUT
  // // Call the recursion
  // recurse();
  // //return the output array
  // // condition handeling?
  // console.log('output array'+ outputArray)
  // return outputArray;




