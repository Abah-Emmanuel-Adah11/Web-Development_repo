let unitPrice = document.querySelector(".unitClass");
let qty = document.querySelector(".qty");
let total = document.querySelector(".total");

total.addEventListener("click", multiplication);
function multiplication() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a * b;
    total.textContent = result.toString();
}