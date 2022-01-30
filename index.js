//INPUT: String
//OUTPUT: TUPPLE
// 1. Create array of objects
// 2. find the largest object
// 3. if multiple objects, find the object with the lowest index
// 4. create the answer
// 5. profit




// OBJECT: char, start index, size
class DataBall {
	constructor(char, startIndex, size) {
		this.char = char;
		this.startIndex = startIndex;
		this.size = size;
	}
}

var longestRun = function(string) {
	// console.log(`Input: ${string}`)
	//CONDITION
	//Edge Case: String is empty
	if (string.length === 0 ){ return null}

	let container = [];
	let startIndex = 0;

	
	// Turn the string into a cue
	let cue = string.split('');
	const cueSize = cue.length;

	//WORK
	// Ratchet the Cue to zero and create a container of matching objects
	for (let i = 0; i < cueSize; i += 1){
		const analysis = cue.shift();
		
		if(cue[0] === undefined || analysis === undefined){ 
			//We have reached the end of any useable information
			break;
		} else if (analysis === cue[0]){
			// Analize matches (if the next item in the cue is the same create an object with logic)
			let runSize = 1;
			// we know there is an adjacent letter, how long will this last? (size)
			for (let j = 0; j < cue.length && cue[j] === analysis; j +=1){
				runSize += 1;
			}
			//remove the group we just looked at
			cue.splice(0, (runSize-1))
			
			// construct the dataBall
			const dataBall = new DataBall(analysis, startIndex, runSize)

			// container.push(JSON.stringify(dataBall));
			container.push(dataBall);
			startIndex += (runSize); //increment the index
		} else {
			// increment and keep going
			startIndex += 1; //increment the index
			continue;
		}
		
	}
	// find the largest index
	let searchArray = [];
	container.forEach(obj => searchArray.push(obj.size));
	const winnerIndex = searchArray.indexOf(Math.max(...searchArray));
	const winnerObj = container[winnerIndex];
	//Handle Edge casses
	if (winnerObj === undefined){return [0, 0]};
	
	console.log(`Winner Object: ${JSON.stringify(winnerObj)}`);

	let output = [];
	const start = winnerObj.startIndex;
	const end = start + (winnerObj.size -1);
	
	output.push(start);
	output.push(end);
	
	console.log(`Pre Return: ${output}`)



	//RETURN
	return output;
  };




var randomString = function(len) {
	var text = "";
	var possible = "abcdefghijklmnopqrstuvwxyz";
  
	for (var i = 0; i < len; i++) {
	  text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
  
	return text;
  };


//   console.log(longestRun(randomString(20)));
  console.log(longestRun('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'));