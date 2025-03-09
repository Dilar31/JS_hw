fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((value) => {
            localStorage.clear();
        const divContainer = document.createElement('div');
        divContainer.classList.add('container');
        document.body.append(divContainer);
        for ( let user of value){
            let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        divContainer.append(userDiv);
        const userId = document.createElement('h4');
        userId.innerText = `#${user.id} - ${user.name}`;
        userDiv.append(userId);
        const a = document.createElement('a');
        a.classList.add('link');
        a.href = 'user-details.html';
        userDiv.appendChild(a);
        const button = document.createElement('button');
        button.textContent = `Переглянути детальну інформацію про - ${user.name}`;
        a.appendChild(button);
        button.addEventListener('click', () => {
                localStorage.setItem('user',JSON.stringify(user));

        })
        }
    })