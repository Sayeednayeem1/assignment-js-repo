 /*
 * .............
 * 1.Problem Number 1 Solution Given below.
 * ......................
*/

function radianToDegree(radian){
    let degree = radian * 57.2958;
    degree = degree.toFixed(2);
    degree = parseFloat(degree);
    const errorMessage = "Please input a valid number";
    if(typeof radian !== "number"){
        return errorMessage;
    }
    else{
        return degree;
    }
}



/*
 * .............
 * 2. Problem Number 2 Solution Given below.
 * .......................
*/

function isJavaScriptFile(String){
    const errorMessage = "Please input a valid string";
    if(typeof String !== "string"){
        return errorMessage;
    }
    else if(String.endsWith(".js")){
        return true;
    }
    else{
        return false;
    }
}


/*
 * .............
 * 3. Problem Number 3 Solution Given below.
 * .....................
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


/*
 * .............
 * 4. Problem Number 4 Solution Given below.
 * ......................
*/


function publicBusFare(passengers){
    let totalPassengers = passengers;
    let canGoUsingBus = 50;
    let canGoUsingMicroBus = 11;
    let remainderAfterBoardingBus = totalPassengers % canGoUsingBus;
    let remainderAfterBoardingMicro = remainderAfterBoardingBus % canGoUsingMicroBus;
    let finalRemainder = remainderAfterBoardingMicro;
    let publicBusTicketPrice = 250;
    let totalPublicBusPrice  = finalRemainder * publicBusTicketPrice;
    const errorMessage = "Please input a valid number";
    if(typeof passengers !== "number"){
        return errorMessage;
    }
    else{
        return totalPublicBusPrice;
    }
}




/*
 * .............
 * 5. Problem Number 5 Solution Given below.
 * ......................
*/

function isBestFriend(object1, object2){
    let firstNameKey = object1.name;
    let firstFriendKey = object1.friend;
    let secondNameKey = object2.name;
    let secondFriendKey = object2.friend;
    const errorMessage = "Please input a valid object";
    if(typeof object1 !== "object" || typeof object2 !== "object"){
        return errorMessage;
    }
    else if(firstNameKey === secondFriendKey && firstFriendKey === secondNameKey){
        return true;
    }
    else{
        return false;
    }
}

/*
 *..............
 * The End
 * ...............
*/