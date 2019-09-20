function Solution(N, A) {
    let max = 0;
    let counters = Array(N).fill(max);
    let maxCounter = 0;

    for (let op of A) {
        if (op <= N && op >= 1) {
            maxCounter = 0;
            if (++counters[op - 1] > max) {
                max = counters[op - 1];
            }
        } else if(op === N + 1 && maxCounter === 0) {
            maxCounter = 1;
            for (let i = 0; i < counters.length; i++) {
                counters[i] = max;   
            }
        }
    }

    return counters;
}

var a1 = 5;
var a2 = [3, 4, 4, 6, 1, 4, 4];

console.log(Solution(a1, a2));




// https://drive.google.com/open?id=19bgKBtwyjIHvNlpOxh6HBcfc19ZfZ9-a
// https://drive.google.com/open?id=1vCS23HJV9KossnDvsanRfA0UQ7p8olFM