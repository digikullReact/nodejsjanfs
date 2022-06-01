//console.log(module);

function add(i,j){

    return i+j;
}


function subtract(i,j){

    return i-j;
}

function multiply(){
    return "hello there"
}
//Es6 module export and import 
// import sometghing from something  ,export default export const 

// Common js module system  -->used by node js

module.exports=[
subtract,
add,
 multiply

] // i am exporing my add function 

//console.log(module);