function solution(A, K) {
    let i = K;
    let j = A.length-1;
    let x = [];
    for(i;i>0;i--){
        A.unshift(A[j]);
        A.pop();
    }
    
    return A;
}

var a1 = [1,2,3,4];
var a2 = 3;
console.log(solution(a1, a2));


// https://drive.google.com/open?id=1hbKpLj4F-dMcpXUZOdr26ZCWT_Zq5u9D