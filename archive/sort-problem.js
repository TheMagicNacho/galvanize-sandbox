// One of the toy problems to output an array of array
function characterFrequency(inputString){
    // Init Vars
    let output = [];
    // Original String as array
    const inputArray = inputString.split('');
    //Array of unique chars. Sorted so we evaluate in order
    let uniqueArray = [...new Set(inputArray)].sort();

    // freq analysis function
    let findFreq = (array, val) => array.reduce((a, v) => (v === val ? a + 1 : a), 0);

    //Loop through unique
    for (let i = 0; i < uniqueArray.length; i++){
        let evaluateChar = uniqueArray[i];
        let tempArray = [];
        let charFreq = findFreq(inputArray, evaluateChar);
        tempArray.push(evaluateChar);
        tempArray.push(charFreq);
        output.push(tempArray);
    }

    
    // OUTPUT & sort by looking at index 1
    return output.sort((a, b) => { return b[1] - a[1]; });
}


///// UNIT TEST ////
let output = characterFrequency('supercalifragilisticexpialidocious');
console.log(output.length);