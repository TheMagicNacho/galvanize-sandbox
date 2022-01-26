// var numbersToWords = {
//   0: "zero",
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
//   7: "seven",
//   8: "eight",
//   9: "nine",
//   10: "ten",
//   11: "eleven",
//   12: "twelve",
//   13: "thirteen",
//   14: "fourteen",
//   15: "fifteen",
//   16: "sixteen",
//   17: "seventeen",
//   18: "eighteen",
//   19: "nineteen",
//   20: "twenty",
//   30: "thirty",
//   40: "forty",
//   50: "fifty",
//   60: "sixty",
//   70: "seventy",
//   80: "eighty",
//   90: "ninety"
// };
// var numbersToPlace = {
//   10: "ten",
//   100: "hundred",
//   1000: "thousand",
//   1000000: "million",
//   1000000000: "billion",
//   1000000000000: "trillion",
//   1000000000000000: "quadrillion",
//   1000000000000000000: "quintillion"
// };
// Number.prototype.toEnglish = function() {
//       //condition & set variables
//     // const inputString = this.toString();
//     const inputInt = parseInt(this);
//     let itterator = 0;
//     let placeValue = 0;
//     let place = 0;
//     let output = '';

//   function recurse(){


//     // return my value as english words
//     //if there's a match in the lookup table
//     if (numbersToWords[inputInt]) {
//       output = numbersToWords[inputInt];
//     } else if (inputInt < 100){
//       placeValue = Math.floor(inputInt /10)*10 ;
//       itterator = inputInt % 10;
//       output = `${numbersToWords[placeValue]} - ${numbersToWords[itterator]}`;
//     } else {
//       if (inputInt < 1000){ 
//         place = 100;
//       } else {
//         place = 1000;
//         while (place * 1000 < inputInt){
//           place *= 1000;
//         }
//       }

//       placeValue = Math.floor(inputInt / place);
//       itterator = inputInt % place;
//       output = `${recurse(placeValue)} ${numbersToPlace[place]}`;
//       let remainder = recurse(itterator);
//       if (remainder !== 'zero'){output += remainder};
//     }
//     return output
//   }
//   return recurse(this);
// };

// const toEnglish = Number.prototype.toEnglish;


// let testMe = 1000; 

// console.log(testMe.toEnglish());
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



