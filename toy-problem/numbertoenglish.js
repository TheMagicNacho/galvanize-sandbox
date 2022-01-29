var numbersToWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  };
  var numbersToPlace = {
    1: "ten",
    2: "hundred",
    3: "thousand",
    4: "million",
    5: "billion",
    6: "trillion",
    7: "quadrillion",
    8: "quintillion"
  };

Number.prototype.toEnglish = function() {
    let innerRecurse = (num) =>{
      let place;
      let placeValueNum;
      
    }
  
  
  
    //RETURN
    return ;
  };
  const toEnglish = Number.prototype.toEnglish;
  
  
  
  let testMe = 3256; 
  console.log(testMe.toEnglish());
  

  

  /*
  var numbersToWords = {
	0: "zero",
	1: "one ",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety"
  };
  var numbersToPlace = {
    1: "ten",
    2: "hundred",
    3: "thousand",
    4: "million",
    5: "billion",
    6: "trillion",
    7: "quadrillion",
    8: "quintillion"
  };



let int = 150043.273;
let str = int.toString(); 
let magicNumber = str.length;


// REWIND THE NUBER BACK INTO A FLOAT THEN FIGURE OUT FORWARD
// devide 
let x = int;
let tick = 0;

let place = 1; 

// REMEMBER- How do we spell words? (database)

// UNDERSTANDS- Where are we now?
for (let i = 0; i < magicNumber; i += 1){
	x /= 10.00; // deviding by 10 moves the int right by one decimle place and adds the number as a decile. We can use this to retain the data while looking at a spcific point

	// This block keeps track of our place on the tape
	if (tick > 2){
		tick = 0; 
		place += 1; 
	}
	tick += 1;

}
//We now have our orignial number 'rewinded' into a decimal form.
//We also know how many tenth places are used. via place variable.

// // COMPUTE- After recalling previous information, and understanding our current position we can now compute.
// // Find hundredths


let output = '';
const size = place;
// SOME SORT OF LOOP
for (let k = 0; k < size; k += 1){

	for(let j = 0; j < tick; j += 1){
		//replay the number by ticks
		x *= 10;
		if(j === 0 && x > 0.99 && tick === 3){
			// console.log('🙃')
			// continue;
			output += numbersToWords[parseInt(x)] + ` hundred and `;
			x *= 10;
		} else{
			continue;
		}
	}



	let curentHundreth = parseInt(x);
	let preProcess = wordHundreth(curentHundreth);
	// Push it
	output += preProcess; // Send the word to the string
	output += numbersToPlace[place + 1] + ' ';
	//reset tick to 3
	tick = 3;
	x -= curentHundreth;
	place -= 1;

}








// console.log(`🧑‍🏫: ${curentHundreth}`)



// // INPUT: 3 digit number
// // RETURN: String of hundreth
function wordHundreth(inputHundredth){
	var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten'];
	var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
	//CONDITION
	// if the input int is less than 20 just use a look up table
	if(inputHundredth < 20){ return numbersToWords[inputHundredth] };

	// WORK 
	if ((inputHundredth = inputHundredth.toString()).length > 9) return 'overflow';
    let n = ('000000000' + inputHundredth).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; 
	let str = '';
	// str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : ' ';
    str += (n[5] != 0) ? ((str != '') ? ' ' : '') + (a[Number(n[5])] || b[n[5][0]] + '-' + a[n[5][1]]) : '';
	if(str.length < 8){str = str.slice(0, -1)};
    return str;
}


 


// UNIT TESTS~~~~ 
console.log(`place: ${place}`);
console.log(`🌮 last digits: ${tick}`);
console.log("🚀 output: " + output);

// console.log(wordHundreth(int))



// function inWords (inputHundredth) {
// 	var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten'];
// 	var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
   
// 	if ((inputHundredth = inputHundredth.toString()).length > 9) return 'overflow';
//     let n = ('000000000' + inputHundredth).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//     if (!n) return; 
// 	let str = '';
//     str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + '-' + a[n[5][1]]) : '';
// 	if(str.length < 8){str = str.slice(0, -1)};
//     return str;
// }

// for (let i = 20; i < 100; i++){
// 	console.log(inWords(i));
// }




/*
//DATABASE


// Main Function
- rewind the int
- find the place

- pass first three digits

- pass the result from the call back into a new string then add thousandts


// Callback Function

*/

  