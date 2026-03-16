let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('#reset');
if (reset) {
    reset.addEventListener('click', resetGame);
}
let newbtn=document.querySelector('#new-butn');
let msg=document.querySelector('#msg');
let msgContainer=document.querySelector('.masege-cantainer');


let turno=true; // playe x player o


const winningCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    


];
const resetGame=()=>{
    turno=true;
    enableboxes();
    msgContainer.classList.add('hide');
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText='';
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

const showWINNER=(winner)=>{
    msg.innerText=`the winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxes();
}

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        console.log('clicked');
        if(turno){
            box.innerText='O';
            turno=false;
        }
        else{
            box.innerText='X';
            turno=true;
        }
        box.disabled=true;
        checkWin();
    })
})

const checkWin=()=>{
    for(let pattern of winningCombos){

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;



        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos2===pos3){
                console.log('winner',pos1)
                showWINNER(pos1);
            }
        }
    }
}

newbtn.addEventListener('click', resetGame);
// Event listener for reset button
if (reset) {
    reset.addEventListener('click', resetGame);
}