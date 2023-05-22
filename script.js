// find the largest among three numbers

let num1 = +prompt("enter first number")
let num2 = +prompt("enter second number")
let num3 = +prompt("enter third number")
let largest

//check the condition

if ((num1 >= num2 && num1 >= num3 ) ) {
    largest = num1;

}
else if(num2 >= num1 && num2 >= num3){
    largest = num2
}
else{
    largest = num3;
}

//display the result 
alert(`The larges number is ${largest} `)


