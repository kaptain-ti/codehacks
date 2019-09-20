
function Solution(S, P, Q) {
    let a = '', b = [];
    for(let i = 0; i < P.length; i++){
        a = S.slice(P[i], Q[i] + 1);
        if (a.includes('A')) b.push(1);
        else if (a.includes('C')) b.push(2);
        else if (a.includes('G')) b.push(3);
        else b.push(4);
    }
    return b;
}


var a1 = 'AC';
var a2 = [0,0,1];
var a3 = [0,1,1];

console.log(Solution(a1,a2,a3));



// https://drive.google.com/open?id=1Rm_HqsnTPOmFIohC8KMDENsitojhyxEy
// https://drive.google.com/open?id=1tdhZbzfx56ND99uEhpaG0moBwGvJlHGd