class MinStack{
    constructor(){
        this.stack = []
        this.min = []
    }
    
    push(val){
       //add a value to stack
        this.stack.push(val)
        
       // add a value to min stack
        // if nothing is in the min stack already... add the current value
        if (!this.min.length){
            this.min.push(val)
        //otherwise, set the previous min to a variable called lastMin and then push to the stack whichever is smaller, the lastMin or the current val
        } else{
            let lastMin = this.min[this.min.length-1]
            this.min.push(Math.min(val, lastMin))
        }
    }
    
    //pop from both stacks to stay consistent
    pop(){
        this.min.pop()
        return this.stack.pop()
        
    }
    
    top(){
        return this.stack[this.stack.length-1]
    }
    
    getMin(){
        return this.min[this.min.length-1]
    }
}





/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */