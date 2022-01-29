var evenOccurrence = function(arr) {
	// CONDITION
  let startSize = arr.length;
  let cue = arr;
// WORK
//loop through the array
  for (let i = 0; i < startSize; i += 1 ){
	  let evaluate = cue.shift();
	  console.log(`Evaluating: ${evaluate}`);
	   // searching for index
	   // is evaluate still in the cue?
	  if(cue.includes(evaluate)){
	  //THE SEARCH ITEM IS INSIDE OF THE CUE STILL
		  // if yes, count the number of occurances (use example below)var tempArray = [];
		  // var array = ['a', 'b', 'a', 'c', 'a', 'd'];
		  let tempArray = [];
		  var idx = cue.indexOf(evaluate);
		  while (idx != -1) {
			  tempArray.push(idx);
			  idx = cue.indexOf(evaluate, idx + 1);
		  }
		  // console.log(tempArray); 
		  // Bitshift: (tempArray.length + 1) ^ 1 === (tempArray.length + 1) + 1
		  if((tempArray.length + 1) % 2 === 0){ 
		  // If there is an even number of the array it's the first matching
			  return evaluate;
		  } else {
			  // Eliminate all evaluated instances for not being even
			  while(cue.includes(evaluate)){
				  console.log('deleting odd instances')
				  let deleteIdx = cue.indexOf(evaluate);
				  cue.splice(deleteIdx, 1);
			  }
		  }
		  
	  } else {
	  //EVALUATE IS NOT INCLUDED IN THE ARRAY
		  console.log(`No matching pairs.`)
	  }
  }
// RETURN
return null; 
};

var onlyEven = evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]);
console.log(onlyEven);


 

    
    // is inddices.length % 2 == 0? 
      //yes, return the value searched


/*
FIND ALL OCCURANCES
var tempArray = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var evaluate = 'a';
var idx = array.indexOf(evaluate);
while (idx != -1) {
  tempArray.push(idx);
  idx = array.indexOf(evaluate, idx + 1);
}
console.log(tempArray);
// [0, 2, 4]

*/