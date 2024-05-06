// iife functions execute immidieatly 
//  iife creats a private scope to encapsulate variables within it. This pattern is useful for protecting parts of your code from the global scope, which can help prevent variable collisions and provide a measure of security.

// function a(){
//     console.log("function executed")
// }()                                      // will give error to avoid put the function inside ()


(function a(){
    console.log("function executed")
})();                              // ; is needed to stop the invoked function without ; the later part of code won't get executed

(function a(){
    console.log("function executed")
})() 




/*
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
*/