// import fetch from 'node-fetch'

let _data = {
    title: "teste de envio",
    body: "loren ipsum sit dolor amet consectur",
    userId: 5
}

const postContainer = document.getElementById('posts')
let postMarkup = ''
let postLength = 0

// função que cadastra um post
function setPost(data) {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then( data => console.log(data))
    .catch(error => console.error(error))   
}

// função que solicita todos os posts
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/', {
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then( data => { 
        postLength = data.length
        console.log(postLength)
     })
    .catch(error => console.error(error))  
}

// função que solicita um post por ID
function getPost(id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then( post => { 
            postMarkup += `
                <div class="posts-item" id="post-${post.id}">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
        postContainer.innerHTML = postMarkup
     })
    .catch(error => console.error(error))  
}

let postIndex = 1;
getPosts()
getPost(postIndex)

const loadPost = document.getElementById('loadPost')

loadPost.addEventListener('click', function(e) {
    if(postIndex < postLength)
        getPost(postIndex += 1)
})