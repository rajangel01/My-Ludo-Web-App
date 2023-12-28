console.log("hello World");

let a=prompt("Enter the value from where you want to start the Game.");
a=a%4;
displayDice(a);

function generateDiceValueForYellow(){
    const audio = new Audio('sound.mp3');
    audio.play();

    
    var diceValue=document.getElementById("yellowDice");
    const val = Math.floor(Math.random() * 6) + 1;

    // val=val%6 + 1;
    if(val===1){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
    }else if(val===2){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-two"></i>';
    }else if(val===3){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-three"></i>';
    }else if(val===4){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-four"></i>';
    }else if(val===6){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-five"></i>';
    }else{
        diceValue.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
    }
    
    if(val===6){
        updateGotiForYellow(val);
        generateDiceValueForYellow();
    }else{
        updateGotiForYellow(val);
    }
    
}

function generateDiceValueForGreen(){
    const audio = new Audio('sound.mp3');
    audio.play();
    var diceValue=document.getElementById("greenDice");
    const val = Math.floor(Math.random() * 6) + 1;

    // val=val%6 + 1;
    if(val===1){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
    }else if(val===2){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-two"></i>';
    }else if(val===3){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-three"></i>';
    }else if(val===4){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-four"></i>';
    }else if(val===6){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-five"></i>';
    }else{
        diceValue.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
    }
}

function generateDiceValueForRed(){
    const audio = new Audio('sound.mp3');
    audio.play();
    var diceValue=document.getElementById("redDice");
    const val = Math.floor(Math.random() * 6) + 1;

    // val=val%6 + 1;
    if(val===1){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
    }else if(val===2){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-two"></i>';
    }else if(val===3){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-three"></i>';
    }else if(val===4){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-four"></i>';
    }else if(val===6){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-five"></i>';
    }else{
        diceValue.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
    }
}

function generateDiceValueForBlue(){
    const audio = new Audio('sound.mp3');
    audio.play();
    var diceValue=document.getElementById("blueDice");
    const val = Math.floor(Math.random() * 6) + 1;

    // val=val%6 + 1;
    if(val===1){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
    }else if(val===2){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-two"></i>';
    }else if(val===3){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-three"></i>';
    }else if(val===4){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-four"></i>';
    }else if(val===6){
        diceValue.innerHTML = '<i class="fa-solid fa-dice-five"></i>';
    }else{
        diceValue.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
    }
}

//Goti Updating for Yellow color
function updateGotiForYellow(diceValue){
    if(diceValue===6){

    }
}


//Dice displaying condition
function displayDice(condition) {
    condition=condition%4;
    var red=document.getElementById('redDice');
    var blue=document.getElementById('blueDice');
    var green=document.getElementById('greenDice');
    var yellow=document.getElementById('yellowDice');

    if(condition===0){
        yellow.style.display='block';
        red.style.display='none';
        blue.style.display='none';
        green.style.display='none';
        updateRedGoti();
    }else if(condition===1){
        yellow.style.display='none';
        red.style.display='block';
        blue.style.display='none';
        green.style.display='none';
        updateBlueGoti();
    } else if(condition===2){
        yellow.style.display='none';
        red.style.display='none';
        blue.style.display='block';
        green.style.display='none';
        updateGreenGoti();
    }else if(condition===3){
        yellow.style.display='none';
        red.style.display='none';
        blue.style.display='none';
        green.style.display='block';
        updateYellowGoti();
    }

}