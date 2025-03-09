
    const user = JSON.parse(localStorage.getItem('user'));
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((value) => value.json())
        .then((value) => {
            localStorage.setItem('userCollectionOfPosts', JSON.stringify(value));
        })

    const userWrapper = document.createElement('div')
    document.body.appendChild(userWrapper);
    userWrapper.classList.add('user-wrapper');

    userWrapper.appendChild(userCreateInfo(user));
    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('button-div');
    userWrapper.appendChild(buttonDiv)
    const button = document.createElement('button');
    button.innerText = 'Переглянути пости';
    buttonDiv.appendChild(button);

    function userCreateInfo(userObject) {
        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        const userTitle = document.createElement('h4');
        userTitle.classList.add('user-title');
        userTitle.innerText = `#${userObject.id} - ${userObject.name}`;
        userInfo.appendChild(userTitle);
        const userName = document.createElement('p');
        userName.innerHTML = `<span>${userObject.username}</span>`;
        userInfo.appendChild(userName);
        const userContacts = document.createElement('div');
        userContacts.classList.add('user-contacts');
        userInfo.appendChild(userContacts);
        const userEmail = document.createElement('a');
        userEmail.href = `mailto:${userObject.email}`;
        userEmail.innerText = userObject.email;
        const userPhone = document.createElement('a');
        userPhone.href = `tel:${userObject.phone}`;
        userPhone.innerText = userObject.phone;
        const emailImg = document.createElement('img');
        emailImg.src = 'img/email.png';
        const phoneImg = document.createElement('img');
        phoneImg.src = 'img/phone.png';
        userContacts.appendChild(emailImg);
        userContacts.appendChild(userEmail);
        userContacts.appendChild(phoneImg);
        userContacts.appendChild(userPhone);
        const userSocial = document.createElement('a');
        userSocial.href = `${userObject.website}`;
        userSocial.innerText = `WebSite:${userObject.website}`;
        userInfo.appendChild(userSocial);
        const address = userObject.address;
        const userAddress = document.createElement('p');
        userAddress.innerText = `${address.city}, ${address.street}, ${address.suite}`;
        userInfo.appendChild(userAddress);
        const userZip = document.createElement('p');
        userZip.innerText = `${address.zipcode}`;
        userInfo.appendChild(userZip);
        const userGeo = document.createElement('p');
        userGeo.innerText = `Lat:${address.geo.lat}, Lng:${address.geo.lng}`;
        userInfo.appendChild(userGeo);
        const userWork = document.createElement('p');
        const userCompany = userObject.company;
        userWork.innerHTML = `<span>Нава компанії:</span>${userCompany.name}, ${userCompany.bs}. <span>Слоган компаенії:</span>${userCompany.catchPhrase}`;
        userInfo.appendChild(userWork);
        return userInfo;
    }




    button.addEventListener('click', () => {
        const userPosts = JSON.parse(localStorage.getItem('userCollectionOfPosts'));
        if (button.innerText === 'Переглянути пости') {
            if (!localStorage.getItem('userCollectionOfPosts')) {
                localStorage.setItem('userCollectionOfPosts', JSON.stringify(value));
            }
            const postsDiv = document.createElement('div');
            postsDiv.classList.add('posts');
            postsDiv.id = 'posts';
            userWrapper.appendChild(postsDiv);
            button.innerText = 'Згорнути';
            for (const postValue of userPosts) {
                const post = document.createElement('div');
                post.classList.add('post');
                postsDiv.appendChild(post)
                const title = document.createElement('h5');
                title.innerHTML = `<span>Пост</span>: ${postValue.title}`;
                post.appendChild(title);
                const a = document.createElement('a');
                a.href = 'postDetails.html';
                post.appendChild(a);
                const buttonInDetail = document.createElement('button');
                buttonInDetail.addEventListener('click', (e) => {
                    localStorage.setItem('currentPost', JSON.stringify(postValue));
                })
                buttonInDetail.innerText = 'Детальніше';
                a.appendChild(buttonInDetail);

            }
        } else if (button.innerText === 'Згорнути') {
            const removerDiv = document.getElementById('posts');
            removerDiv.remove();
            button.innerText = 'Переглянути пости';
        }
    })