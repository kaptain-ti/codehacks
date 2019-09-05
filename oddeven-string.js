function Solution(input) {
    let a = input.split("\n");
    let n = a[0], j=0;
    a.shift()
    for (j;j<a.length;j++) {
        str(a[j]);
    }
    return "end";
  } 
  
  function str(s) {
    let i = 0, sl = s.length, a1 = [], a2 = [], st = '';
    for (i; i < sl; i++) {
        if (i % 2 == 0) {
            a1.push(s[i]);
        }
        else a2.push(s[i]);
    }
    st = a1.join('') + " " + a2.join('');
    console.log(st);
  }
  
  var a1 = `2
  Hacker
  Rank`;
  
  console.log(Solution(a1));


//   https://drive.google.com/open?id=1ysWci6-RC1d39EBC7eequufrMDPWDbOw
// https://drive.google.com/open?id=1x9OMzbNJvoc_xRVN_S6unB-dYYtnWsHZ