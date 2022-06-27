const userChoice = document.getElementById('your-choice');
const computerDisplay = document.getElementById('computer-choice');
const Result = document.getElementById('result');

function rock(){
    userChoice.innerHTML= 'Rock';
    choiceGenerator();
    output();

}
function paper(){
    userChoice.innerHTML= 'Paper';
    choiceGenerator();
    output();
}
function scissors(){
    userChoice.innerHTML= 'Scissors';
    choiceGenerator();
    output();
    
}
function choiceGenerator(){
    let random = Math.floor(Math.random()*3)+1;
    if(random === 1){
        computerDisplay.innerHTML = 'Rock';
    }
    if(random === 2){
        computerDisplay.innerHTML = 'Paper';
    }
    if(random === 3){
        computerDisplay.innerHTML = 'Scissors';
    }
} 
function output(){
    if(userChoice.innerHTML == computerDisplay.innerHTML){
        Result.innerHTML = "Its a draw";
        

    }
    if(userChoice.innerHTML == 'Rock' &&  computerDisplay.innerHTML == 'Paper'){
        Result.innerHTML = "Computer has won";
    }
    if(userChoice.innerHTML == 'Rock' &&  computerDisplay.innerHTML == 'Scissors'){
        Result.innerHTML = "Congrates!!! You have won !";
    }
    if(userChoice.innerHTML == 'Paper' &&  computerDisplay.innerHTML == 'Rock'){
        Result.innerHTML = "Congrates you have won !";
    }
    if(userChoice.innerHTML == 'Paper' &&  computerDisplay.innerHTML == 'Scissors'){
        Result.innerHTML = "Computer has won";
    }
    if(userChoice.innerHTML == 'Scissors' &&  computerDisplay.innerHTML == 'Rock'){
        Result.innerHTML = "Computer has won";
    }
    if(userChoice.innerHTML == 'Scissors' &&  computerdisplay.innerHTML == 'Paper'){
        Result.innerHTML = "Congrates!!! You have won !";
    }  
}

