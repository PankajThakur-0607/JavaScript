// const form = document.querySelector('form');
// console.log(form);

// // this usecase will give yout empty 
// //  const height = parseInt(document.querySelector('#height').value);


// form.addEventListener('submit' , function(e){
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   // console.log(height)
//   const weight = parseInt(document.querySelector('#weight').value);
//   // console.log(weight)
//   const results = document.querySelector('#results');

//   const bodyDetail = document.querySelector('#body-detail')

//   if(height < 0 || height === '' || isNaN(height)){
//     results.innerHTML = `Please Give the Valid Height ${height}`;
//   }else if(weight < 0 || weight === '' || isNaN(weight)){
//     results.innerHTML = `Please Give the Valid Weight ${weight}`;
//   }else{
//     const bmi = (weight / ((height*height) / 10000)).toFixed(2);

//     // Show the Result 
//     results.innerHTML = `<span>Your BMI is : ${bmi} </span>`;

//     if(bmi < 18.6){
//       bodyDetail.innerHTML = `<span>You are Underweight</span>;`
//     }else if(bmi >= 18.6 && bmi <= 24.9){
//       bodyDetail.innerHTML = `<span>Yor are in Normal Range</span>`;
//     }else{
//       bodyDetail.innerHTML = `<span>You are overWeight</span>`
//     };
//   }
// });


const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit' , function (e) {
  e.preventDefault();

  const  height = parseInt(document.querySelector('#height').value)
  const  weight = parseInt(document.querySelector('#weight').value)

  const result = document.querySelector('#results');
  const  bodyDetail = document.querySelector('#body-detail')
  if(height < 1 || isNaN(height) || height === ''){
    result.innerHTML = `<span> Please Enter Valid Height </span>`
  }else if(weight < 1 || isNaN(weight) || weight === ''){
    result.innerHTML = `<span> Please Enter Valid Weight </span>`
  }else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    result.innerHTML = `<span> The BMI Is : ${bmi} </span>`

    if(bmi < 18.6){
      bodyDetail.innerHTML = `<h3> You are Under weight</h3>`;
    }else if(bmi >= 18.6 && bmi <= 24.9){
      bodyDetail.innerHTML = `<h3> You are in Normal Range </h3>`;
    }else{
      bodyDetail.innerHTML = `<h3> You are Over weight</h3>`;
    }
  }

  
})














