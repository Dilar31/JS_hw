// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// const newElement = document.createElement('div');
// newElement.classList.add('wrap');
// newElement.classList.add('collapse');
// newElement.classList.add('alpha');
// newElement.classList.add('beta');
// document.body.appendChild(newElement);
//
// const newNewElement=newElement.cloneNode(true);
// document.body.appendChild(newNewElement);
// //#OPLI89c9G
// // - Є масив:
// // ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// const order = ['Main','Products','About us','Contacts',123123,true];
// const ul = document.createElement('ul');
// ul.classList.add('ul1');
// document.body.appendChild(ul);
// for (let x of order) {
// let li = document.createElement('li');
// li.textContent = x;
// ul.appendChild(li);
// }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let x of coursesAndDurationArray){
    let div = document.createElement('div');
    div.textContent = `${x.title} - ${x.monthDuration} месяців`;
    document.body.appendChild(div);
}

// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (let x of coursesAndDurationArray){
    let div = document.createElement('div');
    div.classList.add(`item`)
    let h1=document.createElement('h1')
    h1.classList.add('heading');
    h1.textContent = x.title
    let p=document.createElement('p')
    p.classList.add('description')
    p.textContent = x.monthDuration;
    document.body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);

}
