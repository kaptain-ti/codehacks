function Solution(A) {
    var start = 0;

   var currentSum = A[0] + A[1];
   var minAvgSlice = currentSum / 2;
   for (var i=2; i<A.length; i++) {
      currentSum += A[i];
      var newAvg = currentSum / 3;
      if (newAvg < minAvgSlice) {
         minAvgSlice = newAvg;
         start = i-2;
      }

      currentSum -= A[i-2];
      newAvg = currentSum / 2;
      if (newAvg < minAvgSlice) {
         minAvgSlice = newAvg;
         start = i-1;
      }
   }

   return start;
}


var a1 = [4,2,2,6,-1,6,8];

console.log(Solution(a1));



// https://drive.google.com/open?id=1U7GVzeHlxa3ct94iRMM7u14vqdrzkvXj
