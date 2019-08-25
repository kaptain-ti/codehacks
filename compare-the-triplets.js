function solution(a, b) {
    let x = 0, y = 0, i = 0, ar = [];
    for(i; i < a.length; i++){
      if(a[i] > b[i]) x++;
      else if(a[i] < b[i]) y++;
    }
    ar.push(x);
    ar.push(y);
    return ar;
  }
  
  var a1 = [5,6,7];
  var a2 = [3,6,10];
  var a3 = [17,28,30];
  var a4 = [99,16,8];
  
  console.log(solution(a1, a2));
  console.log(solution(a3, a4));



  // https://drive.google.com/open?id=1HJBmR_kBUlNrDiNodboFS20gY1BEciay
  // https://drive.google.com/open?id=1evMpCROaoqVTFEy0TUxBgEMgziRgNxbl
  // https://drive.google.com/open?id=13FVtUW-ZF5RXR_oxHhCpe8lT4u1eJKRp