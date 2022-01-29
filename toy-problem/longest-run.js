//INPUT:  String of arbatrary length with letters.
//OUTPUT: Array of head, tail index for longest order
//Constraints: Needs to handle edge casses like null (try catch)
//
class _ConstructNode{
  constructor(itterator, evaluatedChar, startInt, endInt){
    this.index = itterator;
    this.data = evaluatedChar;
    this.start = startInt;
    this.end = endInt;
    this.accumulator = null;
  }
}

var longestRun = function(string) {
  // condition input
  if (string == '' || string == undefined || string == null) return null;
  const objectHolder = new Map();

  let evaluationArray = string.split('');
  // make the objects
  for (i = 0; i < evaluationArray.length; i++ ){
    if(evaluationArray[i] !== evaluationArray[i+1]){
      // if current index is not the same as the next index create an object with the current index info
      const node = new _ConstructNode(i, evaluationArray[i], i, i, null);
    
    } else if (evaluationArray[i] === evaluationArray[i+1]){
      let j = evaluationArray[i];
      let accumulator = 0;  
      function recurseSearch(){
        if (evaluationArray[j] !== evaluationArray[j+1]) 
        j++;
        accumulator++;
        recurseSearch();
        }
        
    
    }else{

    }

  }



  return evaluationArray;
};






module.exports = longestRun();
// UNIT TEST


console.log(longestRun('aabbbcc'));

/*
Knowns: 
Need to know the length of all possible orders.
If there are two runs of equal length, return the first one.

Process:
- create cue
- add matching patters to array in the cue
- LOGIC: find the change in pattern (bubble sort)

-

object
index: int (hash)
data: char (what char is being evaluated)
start: int (start index)
end: int (end index)



*/




