// lev1_1

for (let i = 0; i <= 10; i++) {
    console.log("Hello World  " + i);
}

// lev1_2

let numArr = [];
for (let i = 0; i <= 10; i++) {
    numArr.push(i);
    // console.log(numArr);
}
console.log(numArr);

// lev1_3
let counter = 0;
while (counter < 10) {
    console.log("Hello World " + counter);
    counter++;
}

//lev1_4

let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// lev1_5
var apple1 = { color: "red", size: "big" };
var apple2 = { color: "green", size: "small" };
var apple3 = { color: "yellow", size: "big" };
var apples = [apple1, apple2, apple3];

for (let i = 0; i < apples.length; i++) {
    console.log(apples[i].color + " " + apples[i].size);
}

// lev1_6 
let retArray = [];
for (let i = 1; i <= 100; i++) {
    let image = "image_" + i + ".jpg";
    retArray.push(image);
}
console.log(retArray);


// lev1_7
let i = 1;
do {
    console.log("The number is " + i);
    i++
} while (i <= 5);

//lev1_8 
let even = document.getElementById("even");

let number = 2;
do {
    even.innerHTML += `${number} <br>`;
    number += 2;
} while (number < 20);

// lev1_8

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

let output = document.getElementById("output");
let input = document.getElementById("input");

let addWord = document.getElementById("addWord")

console.log(output, input, addWord);

let wordPrint = () => {
    console.log("test");
    console.log(input.value);
    for (let i = 0; i < words.length; i++) {
        console.log(words[i]);
        if (words[i].length == input.value) {
            output.innerHTML += `${words[i]} <br> `
        }
    }

}

let add = () => {
    console.log("test");
    // output.innerHTML += `${addWord.value}<br>`;
    words.push(addWord.value);
}

// lev2_2

let inputNum = document.getElementById("num");
let outputLoop = document.getElementById("outputLoop");

console.log(num, outputLoop);
let o = "";
let loop = () => {
    console.log("test");
    for (let i = 0; i < inputNum.value; i++) {
        o += "o";
        console.log(o);
    }

    outputLoop.innerHTML = `L${o}p`;
}

// lev2_1

let arrHundret = [];

for (let i = 1; i <= 100; i++) {
    if (i < 10) {
        arrHundret.push("image_00" + i + ".jpg")
        // console.log(arrHundret);
    }
    else if (i < 100) {
        arrHundret.push("image_0" + i + ".jpg");
        // console.log(arrHundret);
    }
    else arrHundret.push("image_100.jpg")
    // console.log(arrHundret);
}
console.log(arrHundret);







