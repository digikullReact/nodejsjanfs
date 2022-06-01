require('dotenv').config() //just like import

// Global variables in node js 
//console.log(globalThis);
const keys=Object.getOwnPropertyNames(globalThis);

//console.log(keys);

//console.log(process);  // process.env --->environment variables
// process.argv // array that contains the command line arguments passed during script execution

//console.log(process.env);
console.log(process.env.URL)