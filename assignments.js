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
    const total = dieselPrice + petrolPrice+ octanePrice;
    return total;
}
let oilQuantity = oilPrice(1, 0, 2);
console.log(oilQuantity);

/*
 * .............
 * 4. Problem Number 4 Solution Given below.
 * ..............
*/


function publicBusFare(totalPassengerrs){
    let 
    
}

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
    if(firstNameKey === secondFriendKey && firstFriendKey === secondNameKey){
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