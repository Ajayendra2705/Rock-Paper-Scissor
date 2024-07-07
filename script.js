let player_score = 0
let comp_score = 0

const choices = document.querySelectorAll(".choice")
const message = document.querySelector("#msg")

const my_score = document.querySelector('#your_score')
let player_score_integar = 0
const computer_score = document.querySelector('#comp_score')
let computer_score_number = 0


const gen_Comp_choice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const DrawGame = () => {
    console.log("game was draw")
    message.innerText = "Draw"
    message.style.backgroundColor = "#081b31"

}

const showWinner = (Player_win , Computer_chose_this , user_choice) => {
    if (Player_win) {
        player_score_integar++
        console.log("You win")
        message.innerText = `You WIN! Your ${user_choice} beats ${Computer_chose_this}`
        message.style.backgroundColor = "green"
        my_score.innerText = player_score_integar        
    }
    else {
        computer_score_number++
        console.log("You Lose")
        message.innerText = `You LOSE! Computers ${Computer_chose_this} beats ${user_choice}`
        message.style.backgroundColor = "red"
        computer_score.innerText = computer_score_number

    }
}

const playGame = (user_choice) => {
    console.log("user choice = " , user_choice);
    const Computer_chose_this = gen_Comp_choice();
    console.log("comp_choice = ", Computer_chose_this);

    if (user_choice == Computer_chose_this) {
        DrawGame();
    }
    else {
        let Player_win = true;
        if (user_choice === "rock") {
            Player_win = Computer_chose_this === "paper" ? false : true
        }
        else if (user_choice === "paper") {
            Player_win = Computer_chose_this === "scissors" ? false : true
        }
        else {
            Player_win = Computer_chose_this === "rock" ? false : true
        }
        showWinner(Player_win , Computer_chose_this , user_choice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const user_choice = choice.getAttribute("id");
        playGame(user_choice)
    });
});

