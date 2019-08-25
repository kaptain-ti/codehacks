function solution(N) {
    let x = N.toString(2);
    let c = 0, t = false, i = 0, a = [], max = 0;
    for(i;i<x.length;i++){
        if(x[i]==1 && x[i+1]==0){
            c++;
        }
        if(x[i]==0 && c!=0){
            c++;
        }
        if(x[i]==0 && x[i+1]==1){
            a.push(c-1);
            c = 0;
        }
    }
    if(a.length>0) max = Math.max(...a);
    return max;
    
}

var a1 = 15; 

console.log(solution(a1));




// https://drive.google.com/open?id=1RqPEQ-BK_TZRfhA1lUafwVBKg24cGMSx



