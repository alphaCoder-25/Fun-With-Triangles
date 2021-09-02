const length1 = document.querySelector("#length-1");
const length2 = document.querySelector("#length-2");
const checkHypotenuse = document.querySelector("#check-hypotenuse");
const output2 = document.querySelector("#output-2");


function calculateHypotenuse(){
    const sum = (length1.value * length1.value) + (length2.value * length2.value);
    const hypotenuse = Math.sqrt(sum);
    output2.innerText = "The length of hypotenuse is " + hypotenuse + " cm";
}

checkHypotenuse.addEventListener("click", calculateHypotenuse);