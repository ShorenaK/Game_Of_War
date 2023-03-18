let deckId
let myScore = 0 
let computerScore = 0 
const computerScoreEl = document.getElementById("computer-score")
const myScoreEl = document.getElementById("my-score")

let newDeckbutton = document.getElementById("new-deck")
let drawCardbutton = document.getElementById("draw-cards")
let cardDiv = document.getElementById("cards")
let headerh2 = document.getElementById("header")
let remainingText = document.getElementById("remaining")

 async function handleClick(){
    const res = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await res.json()
      deckId = data.deck_id
      remainingText.textContent = `Remaining cards: ${data.remaining}`  
}
newDeckbutton.addEventListener("click", handleClick)

drawCardbutton.addEventListener("click", async function(){
    const res = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    let data = await res.json()
       
        remainingText.textContent = `Remaining cards: ${data.remaining}`
       cardDiv.children[0].innerHTML = `
         <img src= "${data.cards[0].image}" class= "card" />  
       `
       remainingText.textContent = `Remaining cards: ${data.remaining}`
       cardDiv.children[1].innerHTML = `
         <img src= "${data.cards[1].image}" class= "card" />  
     `   
     headerh2.textContent = determineCardWinner(data.cards[0], data.cards[1])
     
     if(data.remaining === 0 ){
         drawCardbutton.disabled = true
     }if(computerScore > myScore){
        headerh2.textContent = "The computer won the game!"
     }else if(myScore > computerScore){
        headerh2.textContent = "You won the game!"
     }else{
        headerh2.textContent = "It's a tie game!"
     }
    }
)
function determineCardWinner(card1, card2){
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
                        "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
   if(card1ValueIndex > card2ValueIndex){
     computerScore ++ 
      computerScoreEl.textContent =  `Computer score: ${computerScore}`
        return    `"Computer scored" `
    }else if(card1ValueIndex < card2ValueIndex){
        myScore ++ 
        myScoreEl.textContent = `My score: ${myScore}`
        return  `"You scored" `
    }else {
        return ` "It's a tie game!" `
    }
}
