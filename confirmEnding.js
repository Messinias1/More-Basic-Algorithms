// function confirmEnding(str, target) {

//     let start = str.length - (target.length);
    
//     if (str.substr(start, str.length) == target) {
//       return true;
//     } else {
//       return false;
//     }
// }
    
//     confirmEnding("Bastian", "n");

    function confirmEnding(str, target) {
        let ending = str.slice(str.length - target.length) === target
        console.log(ending)
        return ending
    }
        confirmEnding("Bastian", "n");