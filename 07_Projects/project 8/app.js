
const apiURL = 'https://2024-03-06.currency-api.pages.dev/v1/currencies';

const  dropdown = document.querySelectorAll(".dropdown select");
const  btn = document.querySelector('form button');
const  fromCurr = document.querySelector('.from select');
const  toCurr = document.querySelector('.to select');
const msg =  document.querySelector('.msg');


for (let select of dropdown) {
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === 'from' && currCode === 'USD' ){
            newOption.selected = "selected"
        }else if(select.name === 'to' && currCode === 'INR'){
            newOption.selected = "selected";
        }
        select.append(newOption);
        // console.log(newOption);
    }
    select.addEventListener('change' , (e)=>{
        updateFlag(e.target)
    });
}

const updateFlag = (element) => {
    // console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}


btn.addEventListener('click' , async (e)=> {
e.preventDefault();
let amount = document.querySelector(".amount input");
 let amtVal = amount.value;
 if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amount.value = "1";
 }

let fromCurrency = fromCurr.value.toLowerCase();
console.log(fromCurrency);
let toCurrency = toCurr.value.toLowerCase();


console.log(toCurrency);
const URL = `${apiURL}/${fromCurrency}.json`;


let response = await fetch(URL)

let data = await response.json(); 
console.log(data);

let rate = data[fromCurrency][toCurrency];
console.log(rate);
let finalAmount = amount.value * rate;
console.log(finalAmount.toFixed(3));

msg.innerText = `The Amount is ${finalAmount.toFixed(3)}`



})