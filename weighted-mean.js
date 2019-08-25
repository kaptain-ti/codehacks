function solution(input) {
    let a = input. split("\n");
    let b = a[1].split(" ").map(Number);
    let c = a[2].split(" ").map(Number);
    let i = 0, aa = 0, bb = 0;
    for(i;i<b.length;i++){
      aa += (b[i] * c[i]);
      bb += c[i];
    }
    let wm = (aa/bb).toFixed(1);
  
    console.log(wm);
    return "end"; //wm is solution
     
  }
  
  var a1 = `5
  10 40 30 50 20
  1 2 3 4 5`;
  
  console.log(solution(a1));



// https://drive.google.com/open?id=1g8MO7LBkFweV2BlQ4kZDDlCz9pJnZtzv
// https://drive.google.com/open?id=1J8M96eZqygJSpYZwHTsFUhb8GvxxRLcD