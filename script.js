const blogs = document.getElementById("blogs")
const form = document.getElementById("new-post")
let postArray = []

function renderPost() {
        let posts = ""
        for (let post of postArray) {
            posts += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        blogs.innerHTML = posts
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        postArray = data.slice(0, 5)
        renderPost()
    })

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(post => {
        postArray.unshift(post)
        renderPost()
        form.reset()
    })
})

    // POST EXAMPLE
//     fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         title: "Buy Milk",
    //         completed: false
    //     }),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
//     })
//     .then(res => res.json())
//     .then(data => console.log(data)) 
// will return the id of the uploaded data with only body,
// but with headers, it will return body and header's content

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

// function callback() {
//     console.log("I finally ran!")
// }

// setTimeout(callback, 2000)

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// function gimmeThePets(person) {
//     return person.hasPet
// }

// const peopleWithPets = people.filter(gimmeThePets)
// console.log(peopleWithPets)


/**
 * Challenge: 
 * 
 * Write your own `filter` function! Don't worry about adding it to the prototype of arrays or anything.
 * This function should take 2 parameters:
 * 1. The array you want to filter through, and
 * 2. A callback function
 * 
 * Steps for filterArray function logic:
 * 1. Initialize a new, empty array which will be returned at the end of the `filterArray`s operations (Completed ✅)
 * 2. Loop through the array passed as the 1st parameter
 * 3. Inside the loop, call the callback function, passing the individual item you're currently looping over as the argument to your callback function
 * 4. If the callback function returns `true`, push the current item you're iterating on in the loop to the new array. If it returns `false`, don't push it to the array.
 * 5. When the loop is over, return the new array
 */

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

// function filterArray(array, callback) {
//     const resultingArray = []
//     // Write your filtering logic here
//     // for (let i = 0; i < array.length; i++)
//     for(item of array) {
//         const shouldBePicked = callback(item)
//         if(shouldBePicked) {
//            resultingArray.push(item) 
//         }
//     }
//     return resultingArray
// }

// We'll do this later
// const peopleWithPets = filterArray(people, /*???*/)

/**
 * Challenge: Use your filter array method!
 * Given the above `people` array, return a new array with only people where `hasPet` is true
 * Note: Remember that your callback function will be given the individual item in the array for a parameter
 */

//  const peopleWithPets = filterArray(people, function(person) {
//     return person.hasPet
// })

// console.log(peopleWithPets)

// const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
// returns a promise
// promise.then()
// the promise has a .then() method. In the method, a callback function is passed
// to use when the promise is resolved/fulfilled

/* 
Given the array below, chain the `.filter` and `.map` array methods together
to turn the array into an array of string email addresses of only the people
in the array who voted. Log the array of email addresses to the console
*/

// const voters = [
//    {name: "Joe", email: "joe@joe.com", voted: true},
//    {name: "Jane", email: "jane@jane.com", voted: true},
//    {name: "Bo", email: "bo@bo.com", voted: false},
//    {name: "Bane", email: "bane@bane.com", voted: false}
// ]

// Write your code below
// const eachvoters = voters.filter(voter => voter.voted).map(voter => voter.email)
// console.log(eachvoters)

// Final result: ["joe@joe.com", "jane@jane.com" ]

const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
// returns a promise
const promise2 = promise.then(res => res.json())
console.log(promise2) // returns a promise
const promise3 = promise2.then(data => console.log(data))
console.log(promise3) // returns a promise

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(function(res) {
        return "Hello"
    })
    .then(function(whatever) {
        console.log(whatever) // hello
        return whatever
    })
    .then(function(another) { // another = hello
        console.log(`${another} 2`) // hello 2
    })