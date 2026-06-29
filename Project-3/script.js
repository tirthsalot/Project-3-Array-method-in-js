let arr = [];

let array = document.getElementById("array");
let result = document.getElementById("result");

function displayArray() {
    array.innerHTML = "[" + arr.join(", ") + "]";
}

// Push
function pushItem() {

    let value = document.getElementById("value").value;

    if (value == "") {
        alert("Enter a value");
        return;
    }

    arr.push(value);

    displayArray();

    document.getElementById("value").value = "";
}

// Pop
function popItem() {

    if (arr.length == 0) {
        alert("Array is Empty");
        return;
    }

    result.innerHTML = "Removed : " + arr.pop();

    displayArray();
}

// Shift
function shiftItem() {

    if (arr.length == 0) {
        alert("Array is Empty");
        return;
    }

    result.innerHTML = "Removed : " + arr.shift();

    displayArray();
}

// Unshift
function unshiftItem() {

    let value = document.getElementById("value").value;

    if (value == "") {
        alert("Enter a value");
        return;
    }

    arr.unshift(value);

    displayArray();

    document.getElementById("value").value = "";
}

// Sort
function sortItem() {

    arr.sort();

    displayArray();
}

// Reverse
function reverseItem() {

    arr.reverse();

    displayArray();
}

// Slice
function sliceItem() {

    result.innerHTML = arr.slice(1,3);
}

// Splice
function spliceItem() {

    arr.splice(1,1);

    displayArray();
}

// IndexOf
function indexOfItem() {

    let value = document.getElementById("value").value;

    result.innerHTML = arr.indexOf(value);
}

// Includes
function includesItem() {

    let value = document.getElementById("value").value;

    result.innerHTML = arr.includes(value);
}

// Join
function joinItem() {

    result.innerHTML = arr.join(" - ");
}

// Length
function lengthItem() {

    result.innerHTML = "Length = " + arr.length;
}

// Clear
function clearArray() {

    arr = [];

    displayArray();

    result.innerHTML = "Array Cleared";
}

displayArray();