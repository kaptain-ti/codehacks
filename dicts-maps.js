function Solution(input) {
    let s = input.split("\n"), a = Number(s[0]), map = {}, i = 0;
    s.shift();
    let k = s.splice(a);
    s = s.map(a => a. split(" "));
    for(i; i < a; i++){
      map[s[i][0]] = s[i][1];
    }
    i = 0;
    for (i; i < k.length; i++){
      if(map[(k[i])]) console.log(k[i] + "=" + map[k[i]]);
      else console.log("Not found");
    }
  
    return "end";
  } 
  
  
  var a1 =`3
  sam 99912222
  tom 11122222
  harry 12299933
  sam
  edward
  harry`
  ;
  
  console.log(Solution(a1));

//   https://drive.google.com/open?id=1Vzu6IGBaZOr5QfALUPue-UDqeanJFZlW
// https://drive.google.com/open?id=1e0W_tBQi9h7diVE7nrqKzC9z_ni4IBoz
  