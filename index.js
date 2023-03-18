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

function handleClick(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    
    .then((res)=> res.json())
    .then((data) => { 
      deckId = data.deck_id
      remainingText.textContent = `Remaining cards: ${data.remaining}`
     } )
}
newDeckbutton.addEventListener("click", handleClick)

drawCardbutton.addEventListener("click", function(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => { 
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
     }
    })
})

function determineCardWinner(card1, card2){
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
                        "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
   if(card1ValueIndex > card2ValueIndex){
        return   ` "card1 is winner" `
    }else if(card1ValueIndex < card2ValueIndex){
        return  ` "card2 is winner" `
    }else {
        return ` "it's tie" `
    }
}


// drawCardBtn.addEventListener("click", () => {
//     fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
//         .then(res => res.json())
//         .then(data => {
//             remainingText.textContent = `Remaining cards: ${data.remaining}`
//             cardsContainer.children[0].innerHTML = `
//                 <img src=${data.cards[0].image} class="card" />
//             `
//             cardsContainer.children[1].innerHTML = `
//                 <img src=${data.cards[1].image} class="card" />
//             `
//             const winnerText = determineCardWinner(data.cards[0], data.cards[1])
//             header.textContent = winnerText
            
//             if (data.remaining === 0) {
//                 drawCardBtn.disabled = true
//                 if (computerScore > myScore) {
//                     header.textContent = "The computer won the game!"
//                 } else if (myScore > computerScore) {
//                     header.textContent = "You won the game!"
//                 } else {
//                     header.textContent = "It's a tie game!"
//                 }
//             }
//         })
// })

// function determineCardWinner(card1, card2) {
//     const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
//     "10", "JACK", "QUEEN", "KING", "ACE"]
//     const card1ValueIndex = valueOptions.indexOf(card1.value)
//     const card2ValueIndex = valueOptions.indexOf(card2.value)
    
//     if (card1ValueIndex > card2ValueIndex) {
//         computerScore++
//         computerScoreEl.textContent = `Computer score: ${computerScore}`
//         return "Computer wins!"
//     } else if (card1ValueIndex < card2ValueIndex) {
//         myScore++
//         myScoreEl.textContent = `My score: ${myScore}`
//         return "You win!"
//     } else {
//         return "War!"
//     }
// }