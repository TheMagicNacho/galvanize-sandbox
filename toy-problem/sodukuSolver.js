// to improve, could probably combine the box checking section with the row checking section.
// this would reduce time complexity, but at the expense of memory complexity.

function sudokuChecker(board) {
	// CONDITION
	const evaluateBox = [];
	const sum = (a, b) => a + b;
	const array = board
					.split(/\n/)
					.map( x => x.split('')
						.map(x => parseInt(x))); // turn board into array of arrays with int values

	
	// console.log(array);
	
	// WORK
		// Theory. all rows and columns need to = 45
		// Sum of each array
		for(let row of array){
			const rowSum = row.reduce(sum);
			evaluateBox.push(rowSum);


			if (rowSum !== 45){
				return 'invalid';
			} 
		}
		// expect board to equal 405
		const boardSum = evaluateBox.reduce(sum);
		if(boardSum !== 405){
			return 'invalid';
		}

		const boxes = []
		for (let i = 3; i < 6; i += 1){
			boxes.push((array[i].slice(3, 6).reduce(sum)));
		}
		const boxSum = boxes.reduce(sum);
		if(boxSum !== 45){
			return 'invalid';
		}


	// RETURN
	return 'valid';
  
  }

  //DRIVER


  console.log('VALID RETURN: ' + sudokuChecker("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"));
  
  console.log('INVALID ROW: ' + sudokuChecker("111111111\n222222222\n333333333\n444444444\n555555555\n666666666\n777777777\n888888888\n999999999"));

  console.log('INVALID ROW/COLUMN: ' + sudokuChecker("123123123\n456456456\n789789789\n123123123\n456456456\n789789789\n123123123\n456456456\n789789789"));

  console.log('INVALID BOX: ' + sudokuChecker("215873649\n734965812\n698412537\n387241965\n146597283\n471659328\n952386471\n563128794\n829734156"));


  