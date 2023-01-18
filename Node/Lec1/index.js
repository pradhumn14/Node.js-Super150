const fs = require("fs")

const path = require('path');

console.log(__dirname);

console.log(process.cwd());



// console.log(fs);

// fs.readFile('q1.html', {
//     encoding: 'utf-8',
//     flag: 'r'
// }, (err, data)=>{

//     if (!err) {
//         console.log(data)
//     } else{
//         console.log(err)
//     }

// })

let count = 0;

// function cb(err, data) {

//     count += 1;

//     if (count <= 3) {
//         if (!err) {
//             console.log(data)
//         } else {
//             console.log(err)
//         }
//         fs.readFile ('q' + (count + 1) + '.html', 'utf-8', cb)
//     }
// }

// fs.readFile('q1.html', 'utf-8', cb);

function cb(err, data) {
    if (!err) {
        console.log(data)
    } else {
        console.log(err)
    }
}

// for (let i = 1; i <= 3; i++) {
//     fs.readFile('q' + i + '.html', 'utf-8', cb)
// }