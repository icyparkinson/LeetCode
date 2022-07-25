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