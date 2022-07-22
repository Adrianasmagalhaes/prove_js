const addPost=() =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{ 
    method:'POST',
    body: JSON.stringify({
        userId: document.querySelector('#formid'),
        title : document.querySelector('#titulo1'),
        body: document.querySelector('#name'),
    }),
    headers:{
        'Content-type': 'application/json; charset =UTF-8',
    },
    
    })
    .then(responce =>{
        responce.json()
        .then(data => console.log(data))
    
    })
}

addPost();