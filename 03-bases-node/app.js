const { boolean } = require("yargs");
const argv = require('./config/yargs');
const colors = require('colors');
const { crearArchivo } = require("./helpers/multiplicar2");


console.clear();
crearArchivo(argv.base,argv.l)
.then((nombreArchivo)=>console.log(nombreArchivo.rainbow, 'creado'))
.catch(err=>console.log(err));







// console.log(process.argv);
// console.log(argv);

// console.log("base: yargs", argv.base);

/* const [,,arg3] = process.argv;
const [,base] =arg3.split('=');
console.log(base);  */

// const base= 7;

// crearArchivo(base);



/* console.log('=====================');
console.log('=====Tabla del 5=====');
console.log('=====================');


const base = 8;
let salida = '';
for (let i=1 ; i<= 10; i++){    
    salida += `${base}x ${i} = ${base*i}\n`;
}


fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if (err)throw (err);
    console.log(`tabla-${base}.txt`);
})

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`,salida);

console.log(`tabla-${base}.txt creado`) */
