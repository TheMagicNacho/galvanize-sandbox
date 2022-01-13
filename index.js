//Input: String
//Output: Single String
//Constraints: One function
//Execution: Can identify changes in patterns.

// function firstNonRepeatedCharacter(inputUsr) 
var firstNonRepeatedCharacter = function (inputUsr){
  //condition input
  if (inputUsr === null || inputUsr === '' || inputUsr === undefined){return null};
  const inputStr = (typeof inputUsr === 'string') ? inputUsr : inputUsr.toString();
  //Create evaluator array
  let evaluationArray = inputStr.split('');


  // Create Evaluator Annon function
  // const reducerFunc = (a, b) => { if (a !== b) return b; };
  // Evaluate using reduce
  // Logic: if a != b return b
  // evaluationArray.reduce(reducerFunc);
  for (let i = 0; i < evaluationArray.length; i++){
    if (i === (evaluationArray.length-1))
    {
      return null;
    }
    else if (evaluationArray[i+1] == undefined)
    {
      return null;
    }
    else if (evaluationArray[i] !== evaluationArray[i+1])
    {
      return evaluationArray[i+1];
    } else {
      continue;
    }
  }
 
  // //OUTPUT
  // return evaluationArray.reduce((previous, current) => { if (previous !== current) return current; });
}

module.exports = firstNonRepeatedCharacter;


// //UNIT TEST//
console.log(firstNonRepeatedCharacter('AABCABD'));