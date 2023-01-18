const path = require('path');
const fs = require('fs');

// console.log(path.join(__dirname, 'q1.html'));

// console.log(process.cwd())

const p1 = path.join(__dirname, 'inp1.txt');
const p2 = path.join(__dirname, 'inp2.txt');

fs.readFile(p1, (err, data) => {

    if(err) throw err;

    arr1 = (data.toString().split('\n'));

    ans.push(...arr1);

    // console.log(ans)

    fs.readFile(p2, (err, data) => {

        if(err) throw err;

        arr2 = (data.toString().split('\n'))

        ans.push(...arr2);

        // console.log(ans)

        ans = ans.sort((a, b)=> a-b.join(' '));

    })

    fs.writeFile('output.txt', ans, (err)=>{

        if(err) throw err;

        console.log("file written succesfully")
    })

})