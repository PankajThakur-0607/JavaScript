let boxes = document.querySelectorAll(".box")
let resetGameBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".show-msg")

let turn0 = true;
let count = 0;

// let arr = ["apple" , "banana" , "litchi"];

//2D array 
// let arr2 = [
//     ["apple" , "litchi"] , 
//     ["mango" , "mushroom"] , 
//     ["banana" , "shirts"]
// ];


const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8] 
]

boxes.forEach((box) =>{
    box.addEventListener("click" , () => {
        // console.log("box was clicked");
        if(turn0){  // player O
            box.innerText = "O";
            box.style.color = '#ffff1c'
            turn0 = false;

        }else{ // Player X 
            box.innerText = "X";
            box.style.color = '#00c3ff'
            turn0 = true;
        }
        box.disabled = true;
        count++;
        if(count == 9){
            draw();
        }

        checkWinner();
    });
});



const  resetGame = () => {
      turn0 = true;
      enableBoxes();
      msgContainer.classList.add('hide');
}


const showWinner = (winner) => {
    msg.innerText = ` Congratulation! The Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    count = 0;
    disableBoxes();
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const draw = (match) => {
    msg.innerText = `The Match is Draw`
    msgContainer.classList.remove('hide');
    disableBoxes();
}

function checkWinner(){
    for(let pattern of winPattern ){
        // console.log(pattern[0] , pattern[1] , pattern[2]);  
        // console.log(
        //     boxes[pattern[0]].innerText , 
        //     boxes[pattern[1]].innerText , 
        //     boxes[pattern[2]].innerText); 

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    // console.log(`The Winner is ${pos1Val}`);
                    showWinner(pos1Val);

                }
            }

    } 
}


newGameBtn.addEventListener('click' , resetGame);
resetGameBtn.addEventListener('click' ,  resetGame);

