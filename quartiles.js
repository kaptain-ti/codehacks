function Solution(input) {
    let s = input.split("\n"),j;
    let x = s[0], y = s[1].split(" ").map(Number).sort((a,b) => (a-b));
    let i = x % 2 == 0;
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
  
    console.log(a);
    console.log(b);
    console.log(c);
  
    return "end";
  
  } 
  
  function med(arr) {
    let x = arr.length, a = x % 2 == 0, b = x / 2, c = (x - 1) / 2, i;
    if (!a) i = arr[c];
    else i = (arr[b] + arr[b -1]) / 2;
  
    return i   
  }
  
  var a1 = `9
  3 7 8 5 12 14 21 13 18`;
  
  console.log(Solution(a1));


//   https://drive.google.com/open?id=15E5qE-PMPewkz45hjrrdglyt0e-bzsa5
// https://drive.google.com/open?id=13tzIjManIJV44cjCJWGiHQwaM_KUyQ5M
  