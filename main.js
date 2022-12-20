const $a = document.getElementById("a");
const $b = document.getElementById("b");
const $total = document.getElementById('total');
const calc =()=>{
    $total.value = Number($a.value) + Number($b.value);
}

$a.addEventListener("keyup", calc, false);
$b.addEventListener("keyup", calc, false);


const input1 = document.querySelector("input[name=input1]");
const input2 = document.querySelector("input[name=input2]");
const result = document.querySelector("input[name=result]");
const calc2 = ()=>{
    result.value = Number(input1.value) + Number(input2.value);
}

input1.addEventListener("keyup", calc2, false);
input2.addEventListener("keyup", calc2, false);


// // const $total = $quanty + $price;
// const $text_box = document.getElementById('text_box');
// $quanty.addEventListener('input', 'total', function(){
//     $total.textContent=this.value;
//     $text_box.textContent=this.value;
// })