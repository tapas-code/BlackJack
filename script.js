let cards = [randomCard(), randomCard()]
let sum=cards[0]+cards[1]
let messageEl = document.querySelector("#message-p")
let cardEl = document.querySelector("#cards-p")
let sumEl = document.querySelector("#sum-p")
let isAlive = false
let isBlackJack = false

function randomCard(){
    let card=Math.floor((Math.random()*13)+1)
    if (card==1){
        return 11
    }else if (card>10){
        return 10
    }else return card
}
function startGame(){
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
        isBlackJack = true
    }else{
        messageEl.textContent = "Try your luck next time."
        isAlive = false
    }
}
function generateCard(){
    messageEl.textContent = "Function under maintainence."
}