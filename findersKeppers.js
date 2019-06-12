function findElement(arr, func) {
    // look through the array
    console.log(arr)
    console.log(func)
    for (var i = 0; i < arr.length; i++) {
      // return first element that passes a truth test in 2nd arg
      console.log(arr[i])
          if(func(arr[i])) {
              console.log(arr[i])
            return arr[i]
          }
        }
     }
  
  findElement([1, 2, 3, 5, 8, 9, 10], num => num % 2 === 0);