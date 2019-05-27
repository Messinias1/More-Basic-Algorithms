// function largestOfFour(arr) {
//     var results = [];
//     for (var n = 0; n < arr.length; n++) {
//       var largestNumber = arr[n][0];
//       for (var sb = 1; sb < arr[n].length; sb++) {
//         if (arr[n][sb] > largestNumber) {
//           largestNumber = arr[n][sb];
//         }
//       }
  
//       results[n] = largestNumber;
//     }
//     console.log(results)
//     return results;
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  function largestOfFour(arr) {
      // Create empty Array to fill later
    let myArray = []
    // loop into first array in arr see callback
    for (let i = 0; i < arr.length; i++) {
        // placeholder just to find largest number
        largestNum = 0;
            // loop through second array
        for (var j = 0; j < arr.length; j++) {
            // setting the largest number
            if (largestNum < arr[i][j]) {
                largestNum = arr[i][j]
            }
        }
        // add the largest number to myArray
        myArray.push(largestNum)
    }
    console.log(myArray)
    return myArray
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);