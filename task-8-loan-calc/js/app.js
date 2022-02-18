const form = document.querySelector("#loan-form");
// form.addEventListener('submit', calculateResults);

const amount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");

const monthlyPayment = document.querySelector("#monthly-payment");
const totalAmount = document.querySelector("#total-payment");
const totalInterest = document.querySelector("#total-interest");
const loader = document.querySelector("#loader");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(amount.value === "" || interest.value === "" || years.value === "") {
        alert("Please fill in all fields");
    }

    loader.style.display = "block";
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);

    const amountValue = parseFloat(amount.value);
    const interestValue = parseFloat(interest.value);
    const yearsValue = parseFloat(years.value);

    const oneYear = yearsValue * 12;
    const resAmount = amountValue / 100 * interestValue + amountValue;
    const resInterest = amountValue / 100 * interestValue;
    const resYears = resAmount / oneYear;

    monthlyPayment.innerHTML = resYears.toFixed(2);
    totalAmount.innerHTML = resAmount.toFixed(2);
    totalInterest.innerHTML = resInterest.toFixed(2);

});