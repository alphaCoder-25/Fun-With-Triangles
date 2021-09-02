const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkArea = document.querySelector("#check-area");
const output3 = document.querySelector("#output-3");


function calculateArea(){
    const product = base.value * height.value;
    const area = 1/2 * (product);
    output3.innerText = "The area of triangle is " + area + " cm²"
}

checkArea.addEventListener("click", calculateArea);