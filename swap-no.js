function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let sw = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j+1);
                sw++;
            }
        }
    
        if (sw == 0) {
            break;
        }
    }

    

    console.log("Array is sorted in " + sw + " swaps." );
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length - 1]);
}

function swap(arr, x ,y){
  let a = arr[x];
  arr[x] = arr[y];
  arr[y] = a;
}


// https://drive.google.com/open?id=1jURtaxmZpgP4GKzssG9QnW1UfcSs7-f-
// https://drive.google.com/open?id=1ieJ9NMCc3HG_g55foZCRRjX-rWLFtMQc
// https://drive.google.com/open?id=1FdC7G_4mp18F8bd25WrsA6XycEr3e5Fv