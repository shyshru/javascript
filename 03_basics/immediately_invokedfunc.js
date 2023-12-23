//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// (function chai(){
//     console.log(`DB CONNECTED`);
// })()
// // chai()
// ()()
// //to remove the pollution from global scope we used iife
// (() =>{
//     console.log(`connection established ${name}`);
// })('hari')

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hari')
