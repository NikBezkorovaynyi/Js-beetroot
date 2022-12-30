let out = document.querySelector('.out')
let btn = document.querySelector('.btn')
let btnMinus = document.querySelector('.btnMinus')

let num = 0;
let num2 = 0;

btn.onclick = () => {
    out.innerHTML = ++num;
 }
btnMinus.onclick = () => {
    out.innerHTML = --num;
 }

 if(out.value <10 && out.value <0){console.log(test);};