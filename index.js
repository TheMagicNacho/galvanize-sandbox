var longestRun = function(string) {
	//CONDITION
	//Edge Case: String is empty
	if (string.length === 0 ){ return null}

	//WORK
	let stringArr = string.split("");
	let repeatedChars = ['empty',0];
	let longestRepeatedChar = [0,0];
	for(let i = 0; i < stringArr.length; i++) {
	  if(stringArr[i] === stringArr[i + 1]) {
		if(repeatedChars[0] === 'empty') {
		  repeatedChars[0] = i;
		}
	  } else if(repeatedChars[0] !== 'empty') {
		repeatedChars[1] = i;
		console.log('repeated ', repeatedChars, 'longest ', longestRepeatedChar);
		if(repeatedChars[1] - repeatedChars[0] > longestRepeatedChar[1] - longestRepeatedChar[0]) {
		  longestRepeatedChar[0] = repeatedChars[0];
		  longestRepeatedChar[1] = repeatedChars[1];
		  repeatedChars[0] = 'empty';
		  repeatedChars[1] = 0;
		}
	  }
	}
	
	//RETURN
	return longestRepeatedChar;
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
  console.log(longestRun('aabbc'));