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

  //AGAIN:

  /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    
    for (let c of s){
        if (map[c]){
            //c is a closing bracket so we need to make sure that stack is not empty and that the last item in stack is a matching pair to c
            if (stack[stack.length-1] === map[c]){
                stack.pop()
            } else{
                return false
            }
        }else{
            stack.push(c)
        }
    }
    
    return stack.length > 0 ? false : true
}

  