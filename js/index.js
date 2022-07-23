// Iteration 1: Names and Input

let hacker1 = "Javier";

console.log("The driver's name is " + hacker1)

let hacker2 = "Pedro";

console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}

else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}

else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
//3.1

let ans = "";

for (let i = 0; i <= hacker1.length - 1; i++){
    
  ans += " " + (hacker1[i].toUpperCase())
}

console.log(ans);

//3.2

let ans1 = "";

for (let i = hacker2.length - 1; i >= 0; i--){
  ans1 += " " + hacker2[i]
 }
 
 console.log(ans1);

 //3.3
 
 while (hacker1 < hacker2){
   console.log("The driver's name goes first.");
   break;
 }
 
 while (hacker1 > hacker2){
   console.log("Yo, the navigator goes first definitely")
   break;
 }
 
 while (hacker1 == hacker2){
   console.log("What?! You both have the same name?")
   break;
 }