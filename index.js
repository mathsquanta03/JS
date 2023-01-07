console.log("Hello Mich!");
//window.alert("Welcome Mirabelle!");

console.log(3 * 2);


//Variables
/*

Declaration (var, let, const)
Assignment ( = assignment operator.)

let name = "Sam";

*/



let firstName = "Smith";  //String
let age = 23;  //number
let enrolled = true; //boolean

console.log("Hi, My name is ", firstName);
console.log("I am ", age, "Years old");
console.log("Enrollment status:", enrolled);

document.getElementById("p1").innerHTML = firstName;
document.getElementById("p2").innerHTML = age;
document.getElementById("p3").innerHTML = enrolled;

//Arithmetic operations.
//(*, /, -, +, %)

let itemCost = 40;
/*
itemCost = itemCost - 1;
itemCost = itemCost + 1;
itemCost = itemCost / 2;
itemCost = itemCost * 2;
itemCost = itemCost % 9;
*/

itemCost -= 1
itemCost += 1
itemCost *= 2
itemCost /= 2
itemCost %= 2


console.log(itemCost);

//Accepting user input
//Using window prompt

/*let favouriteColor = window.prompt("Hello, Please enter your favourite color");
console.log(favouriteColor);

document.body.style.background = favouriteColor;
*/

document.getElementById("myButton").onclick = function () {
    let color = document.getElementById("color").value;
    document.body.style.background = color;
    document.body.style.color = "white";
}


//Understanding Functions  and Objects 
//(A deep dive into Objects will be done later)
//Learning to use const keyword
/*
Recap: Two ways of getting user input
        The three data types
     Activity: Write a simple HTML to receive the radius of a circle
     Label, line breaks, input box, button is expected.   

*/
let count = 0
document.getElementById("increase").onclick = () => {
    count+=1
    document.getElementById("count").innerHTML = count;
}

//console.log(comb2)

/*setInterval(() => {
    count+=2;
    document.getElementById("count").innerHTML = count;
}, 1000);
*/

//let, var, const



function drinkWater(name, item){
    //Open lid
    console.log("I am opening the lid");
    //sip directly from the bottle
    //Pour some water in a glass cup
    console.log("Hey ", name, "Please get me a ", item," cup")
    //Sip from the glass cup.
    console.log("I am sipping from the glass cup")
}

//Define sayHello function
function sayHello() {
    console.log("Hello Mirabelle!");
}

sayHello() //Call the function

//drinkWater()

drinkWater("Michael", "glass")

const pi = 3.14;

console.log(pi)



function calculateCircumference () {
    let radius = document.getElementById("radius").value;
    let circumference = 2 * pi * radius;
    document.getElementById("area").innerHTML = circumference;
}


//calculate the area of a triancle
//0.5 * base * height

//calculateAreaOfTriangle

function calculateAreaOfTriangle(base, height){
    let area = 0.5 * base * height;
    console.log(area)
}

//base = 10, height = 15

calculateAreaOfTriangle (10 , 15)


//Assignment
// Write a function to calculate the area of a rectangle
//write a function that prints "Welcome to JavaScript" on the console.


