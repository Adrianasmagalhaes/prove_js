const addPost=() =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{ 
    method:'POST',
    body: JSON.stringify({
        userId: 3,
        title : 'Cadastro de Usuário',
        body: 'nome'
    }),
    headers:{
        'Content-type': 'application/json; charset =UTF-8',
    },
    
    })
    .then(responce => responce.json())
    .then(data => console.log(data))

}
addPost();