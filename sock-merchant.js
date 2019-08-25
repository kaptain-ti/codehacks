function solution(n, ar) {
    ar.sort((a,b)=>(a-b));
    let count=0,i=0;
    while(i<n){
        let j=i+1;
        if(ar[i]===ar[j]){
            count++;
            i+=2;
        }
        else i++;
    }
    return count;
  }
  
  var a1 = 7;
  var a2 = [1,2,1,2,1,3,2]; 
  var a3 = 9;
  var a4 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  
  console.log(solution(a1, a2));
  console.log(solution(a3, a4));


//   https://drive.google.com/open?id=1YXLoYPflgOzPlq-vj7DecYkNK-QSKXWE
// https://drive.google.com/open?id=1MOkkftpNUQ1qzuZtGb7TzNJ8cMYXaShG