// function factorialize(num) {
//     if (num < 0 || num === 0) {
//       return 1
//     } else {
//         console.log(num * factorialize(num - 1))
//       return num * factorialize(num - 1)
//     }
//   }
  
//   factorialize(5);

  function factorialize(num) {
      if (num < 0 || num === 0 || num === 1) {
          return 1
      }
      for (let i = num - 1; i >= 1; i--) {
        num = num * i
      }
      console.log(num)
      return num
  }

  factorialize(3);