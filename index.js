function myFunction(input){

    // const num = input;

    const functionArray = [
      (num)=>{return num += 1},
      (num)=>{return num * 2},
      (num)=>{return num * 534},
      (num)=>{return num / 3},
      (num)=>{return Math.round(num)}
    ]
    
    let out = [];
    for (let func of functionArray) {
      let _calculated = func(input);
      out.push(_calculated);
    }
    return out.reduce(function(l, c){return l + c}, 0);
  }



///// UNIT TEST ////
let output = myFunction(0);
console.log(output);

