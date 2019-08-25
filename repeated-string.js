function solution(s, n) {
    let num = s.match(/a/g) ? s.match(/a/g).length : 0;
    let az = 0
    let i = n % s.length;
    let j = Math.floor(n / s.length);
    if(num === 0) az = 0;
    else if(i === 0) az = num * j;
    else{
        let d = s.length - i;
        let z = s.slice(0, -d);
        let num2 = z.match(/a/g) ? z.match(/a/g).length : 0;
        az = (num * j) + num2;
    }
    return az;
  }
  
  var a1 = "gfcaaaecbg";
  var a2 = 547602;
  var a3 = "aba";
  var a4 = 10;
  
  console.log(solution(a1, a2));
  console.log(solution(a3, a4));



  // https://drive.google.com/open?id=1l6XJdcWl7GiqABGYb97cwLLgl10p8Fki
  // https://drive.google.com/open?id=1NZjzQRtPdXYITgwYgHZcJ10CX-MoUHkq