function Solution(s) {
    var pairs = 0;
    var subStrings = {};
  
    for(var i = 0; i < s.length; i++){
        for(var j = i; j < s.length; j++){
            let tempSubString = s.substring(i, j+1).split("").sort().join("");
            if(subStrings[tempSubString]){
                subStrings[tempSubString] +=1;
            }else{
                subStrings[tempSubString] = 1;
            }
        }
    }
    for(var keys in subStrings){
        if(subStrings[keys] > 1){
        let temp = (subStrings[keys])*(subStrings[keys]-1)/2;
           pairs += temp;
       }
    }
    return pairs;


    // let substr_map = new Map()
    // for (let i = 0, l = str.length; i < l; i++) {
    //     for (let j = i; j < l; j++) {
    //         let substr = [ ...str.slice(i, j+1) ].sort().join('')
    //         let count = substr_map.get(substr) || 0
    //         substr_map.set(substr, count + 1)
    //     }
    // }

    // return [ ...substr_map.values() ].reduce((a,v) => a += v > 1 ? v * (v - 1)/2 : 0, 0)
}

var a1 = 'ifailuhkqq';

console.log(Solution(a1));

// https://drive.google.com/open?id=1IvLEmTHCDaMoryqKROiEAyr17OoT-iAk
// https://drive.google.com/open?id=1hN2u1GdNb1wI5HWS1zHoqjn_oyRrqxfv
// https://drive.google.com/open?id=1yVw5leZEkIR5OYXBhL2ljJ3UIgl_n389