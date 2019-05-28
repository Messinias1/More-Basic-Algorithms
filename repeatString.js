// function repeatStringNumTimes(str, num) {
//     let repeated = str.repeat(num)
//     console.log(repeated)
//      return repeated;
//    }
   
//    repeatStringNumTimes("*", 3);

function repeatStringNumTimes(str, num) {
    let array = []
  
    for (let i = 0; i < num; i++) {
      array.push(str)
    }
    str = array.join("")
    console.log(str)
    return str
  }
  
  repeatStringNumTimes("*", 3);