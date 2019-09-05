function Solution(input) {
    let s = input.split("\n"), a = s[0], b = s[1].split(" "), 
    c = s[2].split(" ").map(Number), arr =[], i = 0;
    for(i; i<c.length; i++){
      let x = new Array(c[i]);
      x = x.fill(b[i]);
      arr = arr.concat(x);
    }
    let n = arr.length;
  
    return Qr(n, arr);
  
  } 
  
  function Qr(n, arr) {
    let x = n, y = arr.map(Number).sort((a,b) => (a-b));
    let i = x % 2 == 0, j;
    let a, b, c;
    b = med(y);
    if (i) {
        j = y.splice(x / 2);
        a = med(y);
        c = med(j);
    }
    else {
        j = y.splice(x / 2);
        j.shift();
        a = med(y);
        c = med(j);
    }
  
    return (c - a).toFixed(1);
  
  } 
  
  function med(arr) {
    let x = arr.length, a = x % 2 == 0, b = x / 2, c = (x - 1) / 2, i;
    if (!a) i = arr[c];
    else i = (arr[b] + arr[b -1]) / 2;
  
    return i   
  }
  
  var a1 = `6
  6 12 8 10 20 16
  5 4 3 2 1 5`;
  
  console.log(Solution(a1));


//   https://drive.google.com/open?id=1TnUW1hGsXJEYMxRCcZa05Gv-yaA79-Pl
// https://drive.google.com/open?id=1f9peHRuuWxG90nbkTHOUO63bye9qtYNM
// https://drive.google.com/open?id=1dpDaXoo-_cJMTgUq7QdtYtuv6MVocZ-E
  