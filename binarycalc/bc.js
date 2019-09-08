let init = '';
let div1 = document.createElement("div");
div1.id = "res";
let div2 = document.createElement("div");
div2.id = "btns";
document.body.appendChild(div1);
document.body.appendChild(div2);
div1.innerHTML = init;
let arr1 = [
  "btn0",
  "btn1",
  "btnClr",
  "btnEql",
  "btnSum",
  "btnSub",
  "btnMul",
  "btnDiv"
];
let arr2 = ["0", "1", "C", "=", "+", "-", "*", "/"];
for (let i = 0; i < arr1.length; i++) {
  let x = document.createElement("button");
  x.id = arr1[i];
  div2.appendChild(x);
  x.innerHTML = arr2[i];
}
re1 = /[\+\-\*\/]/;
re2 = /[\+\-\*\/]$/;

for (let i = 4; i < arr1.length; i++) {
    document.getElementById(arr1[i]).onclick = function() {
      init = init == '' || re1.test(init) ? init : init.concat(arr2[i]);
      div1.innerHTML = init;
    };
  }

document.getElementById("btn0").onclick = function() {
  init = init == '' || re2.test(init) ? init : init.concat("0");
  div1.innerHTML = init;
};

document.getElementById("btn1").onclick = function() {
  init = init == '' ? "1" : init.concat("1");
  div1.innerHTML = init;
};

document.getElementById("btnClr").onclick = function() {
  init = '';
  div1.innerHTML = init;
};

document.getElementById("btnEql").onclick = function() {
    let sign = re1.test(init) && !(re2.test(init)) ? init.match(re1)[0] : null;
    if (sign != null){
        let op = init.split(re1);
        let total;
        if (sign == '+'){
            total = parseInt(op[0], 2) + parseInt(op[1], 2);
            total = total.toString(2);
        }
        if (sign == '-'){
            total = parseInt(op[0], 2) - parseInt(op[1], 2);
            total = total.toString(2);
        }
        if (sign == '*'){
            total = parseInt(op[0], 2) * parseInt(op[1], 2);
            total = total.toString(2);
        }
        if (sign == '/'){
            total = parseInt(op[0], 2) / parseInt(op[1], 2);
            total = Math.floor(total);
            total = total.toString(2);
        }
        init = '';
        div1.innerHTML = total;
    }
};



