// # Pseudo-codice

// - Diciamo al PC di "contare" da 1 a 100
// - Se il numero a cui è arrivato è multiplo di 3 e non di 5 dovrà dire "Fizz"
// - Se il numero a cui è arrivato è multiplo di 5 e non di 3 dovrà dire "Buzz"
// - Se il numero a cui è arrivato è multiplo di entrambi dovrà dire "FizzBuzz"

for (let number = 1; number <= 30 /*100*/; number++) {
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
