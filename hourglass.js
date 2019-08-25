
function solution(arr) {
    let a = 6, b = 3, c = 3, i = 0, 
    j = 0, k = 0, l = 0, m = 0, 
    n = 0, x = [], y = [], z = [];
    
    for(m;m<4;m++){
      for(k; k < 4; k++){
        i=n;
        for(i;i<b;i++){
          j = l;
          for(j;j<c;j++){
            z.push(arr[i][j]);
          }
        }
        z[3] = z[5] = 0;
        let sum = z.reduce((a,b) => a + b, 0);
        y.push(sum);
        l++,c++,i=n,z=[];
      }
      n++,b++,k=0,l=0,c=3;  
    }
   
    return Math.max(...y);
    
  }
  
  var a1 = 
  [
      [ -9, -9, -9, 1, 1, 1 ],
      [ 0, -9, 0, 4, 3, 2 ],
      [ -9, -9, -9, 1, 2, 3 ],
      [ 0, 0, 8, 6, 6, 0 ],
      [ 0, 0, 0, -2, 0, 0 ],
      [ 0, 0, 1, 2, 4, 0 ]
    ];
  
  console.log(solution(a1));


  // https://drive.google.com/open?id=1ZSAZybrPW6clqOWawrVCzfElDAg1oeBC
  // https://drive.google.com/open?id=1zOfbbXVIg65B0zSPeXXEbsteNrdMVodU
  // https://drive.google.com/open?id=1P5eWxYaITrEpYrqoBBu1X-88b_5RwRot
  // https://drive.google.com/open?id=1cL4ZZnCbjdSP1SjJhzm5xPOQVpSPsrgG