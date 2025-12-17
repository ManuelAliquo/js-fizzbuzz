// # Pseudo-codice

// - Diciamo al PC di "contare" da 1 a 100
// - Se il numero a cui è arrivato è multiplo di 3 e non di 5 dovrà stampare "Fizz";
//   - Altrimenti Se il numero a cui è arrivato è multiplo di 5 e non di 3 dovrà stampare "Buzz";
//   - Altrimenti Se il numero a cui è arrivato è multiplo di entrambi dovrà stampare "FizzBuzz";
//   - Altrimenti dovrà stampare i numeri "normali";

for (let number = 1; number <= 100; number++) {
  let output = "";
  if (number % 3 === 0) {
    output += "Fizz";
  }
  if (number % 5 === 0) {
    output += "Buzz";
  }
  if (output === "") {
    output = number;
  }
  console.log(output);
}
