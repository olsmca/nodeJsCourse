const { Console } = require('console');
const os = require('os');
const fs = require('fs');
/*
console.log(os.platform());
console.log(os.release());
console.log("free mem: ", os.freemem());
console.log("total mem: ", os.totalmem());
*/
fs.writeFile("./texto.txt", "linea uno", function (err){
    if (err) {
        console.log(err);
    }
    console.log("Archivo creado");
})

console.log("siguiente linea");

fs.readFile("./texto.txt", function (err, data) {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

console.log("ultima linea");