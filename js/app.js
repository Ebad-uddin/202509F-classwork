

// document.write("ebad uddin ahmed");


// variable

// var (ES-5 ecmascript-5)

//  let, const (ES-6 ecmascript-6)

// datatypes (string, number, boolean, array, object, undefined, null)

// string (alpha,numeric values within single or double quotes) 
// number (positive or negative number/integers) 
// boolean (true or false) 
// array (multiple data stored in a single variable)
// object (entity with properties stored in a single variable w.r.t keys and values)
// undefined (unassigned variable)
// null (null variable)

// var name = "ebad"; // string
// let age  = 28; // number
// let teacher  = true; // boolean
// let subjects  = ['maths', 'english', 'urdu']; // array
// let person  = {
//     name: "ebad",
//     edu : "masters"
// }; // object;



// let f_name; // undefined
// let burger = null;

// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof teacher)
// console.log(typeof subjects)
// console.log(typeof person)
// console.log(typeof f_name)
// console.log(typeof burger)



// document.write(typeof name + "<br>")  // + concatenation sign (+)
// document.write(typeof age + "<br>")
// document.write(typeof teacher + "<br>")
// document.write(typeof subjects + "<br>")
// document.write(typeof person + "<br>")
// document.write(typeof f_name + "<br>")
// document.write(typeof burger + "<br>")


// // synchronous (line by line)
// // arithmatic operators (+,-,*,/,%)


// const a = 8;
// let b = 6;
// b = 9 + b
// console.log(b)
// b = 10 + b

// c = b - a;
// console.log(b)
// console.log("the value of c is " + c)

// d = a * a;
// console.log(d)

// e = b / a;

// console.log(e);

// f = b % a;
// console.log(f);


// // comparison operators

// //  > , < , >= , <= , ==, != (not equal)

// let num1 =  4;
// let num2 = 9;

// console.log(num1 < num2)
// console.log(num1 > num2)
// console.log(num1 >= num2)
// console.log(num1 <= num2)

//  AND, OR, NOT
//  conditional statements (if, if else, if else if, nested if)


/* 

if(condition){

    statement

}


if(condition){
    
    statement

}else{
    
    statement

}

*/

//  num1 =  prompt("Enter number1");
//  num2 = prompt("Enter number2");

// //  condition with one output
// // if(num1 == num2){
// //     document.write( `${num1} is equal to ${num2}` )
// // }

// //  condition with two outputs either true or false (if condition is true then first statment will be printed and if false then second statment will be printed)

// if(num1 >= num2){
//     document.write(`${num1} is equal to ${num2}`)
// }else{
//     document.write(`${num1} is not equal to ${num2}`)
    
//  }


// var role = prompt("Enter your role")

// if(role == 'Admin'){

//     document.write('you can access the system');
    
// }else{

//     document.write('you can not access the system');
    
// }

//  if else if
// if(role == 'Admin'){
    
//     document.write('you can access the system');
    
// }else if(role == 'User'){
    
//     document.write('you have limited rights');
    
// }else{
    
//     document.write('you can not access the system');
// }


/* 
1. take three inputs from user as number and.
2. set totalMarks as 300.
3. calculate percentage.
4. set the percentage criteria like:
    a. if percentage is greater or equal to 90 (Grade-A-One)
    a. if percentage in between 80-89 (Grade-A)
    a. if percentage in between 70-79 (Grade-B)
    a. if percentage in between 60-69 (Grade-C)
    a. if percentage in between 50-59 (Grade-D)
*/

// let number1 = parseInt(prompt('number1'))
// let number2 = parseInt(prompt('number2'))

// document.write(number1 + number2)


// do-while
// let i = 0;
// do{
//     document.write(i  + " Hello world <br>");
//     i++;
// }while(i < 10)


// functions (a block of code that can be reused);

// without parameters

// function fullName(){
//     document.write("Ebad uddin ahmed");
//     document.write("45");
// }
// fullName();
// document.write('<br>')
// fullName();
// document.write('<br>')
// fullName();
// document.write('<br>')
// document.write('break')
// document.write('<br>')
// fullName();
// document.write('<br>')
// fullName();



// function addition(){
//     let a = 9;
//     let b = 7;
//     let result = a + b;
//     document.write(result)
// }

// document.write('<br>')
// addition()


// function with parameters 

function add(a , b){
    let result = a + b;
    document.write(result)
}

function getFullName(firstName, lastName){
    alert(`your FullName is ${firstName} ${lastName}`);
}

// getFullName(prompt("Enter first name"), prompt("Enter  last name")) 

// confirm("are you sure you want to exit the screen?")

// array

let fruits = ["apple", "mango", "orange", "banana", "grapes"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[4]);

// document.write(fruits[0])
// document.write("<br>")
// document.write(fruits[1])
// document.write("<br>")
// document.write(fruits[2])
// document.write("<br>")
// document.write(fruits[3])
// document.write("<br>")
// document.write(fruits[4])
// document.write("<br>")

// for(let i = 0; i < 5; i++){
//     document.write(fruits[i])
//     document.write("<br>")
// }

// // counting starts with 10 and ends on zero

// for(let i = 10; i >= 0; i--){
//     document.write(i)
//     document.write("<br>")
// }

// let colors = new Array()
// colors[0] = "red"
// colors[1] = "blue"
// colors[2] = "green"


// for(let i = 0; i < 3; i++){
//     document.write(colors[i])
//     document.write("<br>")
// }

// multi dimensional array

let marks = [
    [23, 66, 98], // 0
    [32, 64, 87], // 1
    [99, 46, 67]  // 2
]

// document.write(marks[0][1])
// document.write(marks[0][2])

for(let j = 0; j < marks.length; j++){  // outer loop
    
    for(let k = 0; k < marks[j].length; k++){   // inner loop
        document.write(marks[j][k]+ ' ')
    }    
        document.write("<br>")
}


// DOM (Document Object Model)

/*

methods for accessing the html tags or elements by using javascript
document.getElementById (accessing the HTML element by using id)
document.getElementsByClassName (accessing the HTML element by using classname)
document.getElementsByTagName (accessing the HTML element by using tagName)
document.querySelector (you can access the element in this method by using the element like css selector)

*/

let heading = document.getElementById('heading-2');
heading.innerText = "heading-2"
console.log(heading)

let para = document.getElementsByClassName('para');
para[2].innerText = 'Para-3'
console.log(para[2])

for(let i = 0; i < para.length; i++){
    para[i].innerText = `para-${i+1}`
}

let h1 = document.getElementsByTagName('h1');
console.log(h1[2])





