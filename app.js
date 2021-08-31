const angles = document.querySelectorAll(".angles");
const btnTriangle = document.querySelector("#btn-triangle");
const output1 = document.querySelector("#output-1");

console.log(angles);

function checkTriangle(){

    const sum = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
    if( sum === 180 ){
        output1.innerText = "Yes! This is a Triangle";
    } else {
        output1.innerText = "Nope! This is not a Triangle";
    }
}

btnTriangle.addEventListener("click", checkTriangle);