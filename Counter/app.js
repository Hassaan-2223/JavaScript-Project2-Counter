
let btnMinus = document.getElementById("btn-minus");
let btnRest = document.getElementById("btn-reset");
let btnPlus = document.getElementById("btn-plus");
let count = document.getElementById("counter");

let counter = 0;

btnPlus.addEventListener("click",function(){
    counter++;
    count.textContent = counter;
    if(counter>0){
        count.style.color = "green";
    }
})

btnMinus.addEventListener("click",function(){
    counter--;
    count.textContent = counter;
    if(counter<0){
        count.style.color = "red";
    }
})
btnRest.addEventListener("click",function(){
    counter = 0;
    count.textContent = counter;
    count.style.color = "black";
})
