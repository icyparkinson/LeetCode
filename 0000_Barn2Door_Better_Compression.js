'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'betterCompression' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function betterCompression(s) {
    let l = s.length-1
    let r = s.length-1
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let spots = 1
    let alpha = Array(26).fill(0)
    
    while (r >= 0){
        let c = s[r]
        if (!letters.includes(c)){
            r--
            spots++
        }else{
            console.log(c)
            alpha[c.charCodeAt() - "a".charCodeAt()] += Number(s.slice(r+1, r+spots))
            r--
            spots = 1
        }
    }
    
    let str = ""
    for (let i = 0; i < alpha.length; i++){
        if (alpha[i] > 0){
            str+= String.fromCharCode(i + 97) + alpha[i]
        }
    }
    console.log(str)
    return str

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = betterCompression(s);

    ws.write(result + '\n');

    ws.end();
}
