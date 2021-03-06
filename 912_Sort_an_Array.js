
function merge(left, right){
    let output = []
    
    while (left.length && right.length){
        left[0] < right[0] ? output.push(left.shift()) : output.push(right.shift())

    }

    return [...output, ...left, ...right]
}


function mergeSort(array){
    if (array.length <= 1) return array

    let middle = Math.floor(array.length/2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

let arr = [2, 4, 1, 6, -2, 99, 0]

console.log(mergeSort(arr))



function quickSort(array){
    if (array.length <= 1) return array
    
    let pivot = array[array.length-1]
    
    let left = []
    let right = []
    
    for (let el of array.slice(0, array.length-1)){
        el < pivot ? left.push(el) : right.push(el)
    }
    
    return [...left, pivot, ...right]
}