

fetch('https://jsonplaceholder.ir/users', {
    method: 'GET',
  })
    .then(data => data.json())
    .then( users => {
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map ((users, i ) => {
            let nombre = document.createElement('h2');
            
        }
        )

    })
