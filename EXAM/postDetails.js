
    const currentPost = JSON.parse(localStorage.getItem('currentPost'));

    const postDetailsWrapper = document.createElement('div');
    postDetailsWrapper.classList.add('postDetailsWrapper');
    document.body.appendChild(postDetailsWrapper);
    postDetailsWrapper.appendChild(postDetailsWriter(currentPost));

    function postDetailsWriter(post) {
        const postInfo = document.createElement('div');
        postInfo.classList.add('postInfo');
        const idAndTitle = document.createElement('h4');
        idAndTitle.innerHTML = `#${post.id}<span> ${post.title}</span>`;
        postInfo.appendChild(idAndTitle);
        const authorsName = document.createElement('p');
        authorsName.innerText = `by ${(JSON.parse(localStorage.getItem('user'))).name}, id:${post.userId}`;
        postInfo.appendChild(authorsName);
        const body = document.createElement('article');
        body.innerText = `${post.body}`;
        postInfo.appendChild(body);

        return postInfo;

    }

    const p = document.createElement('p');
    p.classList.add('p');
    p.innerText = `Comments:`;
    postDetailsWrapper.appendChild(p);

    const commentsWrapper = document.createElement('div');
    commentsWrapper.classList.add('commentsWrapper');
    postDetailsWrapper.appendChild(commentsWrapper);

    async function commentsWriter(){
        let comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`)
            .then(value => value.json());
        for (let comment of comments) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('commentDiv');
            commentsWrapper.appendChild(commentDiv);
            const idAndTitleCommnet = document.createElement('h4');
            idAndTitleCommnet.innerHTML = `#${comment.id}<span> ${comment.name}</span>`;
            const authorsNameCommnet = document.createElement('p');
            authorsNameCommnet.innerText = `by ${comment.email}`
            const bodyCommnet = document.createElement('article');
            bodyCommnet.innerText = `${comment.body}`;
            commentDiv.appendChild(idAndTitleCommnet);
            commentDiv.appendChild(authorsNameCommnet);
            commentDiv.appendChild(bodyCommnet);
        }
    }
    commentsWriter();
