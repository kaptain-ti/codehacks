function solution(n, ar) {
    ar.sort((a,b)=>(a-b));
    let count=0,i=0;
    while(i<n){
        let j=i+1;
        if(ar[i]===ar[j]){
            count++;
            i+=2;
        }
        else i++;
    }
    return count;
  }
  
  var a1 = 7;
  var a2 = [1,2,1,2,1,3,2]; 
  var a3 = 9;
  var a4 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  
  console.log(solution(a1, a2));
  console.log(solution(a3, a4));


/*

John works at a clothing store. 
He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . 
There is one pair of color  and one of color . 
There are three odd socks left, one of each color. 
The number of pairs is .

Function Description
Complete the sockMerchant function in the editor below. 
It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):
n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in . 
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints
Return the total number of matching pairs of socks that John can sell.

Sample Input
n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

Sample Output
3

*/