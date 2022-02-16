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
let n = "0";
let loop = () => {
    console.log("test");
    for (let i = 0; i < inputNum.value; i++) {
        o += "o";
        console.log(o);
    }

    outputLoop.innerHTML = `L${o}p`;

    if (Number(inputNum.value) == 0) {
        outputLoop.innerHTML = `Sorry, 0 is not allowed`
    }
    else if (Number(inputNum.value) % 2 !== 0) {
        for (let i = 0; i < inputNum.value; i++) {
            n += "0";
            console.log(n);
            outputLoop.innerHTML = `L${n}p`;
        }
    }
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


// lev3_1

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `

// console.log(text);

let separate = (str) => {
    let tempArr = str.split("");
    console.log(tempArr);
    for (let i = 1; i <= tempArr.length; i++) {
        if (i % 100 == 0) {
            tempArr[i] = " - " + i / 100 + " of gesamte-nachrichten";
            console.log(tempArr[i]);
        }
    }
    console.log(tempArr);
}
separate(text)

//lev3_2

let numArr2 = [5, 22, 15, 100, 55];

let divisor = document.getElementById("divisor");

let div = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        for (let j = 2; j < nums[i]; j++) {
            // console.log(nums[i] / j);
            if (Number.isInteger(nums[i] / j)) {
                console.log(nums[i] + " ist teilbar durch " + j);
                divisor.innerHTML += `${nums[i]} is divisible by ${j} <br>`
            }
        }
    }
}

div(numArr2);














