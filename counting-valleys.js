function solution(n, s) {
    let y=0, i=0, p=0, a=[], v="n", c = 0;
    for(i;i<n;i++){
        if(s[i]==="U"){
            y++;
        }
        if(s[i]==="D"){
            y--;
        }
        if(y<0){v="v";}
        else v="n";
        a.push(v);
    }
    let vv = a.join('');
    if(vv[0]==="v") c++;
    while(vv){
        if(vv[p]==="v") vv = vv.substring(1);
        else break;
    }
    vv = vv.split('').reverse().join('');
    if(vv[0]==="v") c++;
    while(vv){
        if(vv[p]==="v") vv = vv.substring(1);
        else break;
    }
    let kk = vv.match(/nv+/g);
    if(kk)c+=kk.length;
    return c;
}

var a1 = 10;
var a2 = "UDUUUDUDDD"; 

console.log(solution(a1, a2));




// https://drive.google.com/open?id=1oLsFl1AJiQdt6FU4A8qiRBF4nEX_1DkA
// https://drive.google.com/open?id=1Gns8eVxguIqzUVpa3mEdq8UUdsR2cxRk