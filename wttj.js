/*
Name:        Muhtasim Al-Farabi
Course:      CSc 337
File:        index.html
Description: This file contains the necessary JavaScript functions for PA5.
            These functions have been linked up with the HTML elements to 
            execute them on click/change/input.
  
 */

/**
 * This function takes in a value from the DOM and displays it in 
 * the desired spot
 * @param {string} val : value from the tag
 */

function change(val) {
    let result = document.getElementById("result");
    result.innerHTML = val;
}

/**
 * This function returns text from a label
 * @return {any} innerHTML of id="result"
 */
function returnChange() {
    return document.getElementById("result").innerHTML;
}

/**
 * This function prints out the caesar ciphered text
 * onto the top-right div
 * 
 * */

function topText() {
    var text1 = document.getElementById("input-box").value.toUpperCase();
    var val = returnChange();
    
    outText = caesarCipher(val, text1);
    document.getElementById("top-text").innerText = outText;
}
/**
 * This function takes in a string (numeric) which determines the number of
 * position a character will shift by and another string which contains the
 * plain text and returns a ciphered string
 * @param {string} shift : the number by which the character needs to be shifted
 * @param {string} inputText : plain text
 * @return {string} ciphered string
 */
function caesarCipher(shift, inputText) {
    var outText = "";

    // loops through and shift each char by shift
    // 
    for (i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i).toUpperCase() !=
            inputText.charAt(i).toLowerCase()) {
            ascii = inputText.charCodeAt(i);
            temp = ascii + parseInt(shift);
            if (temp > 90) {
                extra = temp - 90;
                temp = 64 + extra;
            }
            outAscii = String.fromCharCode(temp);
            outText = outText + outAscii;
        }
        else {
            outText = outText + inputText.charAt(i);
        }
    }
    return outText;
}
/**
 * This function generates a table using array elements
 * @param {Array} arr : a global Array variable which has all the letters from A-Y
 */
function generateTable(arr) {
    table = document.getElementById("table");
    for (i = 0; i < 5; i++) {
        row = table.insertRow(table.length);
        for (j = 0; j < 5; j++) {
            cell = row.insertCell(j);
            cell.style.border = "solid 2px red";
            cell.innerHTML = arr[j + i * 5];
        }
    }
}

/**
 * This function shuffles an array using Fisher-Yates' shuffling method
 * @param {Array} arra
 */
function shuffle(arra) {

    // Fisher-Yates shuffle

    for (i = 24; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [arra[i], arra[j]] = [arra[j], arra[i]];
    }
    
    return arra;
}

// global letter array which will change

let arr = ['A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y'];
// global letter array which will not change

let defaultArr = ['A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y'];

/**
 * This function loads up the default table setup when the page loads
 * */
function onLoad() {
    generateTable(arr);
}

/**
 * This function performs the square cipher, updates the table according to the
 * newly ciphered array, and updates the existing text on the bottom right of
 * the screen.
 * */

function tableUpdate() {
    // resets the table
    document.getElementById('table').innerHTML = "";
    // shuffles the table
    newArr = shuffle(arr);
    generateTable(newArr);

    var outText = bottomText();
    var newOutText = "";
    // loops through to check the position of the character in the
    // the plaintext and assigns the char at the new position into a new var

    for (i = 0; i < outText.length; i++) {
        elem = outText.charAt(i);
        if (elem.toUpperCase() !=
            elem.toLowerCase()
            && elem != 'Z') {
            index = defaultArr.indexOf(elem);
            temp = newArr[index];
            newOutText = newOutText + temp;   
        }
        else {
            newOutText = newOutText + elem;
        }   
    }
    
    document.getElementById("bottom-text").innerText = newOutText;
}

/**
 * This function prints out the ciphered text in the bottom-right div
 * */

function bottomText() {
    
    var inputText = document.getElementById("input-box").value.toUpperCase(); 
    document.getElementById("bottom-text").innerText = inputText;
    return inputText;
}
