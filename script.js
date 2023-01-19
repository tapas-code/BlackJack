let isAlive = false
let isBlackJack = false
let messageEl = document.querySelector("#message-p")
let cardEl = document.querySelector("#cards-p")
let sumEl = document.querySelector("#sum-p")
let cards = []
let sum = 0

function randomCard(){
    let card=Math.floor((Math.random()*13)+1)
    if (card==1){
        return 11
    }else if (card>10){
        return 10
    }else return card
}
function startGame(){
    cards = [randomCard(), randomCard()]
    sum = cards[0]+cards[1]
    isAlive = true
    cardEl.textContent = "Cards: " + cards
    sumEl.textContent = "Sum: " + sum
    renderGame()
}
function renderGame(){
    if(sum<21){
        messageEl.textContent = "Draw a card."
    }else if(sum===21){
        messageEl.textContent = "Hoorah! It's a Blackjack."
    }else{
        messageEl.textContent = "Try your luck next time."
    }
}
function generateCard(){
    if(sum<21 && isAlive==true){
        let newCard = randomCard()
        sum+=newCard
        cards.push(newCard)
        cardEl.textContent = "Cards: " + cards
        sumEl.textContent = "Sum: " + sum
        renderGame()
    }
    else if(sum>21){
        alert("You Lost! Start a New Game.")
    }
    else if(sum===21){
        alert("You Won! Start a New Game.")
    }
    else if(isAlive==false){
        alert("Click on START GAME.")
    }
}
function newGame(){
    if(sum>=21){
        messageEl.textContent = "Want to play a round?"
        cards.splice(0, cards.length);
        sum=0
        cardEl.textContent = "Cards: " 
        sumEl.textContent = "Sum: " 
        startGame()
    }
    else if(isAlive==false){
        alert("Click on START GAME.")
    }
    else {
        alert("Finish the current round.")
    }
}