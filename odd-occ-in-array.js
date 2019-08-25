function solution(A) {
    let result = 0;
  
    for (let element of A) {
        
        result ^= element
    }

    return result
}

var a1 = [9,3,9,3,9,7,9,10,10,4,4,4,4,4,4];
console.log(solution(a1));


// https://drive.google.com/open?id=1Q_kL6hPEPF9zDb1_800RzHcAa1tjyJtl