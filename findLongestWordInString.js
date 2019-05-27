// function findLongestWordLength(str) {
//     let strArray = str.split(" ")
//     let sortedStrArray = strArray.sort((strA, strB) => {
//       return strB.length - strA.length
//     })
//     console.log(sortedStrArray[0])
//     console.log(sortedStrArray[0].length)
//     return sortedStrArray[0].length;
//   }
  
  
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");

  function findLongestWordLength(str) {
    let strArray = str.split(" ")
    let longestWord = "";

    for (let i = 0; i < strArray.length; i++) {
        if (longestWord.length < strArray[i].length) {
            longestWord = strArray[i]
        }
    }
    str = longestWord
    console.log(longestWord)
    return str.length
  }
  
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");