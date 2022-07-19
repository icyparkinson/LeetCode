/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    if (rooms.length === 1) return true
    if (rooms[0].length === 0) return false
    let visited = new Set()
    visited.add(0)
    let stack = rooms[0]  //[1, 3]
    
    while (stack.length > 0){
        let room = stack.shift()
        if (visited.has(room)) continue
        else{
            visited.add(room)
            
            for (let i = 0; i < rooms[room].length; i++){
                stack.push(rooms[room][i])
            }
            
        }
    } 
    // console.log(visited.size)
    // console.log(rooms.length)
    return visited.size === rooms.length ? true : false
};