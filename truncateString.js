function truncateString(str, num) {
    let completeString = []
   if (str.length > num) {
    //  console.log(str.length)
    //  console.log(num)
     for (let i = 0; i < num; i++) {
       let newString = str[i]
        // console.log(newString)
        completeString.push(newString)
     }
   } else {
     return str
   }
   console.log(completeString.join('') + "...")
   return completeString.join('') + "..."
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);