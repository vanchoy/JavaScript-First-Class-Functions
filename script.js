// Example of how functions can accept other functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];
// We created a generic function which loops over an input array. 
// Then we have it a function as input which is used to calculate something based on each element of the array.
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
        // fn is a callback function, and it will be called here when we want to push a new element into our array.
    }
    return arrRes;
}

// Callback functions - functions that we pass into functions that will then call them later.
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHearthRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHearthRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
