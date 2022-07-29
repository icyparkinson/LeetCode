function processData(input) {
    let lines = input.split("\n")
    let str = ""
    let last = []

    // console.log(lines)
    
    for (let i = 1; i <= parseInt(lines[0], 10); i++){
        let command = lines[i].split(" ")[0]
        let arg = lines[i].split(" ")[1]
        
        
        
        if (command === "1"){
                str += arg
                last.push(["add", str])
                // console.log(last)
        }
        else if (command === "2"){ 
                let temp = str
                str = str.substring(0, str.length - parseInt(arg))
                let deleted = temp.substring(temp.length-parseInt(arg))
                last.push(["delete", deleted])
        }
                
        else if (command === "3"){
                // console.log("print stuff now")
                console.log(str.charAt(parseInt(arg) - 1))
        }
                
        else if (command === "4" && last[last.length-1][0] === "add"){
                str = str.substring(0, str.length - last.pop()[1].length)
                // console.log("undid an add")
        }
                
        else if (command === "4" && last[last.length-1][0] === "delete"){
                str += last.pop()[1]
                // console.log("undid a delete")
        }
        
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});



////////////////


function performActions(actions){
    let result = []
    let undostack = []
    let redostack = []
    
    for (action of actions){
        
        if (action[0] === "INSERT"){
            result.push(action[1])
            undostack.push(["Inserted", action[1]])
            console.log(`added ${action[1]}`)
        }
        
        if (action[0] === "DELETE"){
            let deletedChar = result.pop()
            undostack.push(["Deleted", deletedChar])
            console.log(`deleted ${deletedChar}`)
        }
        
        if (action[0] === "UNDO"){
            if (undostack[undostack.length-1][0] === "Deleted"){
                 let undidChar = undostack.pop()
                 result.push(undidChar[1])
                 redostack.push(["Deleted", undidChar[1]])
                 console.log(`added back in ${undidChar[1]}`)
                 continue
            }
            
            if (undostack[undostack.length-1][0] === "Inserted"){
                let undidChar = undostack.pop()
                result.pop()
                redostack.push(["Inserted", undidChar[1]])
                console.log(`removed ${undidChar[1]}`)
                continue
            }
          
        }
        
        if (action[0] === "REDO"){
            if (redostack[redostack.length-1][0] === "Inserted"){
                // added char -> undid the addition -> now add it again
                let lastChar = redostack.pop()
                result.push(lastChar[1])
                console.log(`Redo the addition of ${lastChar[1]}!`)
                continue
            }
            
            if (redostack[redostack.length-1][0] === "Deleted"){
                // added char -> deleted -> undid the delete -> now delete it again
                let lastChar = redostack.pop()
                result.pop()
                console.log(`Redo the deletion of ${lastChar[1]}`)
            }
            
        }
    }
    
    console.log(result.join(""))
    return result.join("")
}

// LEETCODE VERSION


var TextEditor = function() {
    this.left = ""
    this.right = ""
    this.pos = 0
    
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    this.left += text
    this.pos += text.length
    return this.left
};

/** 
 * @param {number} k
 * @return {number}
 */

// left = "abc" length = 3, i want substring ab which is from 0, 1
TextEditor.prototype.deleteText = function(k) {
    let n = this.left.length
    if (n - k <= 0){
        this.pos = 0
        this.left = ""
        return n
    } else{
        this.pos = n-k
        this.left = this.left.substring(0, this.pos)
        return k
    }
    
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
    this.pos = this.pos - k <= 0 ? 0 : this.pos - k
    
    this.right = this.left.substring(this.pos) + this.right
    this.left = this.left.substring(0, this.pos)
    
    let len = Math.min(10, this.left.length)
    return this.left.substring(this.pos - len)
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    this.pos = this.pos + k >= this.left.length + this.right.length ? this.left.length + this.right.length : this.pos + k
    
    this.left = this.left + this.right.substring(0, k)
    this.right = this.right.substring(k)
    
    let len = Math.min (10, this.left.length)
    return this.left.substring(this.pos - len)
    
};

var obj = new TextEditor()
console.log(obj.addText("hi there"))


/** 
 * Your TextEditor object will be instantiated and called as such:
 * 
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */



// ULTIMATE TEXT EDITOR (can add, delete, undo, redo, move cursor)

function performActions(actions){
    let left = ""
    let right = ""
    let result = []
    let undo = []
    let redo = []
    let pos = 0
    for (let action of actions){
        let [command, arg] = action
        if (command === "INSERT"){
            left += arg
            pos += arg.length
            undo.push(["INSERTED", arg])
            
            result.push(left + "|" + right)
            console.log(result)
        }
        
        else if (command === "DELETE"){
            let n = left.length
            let numToDel = parseInt(arg)
            pos = n - numToDel <= 0 ? 0 : n - numToDel
            undo.push(["DELETED", left.substring(pos)])
            left = left.substring(0, pos)
            result.push(left + "|" + right)
            console.log(result)
        }
        
        else if (command === "CURSORLEFT"){
            let n = left.length
            let numToShift = parseInt(arg)
            pos = n - numToShift <= 0 ? 0 : pos - numToShift
            right = left.substring(pos) + right
            left = left.substring(0, pos)
            
            result.push(left + "|" + right)
            console.log(result)
        }
        
        else if (command === "CURSORRIGHT"){
            let n = left.length + right.length
            let numToShift = parseInt(arg)
            pos = pos + numToShift >= n ? n : pos + numToShift
            left = left + right.substring(0, numToShift)
            right = right.substring(numToShift)
            
            result.push(left + "|" + right)
            console.log(result)
        }
        
        else if (command === "UNDO"){
            let [lastCom, lastArg] = undo[undo.length-1]
            if (lastCom === "DELETED"){
                left += lastArg
                pos += lastArg.length
                redo.push(["READDED", lastArg])
                undo.pop()
                
                result.push(left + "|" + right)
                console.log(result)
            }
            
            else if (lastCom === "INSERTED"){
                pos = pos - lastArg.length
                left = left.substring(0, pos)
                
                redo.push(["REDELETED", lastArg])
                undo.pop()
                
                result.push(left + "|" + right)
                console.log(result)
                
            }
        }
        
        else if (command === "REDO"){
            let [lastCom, lastArg] = redo[redo.length-1]
            if (lastCom === "READDED"){
                pos = pos - lastArg.length
                left = left.substring(0, pos)
                redo.pop()
                result.push(left + "|" + right)
                console.log(result)
            }
            if (lastCom === "REDELETED"){
                left += lastArg
                pos += lastArg.length
                redo.pop()
                result.push(left + "|" + right)
                console.log(result)
            }
        }
    }
}

let actions = [["INSERT", "hi"], ["INSERT", "bye"], ["UNDO"], ["UNDO"], ["REDO"],["DELETE", 1], ["UNDO"], ["REDO"]]
performActions(actions)