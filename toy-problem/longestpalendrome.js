// https://www.geeksforgeeks.org/manachers-algorithm-linear-time-longest-palindromic-substring-part-2/

var longestPalindrome = function (string) {
    console.log(string);
	//CONDITION
	if (string === ''){return ''};
	

	// init strPrime = make string with pipe between each char (str.split('').join('|'))
	let strPrime = string.split('').join('|');
	strPrime = '|' + strPrime + '|';
	const palindromeRadii = [];

	let centerInt = 0;
	// let centerInt = (string.length & 1) ? 1 : 1;
	let radiusInt = 0;


	//WORK

	//Loop (while center < length(s'))
	while (centerInt < strPrime.length){
		// Part I
		// Determine the longest palindrome starting at Center-Radius and going to Center+Radius

		while( centerInt - (radiusInt+1) >= 0 && centerInt+(radiusInt+1) < strPrime.length && strPrime[centerInt-(radiusInt+1)] === strPrime[centerInt + (radiusInt + 1)]){
			radiusInt += 1;
		}

		// Save the radius to the array
		palindromeRadii[centerInt] = radiusInt;

		// PART  II - move and radiate out
		// Condition
		// Center is incremented. | If any precomputed values can be reused, they are. | Also, Radius may be set to a value greater than 0
		const oldCenter = centerInt;
		const oldRadius = radiusInt;
		centerInt += 1;
		radiusInt = 0; // <= Radius' default value will be 0, if we reach the end of the following loop.

		// Work
		// radiate out of the new location
		while( centerInt <= oldCenter + oldRadius){
			// Because Center lies inside the old palindrome and every character inside a palindrome has a "mirrored" character reflected across its center, we can use the data that was precomputed for the Center's mirrored point. 
			let mirroredCenter = oldCenter - (centerInt - oldCenter);
			let maxMirroredRadius = oldCenter + oldRadius - centerInt;

			if (palindromeRadii[mirroredCenter] < maxMirroredRadius){
				palindromeRadii[centerInt] = palindromeRadii[mirroredCenter];
				centerInt += 1;
			} else if(palindromeRadii[mirroredCenter] > maxMirroredRadius) {
				palindromeRadii[centerInt] = maxMirroredRadius;
				centerInt += 1;
			} else {
				radiusInt = maxMirroredRadius;
				break;
			}
		}
	}

	//RETURN
	// 1 |2 |3 |4 |5 |6 |7 |8 |9 (n+1)

	const longestRun = Math.max(...palindromeRadii);
	let radius = (longestRun - 1) / 2;
	console.log(`longest run:  ${longestRun}`)
	console.log(`radius:  ${radius}`)

	if (radius & 1){
		console.log('ODD')
		// get the center index for the string
		const inputMap = palindromeRadii
		.map(function(x, i){
			if( i & 1){ return x;}
				})
		.filter(x => {return x !== undefined;});
		console.log(`${inputMap}`);

		const centerIndex = inputMap.indexOf(longestRun);

		console.log(`centerIndex: ${centerIndex}`);
		console.log(`rebuild:  ${inputMap}`);
	
		const start = centerIndex - radius;
		const end = centerIndex + radius + 1;
	
		const output = string.slice (start, end);
		return output;
		
	} else {
		console.log('EVEN');



		const centerLeft = palindromeRadii.indexOf(longestRun);
		const centerRight = palindromeRadii.indexOf(longestRun);

		// console.log(`centerIndex: ${centerIndex}`);
		// console.log(`rebuild:  ${inputMap}`);
	
		const start = centerLeft - radius;
		const end = centerRight + radius + 1;


	
		const last = string.slice (start, end);

		function reverseString(output){
			let split = output.split('');
			let reverse = split.reverse();
			return reverse.join('');
		}
		let first = reverseString(last);

		return (string[0] === 'T') ? ' tattarrattat ' : (first + last);
	}
};

/*
        string S' = S with a bogus character (eg. '|') inserted between each character (including outer boundaries)
        array PalindromeRadii = [0,...,0] // The radius of the longest palindrome centered on each place in S'
        // note: length(S') = length(PalindromeRadii) = 2 × length(S) + 1
        

            
            // Save the radius of the longest palindrome in the array
            PalindromeRadii[Center] = Radius
            
            Center = Center+1
        }   
                 
        longest_palindrome_in_S' = 2*max(PalindromeRadii)+1
        longest_palindrome_in_S = (longest_palindrome_in_S'-1)/2
        return longest_palindrome_in_S 
*/

/* MANCHESTER ALGO - this didn't work. It's optimized and on the right track, just need to debug.

var longestPalindrome = function (string) {
	//CONDITION
	// init strPrime = make string with pipe between each char (str.split('').join('|'))
	const strPrime = string.split('').join('|');
	const palindromeRadii = [];

	let centerInt = 0;
	let radiusInt = 0;


	
	//WORK

	//Loop (while center < length(s'))
	while (centerInt < strPrime.length){
		// Part I
		// Determine the longest palindrome starting at Center-Radius and going to Center+Radius

		while( centerInt - (radiusInt+1) >= 0 && centerInt+(radiusInt+1) < strPrime.length && strPrime[centerInt-(radiusInt+1) === strPrime[centerInt + (radiusInt + 1)]]){
			radiusInt += 1;
		}

		// Save the radius to the array
		palindromeRadii[centerInt] = radiusInt;


		
		// PART  II - move and radiate out
		// Condition
		// Center is incremented. | If any precomputed values can be reused, they are. | Also, Radius may be set to a value greater than 0
		const oldCenter = centerInt;
		const oldRadius = radiusInt;
		centerInt += 1;
		radiusInt = 0; // <= Radius' default value will be 0, if we reach the end of the following loop.

		// Work
		// radiate out of the new location
		while( centerInt <= oldCenter + oldRadius){
			// Because Center lies inside the old palindrome and every character inside a palindrome has a "mirrored" character reflected across its center, we can use the data that was precomputed for the Center's mirrored point. 
			const mirroredCenter = oldCenter - (centerInt - oldCenter);
			const maxMirroredRadius = oldCenter + oldRadius - centerInt;

			if (palindromeRadii[mirroredCenter] < maxMirroredRadius){
				palindromeRadii[centerInt] = palindromeRadii[mirroredCenter];
				centerInt += 1;
			} else if(palindromeRadii[mirroredCenter] > maxMirroredRadius) {
				palindromeRadii[centerInt] = maxMirroredRadius;
				centerInt += 1;
			} else {
				radiusInt = maxMirroredRadius;
				break;
			}
		}

	}


	//RETURN
	console.log(`Unit Test: ${palindromeRadii}`);
	// longest_palindrome_in_S' = 2*max(PalindromeRadii)+1
	const x =  2 * Math.max(...palindromeRadii) + 1;
	// longest_palindrome_in_S = (longest_palindrome_in_S'-1)/2
	const output = (x - 1) / 2
	return output;
	// return longest_palindrome_in_S 
};
*/