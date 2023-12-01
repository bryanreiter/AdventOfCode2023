const fs = require('fs')
const readline = require('readline')
const filePath = './puzzle1input.txt'
const readStream = fs.createReadStream(filePath, 'utf8')
let total = 0;

const rl = readline.createInterface({
    input: readStream,
    output: process.stdout,
});

rl.on('line', (line) => {
    const arr = line.split('')
    let first = null
    let last = null
    for(let i=0;i<arr.length;i++){
        if(isNumber(arr[i])){
            if(first===null){
                first = arr[i]
            } else {
                last = arr[i]
            }
        }
    }

    if(first!==null && last !==null){
        const combined = parseInt(first + last, 10);
        total += combined
    } else if(first!==null && last===null){
        const combined = parseInt(first + first, 10)
        total += combined
    } else if(first===null && last===null){
        total += 0
    }
})

rl.on('close', () => {
    console.log(`Total Sum = ${total}`);
  });



function isNumber(value) {
    return !isNaN(value);
}