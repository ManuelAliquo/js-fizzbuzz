// # Pseudo-codice

// - Diciamo al PC di "contare" da 1 a 100
// - Se il numero a cui è arrivato è multiplo di 3 e non di 5 dovrà stampare "Fizz";
//   - Altrimenti Se il numero a cui è arrivato è multiplo di 5 e non di 3 dovrà stampare "Buzz";
//   - Altrimenti Se il numero a cui è arrivato è multiplo di entrambi dovrà stampare "FizzBuzz";
//   - Altrimenti dovrà stampare i numeri "normali";

let output;

for (let number = 1; number <= 30 /*100*/; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    output = "FizzBuzz";
  } else if (number % 5 === 0) {
    output = "Buzz";
  } else if (number % 3 === 0) {
    output = "Fizz";
  } else {
    output = number;
  }
  console.log(output);
}
