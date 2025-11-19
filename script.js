//Here it is defined the fizzBuzz function,that returns  the fizz Value

console.log("Starting FizzBuzz");
let fizzcount = 0;
let buzzcount = 0;
let fizzbuzzcount = 0;

function fizzBuzz() {
  for (let i = 1; i <= 1000; i++) {                          
    if (i % 3 == 0  && i % 5 == 0 ) {
      console.log("FizzBuzz");
      fizzbuzzcount++;
    } else if (i % 3 == 0) {
      console.log("Fizz");
      fizzcount++;
    } else if (i % 5 == 0) {
      console.log("Buzz");
      buzzcount++;
    } else {
      console.log(i);
    }
  }
console.log("Total Fizz: " + fizzcount);  
console.log("Total Buzz: " + buzzcount);  
console.log("Total FizzBuzz: " + fizzbuzzcount);
}


