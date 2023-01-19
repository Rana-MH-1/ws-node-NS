const fs = require('fs')

//console.log(fs);
console.log('Before Reading');
//const doc =  fs.readFileSync('./doc.txt','utf-8')
//read a file
fs.readFile('./doc.txt','utf-8',(err,data)=>{
    //console.log(data)
    /* fs.writeFile('./doc2.txt','hello',(err,data)=>{
        console.log('created succ');
    }) */
    fs.appendFile('./doc2.txt',data,(err)=>{
        console.log(' doc2 updated succ');
    })
})

console.log('After Reading');