function solution(c) {
    let i=0, x=0;
    while(i<c.length){
     let a=i+1, b=i+2;
     if(c[a]===1){
         i+=2;
         x++;
     }
     else if(c[a]===0 && c[b]===0){
         i+=2;
         x++;
     }
     else if(c[a]===0 && c[b]===1){
         i++;
         x++;
     }
     else if(c[a]===0 && c[b]===undefined){
         i++;
         x++;
     }
     else i++;
    }
    return x;
 }
 
 var a1 = 6;
 var a2 = [0,0,0,1,0,0]; 
 
 console.log(solution(a2));




//  https://drive.google.com/open?id=1jV-YUZz8C4IycVWlMeRKgxjH865QZpLx
// https://drive.google.com/open?id=1HyD0vOGMt7vE6NEvgVPdET9sb9y3zd71
// https://drive.google.com/open?id=1bq8-22ytAGaraXr1eSyb1OW5b94Al9YI