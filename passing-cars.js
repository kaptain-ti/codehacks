
function solution(A) {
    var ones = 0, passing = 0;
    for(var i=A.length-1; i>=0; i--) {
	    if (A[i] === 0){
	        passing += ones;
	        if (passing > 1000000000){
	            return -1;
	        }
	    } else {
	       ones ++;
	    }
    }
    return passing;
    
}


// https://drive.google.com/open?id=1lElHP3jMT2VmTz395Ec1ub8sOfBau6KG


