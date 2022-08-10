/*
 * .............
 * 1.Problem Number 1 Solution Given below.
 * ..............
*/

function radianToDegree(radian){
    let degree = radian * 57.2958;
    return degree;
}
let convertedToDegree = radianToDegree(10);
console.log(convertedToDegree);


/*
 * .............
 * 2. Problem Number 2 Solution Given below.
 * ..............
*/

function isJavaScriptFile(fileName){
    if(fileName.endsWith(".js")){
        return true;
    }
    else{
        return false;
    }
}
let inputName = isJavaScriptFile("I am javascript.js");
console.log(inputName);