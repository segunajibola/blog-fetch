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