function Solution(magazine, note) {
    var map = { };
    var replicable = true;
    for ( var i of magazine ) {
        map[i] = (map[i] || 0) + 1;
    }
    for ( var i of note ) {
        map[i] = (map[i] || 0) - 1;
    }
    for ( var i in map ) {
        if ( map[i] < 0 ) {
            replicable = false;
            break;
        }
    }
    console.log(replicable ? 'Yes' : 'No');
}

var a1 = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
var a2 = [ 'give', 'one', 'grand', 'today' ];

console.log(Solution(a1, a2));

// https://drive.google.com/open?id=1d-JP2bS77SKAzQZeDE9Q13z4LBQReuyC
// https://drive.google.com/open?id=1R275j6EkL-h4XC1rSaGlHe3lgTWtIcYn
// https://drive.google.com/open?id=1EI9Zcx45DhozAc3onTHTDHQwoIwVGbUY