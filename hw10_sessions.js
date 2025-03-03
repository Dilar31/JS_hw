
let x = JSON.parse(localStorage.getItem('sessionsList'));
for (const x1 of x) {
    const y = document.createElement('div')
    y.innerText = x1;
    document.body.appendChild(y);
}
