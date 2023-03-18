

function filterArray(array, callback){
    const resultingArray = []
// c style for loope 
    for (let i = 0 ; i < array.length; i ++){
       const result =  callback(array[i])
       if(result){
        // 
        resultingArray.push(array[i])
       }
    }
   
     return resultingArray
}


const peoplewithPets = filterArray(people,function (person){
    return person.hasPet === true 
} )
console.log(peoplewithPets)


const promis = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
console.log(promis)
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

