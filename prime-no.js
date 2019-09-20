function processData(input) {
  //Enter your code here
  input.split("\n").forEach((elem, index) => {
    if (index > 0) {
      console.log(primeCalculator(Number(elem)));
    }
  });
}

function primeCalculator(item) {
  if (item === 1) return "Not prime";

  for (let x = 2; x <= Math.sqrt(item); x++) {
    if (item % x === 0) return "Not prime";
  }

  return "Prime";
}

// https://drive.google.com/open?id=1dd5pq1dXmiq5PDgsAF7o0WTp2Bolyamy
// https://drive.google.com/open?id=1EEh-cBeIyEycP4gR0NMUvPYH9efrih-h
