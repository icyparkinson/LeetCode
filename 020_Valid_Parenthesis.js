/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let brackets = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    let stack = []
    for (let char of s){
       if (brackets[char]){
           stack.push(brackets[char])
           console.log(`after pushing: ${stack}`)
       } else{
           console.log(`prepop: ${stack}`)
           if (stack.pop() !== char){
               return false
           }
       }
    }
    return (!stack.length)
    
  }

  