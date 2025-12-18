// # Pseudo-codice

// - Diciamo al PC di "contare" da 1 a 100
// - Se il numero a cui è arrivato è multiplo di 3 e non di 5 dovrà stampare "Fizz";
//   - Altrimenti Se il numero a cui è arrivato è multiplo di 5 e non di 3 dovrà stampare "Buzz";
//   - Altrimenti Se il numero a cui è arrivato è multiplo di entrambi dovrà stampare "FizzBuzz";
//   - Altrimenti dovrà stampare i numeri "normali";

for (let number = 1; number <= 100; number++) {
  const isFizz = number % 3 === 0;
  const isBuzz = number % 5 === 0;

  let outputMsg = "";

  let outputR = 0;
  let outputG = 0;
  let outputB = 0;
  let outputColor = "";

  if (isFizz) {
    outputMsg += "Fizz";
    outputR = 255;
  }
  if (isBuzz) {
    outputMsg += "Buzz";
    outputB = 255;
  }
  if (!outputMsg) {
    outputMsg = number;
    outputB = 255;
  }

  outputColor = `color: rgb(${outputR}, ${outputG}, ${outputB})`;
  console.log("%c" + outputMsg, outputColor);
}
