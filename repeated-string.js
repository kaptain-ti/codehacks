function solution(s, n) {
    let num = s.match(/a/g) ? s.match(/a/g).length : 0;
    let az = 0
    let i = n % s.length;
    let j = Math.floor(n / s.length);
    if(num === 0) az = 0;
    else if(i === 0) az = num * j;
    else{
        let d = s.length - i;
        let z = s.slice(0, -d);
        let num2 = z.match(/a/g) ? z.match(/a/g).length : 0;
        az = (num * j) + num2;
    }
    return az;
  }
  
  var a1 = "gfcaaaecbg";
  var a2 = 547602;
  var a3 = "aba";
  var a4 = 10;
  
  console.log(solution(a1, a2));
  console.log(solution(a3, a4));



/*

Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
Given an integer, n, find and print the number of letter a's 
in the first n letters of Lilah's infinite string.

For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac, 
the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

Function Description
Complete the repeatedString function in the editor below. 
It should return an integer representing the number of occurrences of a 
in the prefix of length n in the infinitely repeating string.

repeatedString has the following parameter(s):
s: a string to repeat
n: the number of characters to consider

Input Format
The first line contains a single string, s. 
The second line contains an integer, n.

Constraints
*  1 <= |s| <= 100
*  1 <= n <= 10^12
*  For 25% of the test cases, n <= 10^6

Output Format
Print a single integer denoting the number of letter a's 
in the first  letters of the infinite string created by repeating s infinitely many times.

Sample Input 0
aba
10
Sample Output 0
7
Explanation 0 
The first n = 10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we print 7 on a new line.

Sample Input 1
a
1000000000000
Sample Output 1
1000000000000
Explanation 1 
Because all of the first n = 1000000000000  letters of the infinite string are a, 
we print 1000000000000 on a new line.

*/