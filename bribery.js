function minimumBribes(q) {
    let i = 0, b = 0, arr = [], n = q.length, z = true;
    for (i; i < q.length; i++) {
        let j = i + 1;
        if ((q[i] - j) > 2) {
            z = false;
            break;
        }
    }

    if (z) {
        let x = 1, y = 0;
        while (arr.length < n) {
            if (q[y] == x) {
                arr.push(q[y]);
                q.splice(y, 1);
                x++;
                y = 0;
            }
            else {
                y++;
                b++;
            }
        }
        console.log(b);
    }
    else console.log("Too chaotic");
}



// https://drive.google.com/open?id=1kWICZwHaQ3IWiaYv2mWRRoNVDnVaCY94
// https://drive.google.com/open?id=1S57sPI03DFVIhtSJvg2jkYBbyuMkT2SV
// https://drive.google.com/open?id=1jVdAlexsRrsBNYUjHggYx8YdV2nKQaa9