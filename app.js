const angle1 = document.querySelector("#angle-1");
const angle2 = document.querySelector("#angle-2");
const angle3 = document.querySelector("#angle-3");
const btnTriangle = document.querySelector("#btn-triangle");
const output1 = document.querySelector("#output-1");

btnTriangle.addEventListener("click", function checkTriangle() {
    if( angle1.value + angle2.value + angle3.value === 180 ){
        output1.innerText = "Yes! This is a Triangle";
    } else {
        output1.innerText = "Nope! This is not a Triangle";
    }
});