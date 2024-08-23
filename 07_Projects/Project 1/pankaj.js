
const  buttons = document.querySelectorAll('.button');
const  body = document.getElementsByTagName('body')
console.log(body);
buttons.forEach((button)=> {
        // console.log(button);
        button.addEventListener('click' , (e) => {
            // e.preventDefault();
            console.log(e.target.id);
            switch (e.target.id) {
                case 'yellow':
                    body[0].style.backgroundColor = e.target.id;
                    break;
            
                case 'grey':
                    body[0].style.backgroundColor = e.target.id;
                    break;
            
                case 'green':
                    body[0].style.backgroundColor = e.target.id;
                    break;
            
                case 'blue':
                    body[0].style.backgroundColor = e.target.id;
                    break;
            
                case 'purple':
                    body[0].style.backgroundColor = e.target.id;
                    break;
            
                default:
                    console.log('Click on the Box');
                    break;
            }
        })
})



























// const buttons =  document.querySelectorAll('.button')
// const body = document.querySelector('body')
// console.log(buttons);


// buttons.forEach(function (button) {
//     console.log(button);
//     button.addEventListener('click' , function(e){
//         switch (e.target.id) {
//             case 'yellow':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'blue':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'green':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'purple':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'grey':
//                 body.style.backgroundColor = e.target.id;
//                 break;
        
//             default:
//                 console.log("Click on any box");
//                 break;
//         }
//     })
// })