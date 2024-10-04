const currencyEl_One = document.getElementById('currency-one');
const AmountEl_One = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const AmountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//fetch and caluclation 
function calculate(){
const currency_one = currencyEl_One.value;
const currency_two = currencyEl_two.value;

fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
  .then(res => res.json())
  .then(data => {

  const rate = data.rates[currency_two];
  rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

  AmountEl_two.value = (AmountEl_One.value * rate).toFixed(2);
  // console.log(rate);
  });
}

//Event Listners
currencyEl_One.addEventListener('change',calculate);
AmountEl_One.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
AmountEl_two.addEventListener('input',calculate);
swap.addEventListener('click', ()=>{
   const temp = currencyEl_One.value;
   currencyEl_One.value = currencyEl_two.value;
   currencyEl_two.value = temp;
   calculate();
})
calculate();
