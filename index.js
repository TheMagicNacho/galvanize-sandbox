var matrix = [ 
	[ 1, 2, 3, 4, 5 ],
	[ 6, 7, 8, 9, 'A' ],
	[ 'B', 'C', 'D', 'E', 'F' ],
	[ 'G', 'H', 'I', 'J', 'K' ] 
];

var rotateMatrix = function (matrix) {
	
	if( matrix[0].length !== matrix.length){
		let output = new Array(matrix[0].length);
		let row = new Array(matrix.length);

		ma

	}


	return matrix.map((row, i) => 
		row.map((val, j) =>
		matrix[matrix.length -1 -j][i]
		)	
	);
  
  };


let output = rotateMatrix(matrix);

// console.log(`Expect : ${output[0][0]}`);
// console.log(`Expect : ${output[1][2]}`);
console.log(`Rotated Matix: ${output}`);