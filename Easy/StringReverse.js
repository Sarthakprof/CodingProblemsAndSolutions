//In this program
//We will Reverse a String
//Following steps will followed
//1. Split the string into array
//2. Reverse the array
//3. Join the array back 
//4. Pring the reversed string
//Example- reverseAString(Hello) ==== 0lleH

function reverseAString(str){
     str = str.split('').reverse().join('');
     return str;
}

var reversed = reverseAString("Hello");
console.log(reversed);

