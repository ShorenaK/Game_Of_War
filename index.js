let deckId
// let deckId  either or will work. 

let newDeckbutton = document.getElementById("new-deck")
let drawCardbutton = document.getElementById("draw-cards")
let cardDiv = document.getElementById("card")

function handleClick(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    
    .then((res)=> res.json())
    .then((data) => { console.log(data)
      deckId = data.deck_id
     } )
}
newDeckbutton.addEventListener("click", handleClick)

drawCardbutton.addEventListener("click", function(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => { 
        console.log(data) 
       cardDiv.innerHTML = `<img src= "${data.cards[0].image}" class= "cards" />
       <img src= "${data.cards[1].image}" class= "cards"/>  `

    })
})




const people =[
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function filterArray(array, callback){
    const newArray = []
    // updated for loope 
    for (let item in array) { 
    const shoulBeIncluded = callback(item)
       if(shoulBeIncluded){
      newArray.push(item)  
    }
}
    return newArray
}

const result = filterArray(people, person =>{
    return person.hasPet === true 
})

console.log(result)



// function filterArray(array, callback){
//     const resultingArray = []
// c style for loope 
//     for (let i = 0 ; i < array.length; i ++){
//        const result =  callback(array[i])
//        if(result){
//         // 
//         resultingArray.push(array[i])
//        }
//     }
   
//      return resultingArray
// }


// const peoplewithPets = filterArray(people,function (person){
//     return person.hasPet === true 
// } )
// console.log(peoplewithPets)



const promis = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
console.log(promis)


const voters = [
    {name: "Joe", email: "joe@joe.com", voted: true},
    {name: "Jane", email: "jane@jane.com", voted: true},
    {name: "Bo", email: "bo@bo.com", voted: false},
    {name: "Bane", email: "bane@bane.com", voted: false}
]


const results = voters.filter(voter => voter.voted  
).map( email =>  email.email)
 
console.log(results)




fetch("https://apis.scrimba.com/bored/api/activity")
    .then(function(res) {
        return "Hello"
    })
    .then(function(whatever) {
        console.log(whatever)
        return "World"
    })
    .then(function(another) {
        console.log(another)
    })




// let deckId
// let computerScore = 0
// let myScore = 0
// const cardsContainer = document.getElementById("cards")
// const newDeckBtn = document.getElementById("new-deck")
// const drawCardBtn = document.getElementById("draw-cards")
// const header = document.getElementById("header")
// const remainingText = document.getElementById("remaining")
// const computerScoreEl = document.getElementById("computer-score")
// const myScoreEl = document.getElementById("my-score")

// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => {
//             remainingText.textContent = `Remaining cards: ${data.remaining}`
//             deckId = data.deck_id
//             console.log(deckId)
//         })
// }

// newDeckBtn.addEventListener("click", handleClick)

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