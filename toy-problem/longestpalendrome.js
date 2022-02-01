var longestPalindrome = function (string) {
	//CONDITION
	const strPrime = string.split('').join('|');
	const palindromeRadii = [];
	const strPrimeLength = 2 * string.length + 1;
	let center = 0;
	//WORK
	while (center < strPrimeLength){
		let radius = 0;
		while(center - (radius + 1) >= 0 && center +(radius+1) < strPrimeLength && strPrime[center-(radius+1) === strPrime[center +(radius+1)]]){
            radius += 1;
        }
        palindromeRadii[center] = radius;

        center += 1;
	}
	//RETURN
    return palindromeRadii;
	
};
console.log(`OUTPUT: ${longestPalindrome('ddccbbaabbccdd')}`)


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