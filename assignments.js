/*
 * .............
 * 1.Problem Number 1 Solution Given below.
 * ..............
*/

function radianToDegree(radian){
    let degree = radian * 57.2958;
    const errorMessage = "Please input a valid number";
    if(typeof radian !== "number"){
        return errorMessage;
    }
    else{
        return degree;
    }
}
let convertedToDegree = radianToDegree(34);
console.log(convertedToDegree);


/*
 * .............
 * 2. Problem Number 2 Solution Given below.
 * ..............
*/

function isJavaScriptFile(fileName){
    const errorMessage = "Please input a valid string";
    if(typeof fileName !== "string"){
        return errorMessage;
    }
    else if(fileName.endsWith(".js")){
        return true;
    }
    else{
        return false;
    }
}
let inputName = isJavaScriptFile("whatever whatweever.pdf");
console.log(inputName);

/*
 * .............
 * 3. Problem Number 3 Solution Given below.
 * ..............
*/

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselPricePerLiter = 114;
    const petrolPricePerLiter = 130;
    const octanePricePerLiter = 135;
    let dieselPrice = dieselPricePerLiter * dieselQuantity;
    let petrolPrice = petrolPricePerLiter * petrolQuantity;
    let octanePrice = octanePricePerLiter * octaneQuantity;
    const errorMessage = "Please input a valid number";
    const total = dieselPrice + petrolPrice+ octanePrice;
    if(typeof dieselQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octanePrice !== "number"){
        return errorMessage;
    }
    else{
        return total;
    }
}
let oilQuantity = oilPrice(1, 34, 2);
console.log(oilQuantity);

/*
 * .............
 * 4. Problem Number 4 Solution Given below.
 * ..............
*/


function publicBusFare(passengers){
    let totalPassengers = passengers;
    let canGoUsingBus = 50;
    let canGoUsingMicroBus = 11;
    let remainderAfter = passengers % canGoUsingBus;
    let remainderAfterMicro = remainderAfter % canGoUsingMicroBus;
    let finalRemainder = remainderAfterMicro;
    let publicBusPrice = 250;
    let totalPublicBusPrice  =finalRemainder * 250;
    const errorMessage = "Please input a valid number";
    if(typeof passengers !== "number"){
        return errorMessage;
    }
    else{
        return totalPublicBusPrice;
    }
}
let passengersFigure = publicBusFare(249);
console.log(passengersFigure);



/*
 * .............
 * 5. Problem Number 5 Solution Given below.
 * ..............
*/

function isBestFriend(value1, value2){
    let firstNameKey = value1.name;
    let firstFriendKey = value1.friend;
    let secondNameKey = value2.name;
    let secondFriendKey = value2.friend;
    const errorMessage = "Please input a valid object";
    if(typeof value1 !== "object" || typeof value2 !== "object"){
        return errorMessage;
    }
    else if(firstNameKey === secondFriendKey && firstFriendKey === secondNameKey){
        return true;
    }
    else{
        return false;
    }
}
let firstObject = {
    name:"Tom",
    friend: "Rock"
};
let secondObject = {
    name: "Rock",
    friend: "Tom"
};
let result = isBestFriend(firstObject, secondObject);
console.log(result); 



