function solution(input) {
  input = input.split("\n").pop();
  input = input.split(" ").map(Number);

  let a = input.length,
    b = input.length % 2 == 0,
    z = input.slice(0),
    c = input.sort((a, b) => a - b),
    mode = 0,
    aa = 1,
    bb = 0,
    cc,
    d = new Set(input),
    e = d.size == input.length;
  let sum = z.reduce((a, b) => a + b, 0);

  let mean = (sum / a).toFixed(1);
  let median = b ? (c[a / 2] + c[a / 2 - 1]) / 2 : c[(a - 1) / 2];
  if (e) mode = Math.min(...input);
  else {
    for (let i = 0; i < c.length; i++) {
      for (let j = i; j < c.length; j++) {
        if (c[i] == c[j]) bb++;
        if (aa < bb) {
          aa = bb;
          cc = c[i];
        }
      }
      bb = 0;
    }
    mode = cc;
  }

  console.log(mean);
  console.log(median);
  console.log(mode);

  return "end";
}

var a1 = `10
  64630 11735 14216 99233 14470 4978 73429 38120 51135 67060`;

console.log(solution(a1));

// https://drive.google.com/open?id=1UFMlPbUy8Ccd3ZSfDp7uCq2viEm4EDvo
// https://drive.google.com/open?id=11anZrcOKS9q_RYDBPBJNgBlkHYUqbk3I
// https://drive.google.com/open?id=1YyEvyi_3QzZxatWhZKv9o9YEGvYo_E8r
