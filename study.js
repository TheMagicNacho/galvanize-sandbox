function test(){
    const students = [
        { name: "Stephen", age: 24 },
        { name: "Alice", age: 19 },
        { name: "Jordan", age: 29 },
        { name: "Julie", age: 21 },
        { name: "Chris", age: 26 }
    ]
    
    
    let ageArray = students.map(({age})=>{return age});
    
    const summation = (previousValue, currentValue) => previousValue + currentValue;
    let sumAge = ageArray.reduce(summation);
    
    let averageAge = sumAge / ageArray.length;

    return averageAge;
}

let output = test();
console.log(output)