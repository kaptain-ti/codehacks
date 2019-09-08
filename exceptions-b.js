class Calculator{
    power(n,p) {
        try {
            if ((n < 0) || (p < 0)) throw "n and p should be non-negative";
            else return Math.pow(n, p);
        }
        catch (err) {
            return err;
        } 
    }
}
//Write your code here

function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-->0){
        var num = (readLine().split(" "));
        try{
            var n=parseInt(num[0]);
            var p=parseInt(num[1]);
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }

    }
}



// https://drive.google.com/open?id=1EHSFVhZ9xDyWHqMPfxrlx1lkTcO5ra5P
// https://drive.google.com/open?id=1x3gfhJi3-EQOt8Q-wrZdVCzkaiWkY7Kf