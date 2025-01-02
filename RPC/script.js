// let userScore=document.querySelector("#user-score");
// let compScore=document.querySelector("#comp-score");

let userScore=0;
let comScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScoreFinal=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");

const compChoice=()=>{
    const options=['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(choiceId)=>{
    console.log("user choice=",choiceId);
    const compRandChoice=compChoice();
    console.log("computer choice=", compRandChoice);

    if (choiceId===compRandChoice){
        console.log("Its a draw match !");
        msg.innerText="Its a draw !!";
        msg.style.color="black";
        msg.style.backgroundColor="wheat";
    }
    else if(choiceId==="rock" && compRandChoice==="scissors" || choiceId==="paper" && compRandChoice==="rock" || choiceId==="scissors" && compRandChoice==="paper"){
        console.log("You wonnnnn !!!!");
        userScore++;
        userScoreFinal.innerText=userScore;
        msg.innerText="You have Won this round !";
        msg.style.color="black";
        msg.style.backgroundColor="green";
    }
    else{
        console.log("Computer Won !!!");
        msg.innerText="Computer wins this round !";
        comScore++;
        msg.style.color="white";
        msg.style.backgroundColor="black";
        compScore.innerText=comScore;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log(`${choiceId} was clicked.`,);
        playGame(choiceId);
    });
});
