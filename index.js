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

document.getElementById("myButton").onclick = function(){
    let color = document.getElementById("color").value;
    document.body.style.background = color;
    document.body.style.color = "white";
}


