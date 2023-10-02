let fs = require ('fs')
let total = 0
fs.readFile( './index.js', () => {
    console.log("..ciclo I/O >")
    setTimeout( print1, 10 )
    setImmediate ( print2)
    console.log("..ciclo I/O <")
}) 
let n= 1
console.log(".principal")

function print1(){
    total = n * 10;
    console.log("....Total 1: ", total)
    n++;
}
function print2(){
    total = n * 10;
    console.log("...Total 2: ", total)
}
