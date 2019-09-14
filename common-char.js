function Solution(s1, s2) {
    var map = {};
    var replicable = false;
    for (var i of s1) {
       if(!map[i]) map[i] = (map[i] || 0) + 1;
    }
    for (var i of s2) {
     if(map[i] < 2) map[i] = (map[i] || 0) + 1;
    }
    for (var i in map) {
        if (map[i] > 1) {
            replicable = true;
            break;
        }
    }
    return(replicable ? 'YES' : 'NO');
}

var a1 = 'hello';
var a2 = 'wrdjj';

console.log(Solution(a1, a2));


// https://drive.google.com/open?id=1jr4r7FKCqAGflr_1_WLEOtI3UDDHXG4C
// https://drive.google.com/open?id=1C8IP-cVcxBVrFf8Im81e7KYraExQe9_T