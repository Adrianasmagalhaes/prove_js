const addPost=() =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{ 
    method:'POST',
    body: JSON.stringify({
<<<<<<< HEAD
        userId: document.querySelector('#formid'),
        title : document.querySelector('#titulo1'),
        body: document.querySelector('#name'),
=======
        userId: 3,
        title : 'Cadastro de Usuário',
        body: 'nome'
>>>>>>> dc32165e859e0df5acd0c179f563504d7d0d8d2c
    }),
    headers:{
        'Content-type': 'application/json; charset =UTF-8',
    },
    
    })
<<<<<<< HEAD
    .then(responce =>{
        responce.json()
        .then(data => console.log(data))
    
    })
}

=======
    .then(responce => responce.json())
    .then(data => console.log(data))

}
>>>>>>> dc32165e859e0df5acd0c179f563504d7d0d8d2c
addPost();