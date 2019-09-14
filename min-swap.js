function Solution(arr) {
    let a = arr.length, b = a - 1, c = 0, d = 1, sw = 0;
    for(c; c < a; c ++){
      if (arr[c] == d){
        d++;
      }
      else {
        swap(arr, d, c);
        sw ++;
        d++;
      }
    }
    return sw;
  }
  
  function swap(arr, x ,y){
    let i = 0, a, b;
    for (i; i < arr.length; i++){
      if(arr[i] == x){
        a = i;
        b = arr[y];
        arr[y] = x
        arr[i] = b;
        break;
      }
    }
  }
  
  var a1 = [1, 3, 5, 2, 4, 6, 7];
  var a2 = [2, 3, 4, 1, 5];
  
  console.log(Solution(a2));
  



// https://drive.google.com/open?id=1TSn4BhLfxWSwXUy8fgV1YbNcvPxQ3OZl
// https://drive.google.com/open?id=1Wj3OSB3__aIRd5EnjJcBO29On03pmquJ
// https://drive.google.com/open?id=1ld8cIq2Exo47VcGs6fIWpvm7kNy982Dh