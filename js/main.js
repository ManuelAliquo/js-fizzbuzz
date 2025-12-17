// # Pseudo-codice

// - Diciamo al PC di "contare" da 1 a 100
// - Se il numero a cui è arrivato è multiplo di 3 e non di 5 dovrà stampare "Fizz";
//   - Altrimenti Se il numero a cui è arrivato è multiplo di 5 e non di 3 dovrà stampare "Buzz";
//   - Altrimenti Se il numero a cui è arrivato è multiplo di entrambi dovrà stampare "FizzBuzz";
//   - Altrimenti dovrà stampare i numeri "normali";

// con output "interno a if"
for (let number = 1; number <= 15 /*100*/; number++) {
  if (number % 3 === 0 && number % 5 != 0) {
    console.log("Fizz");
  } else if (number % 5 === 0 && number % 3 != 0) {
    console.log("Buzz");
  } else if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(number);
  }
}

console.log("##########################################");

// con output "esterno a if"
let output;

for (let number = 1; number <= 15 /*100*/; number++) {
  if (number % 3 === 0 && number % 5 != 0) {
    output = "Fizz";
  } else if (number % 5 === 0 && number % 3 != 0) {
    output = "Buzz";
  } else if (number % 3 === 0 && number % 5 === 0) {
    output = "FizzBuzz";
  } else {
    output = number;
  }
  console.log(output);
}
