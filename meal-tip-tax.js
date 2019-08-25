function solution(meal_cost, tip_percent, tax_percent) {
  let mc = meal_cost, tp = tip_percent/100 * mc, xp = tax_percent/100 *mc;
  return Math.round(mc + tp + xp);
}

var a1 = 12.00;
var a2 = 20;
var a3 = 8;

console.log(solution(a1, a2, a3));


// https://drive.google.com/open?id=1Aj13zyPc3P8RRHalLxcht4_ONzWho7FG
// https://drive.google.com/open?id=1dRrVEsPQZWZDFSMaUjtVKsknhM4k9Io8