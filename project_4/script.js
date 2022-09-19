const currencyElem_1 = document.getElementById("currency-one");
const amountElem_1 = document.getElementById("amount-one");
const currencyElem_2 = document.getElementById("currency-two");
const amountElem_2 = document.getElementById("amount-two");

const rateElem = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and update the DOM
function calculate() {
    const currency_1 = currencyElem_1.value;
    const currency_2 = currencyElem_2.value;
    fetch(`https://v6.exchangerate-api.com/v6/45e547d04b96057f843386c8/latest/${currency_1}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency_2]
            rateElem.innerHTML = `1 ${currency_1} = ${rate} ${currency_2}`
            amountElem_2.value = (amountElem_1.value * rate).toFixed(2)
        });

}

// Event listeners
currencyElem_1.addEventListener("change", calculate);
amountElem_1.addEventListener("input", calculate);
currencyElem_2.addEventListener("change", calculate);
amountElem_2.addEventListener("input", calculate);

swap.addEventListener("click", () => {
    const temp = currencyElem_1.value;
    currencyElem_1.value = currencyElem_2.value;
    currencyElem_2.value = temp
    calculate();
});

calculate();