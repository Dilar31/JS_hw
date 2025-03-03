//#sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// const x = document.createElement('div');
// x.classList.add('firstTask');
// x.id = 'text';
// document.body.appendChild(x);
// const y = document.createElement('button');
// y.innerText = 'DELETE ID';
// document.body.appendChild(y);
// y.addEventListener('click', (e) => {
//     x.remove();
// })
//#j693ca8
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const age = document.createElement('input');
// age.classList.add('age');
// age.setAttribute('placeholder', 'Введіть вік');
// document.body.appendChild(age);
// const button = document.createElement('button');
// button.classList.add('button');
// button.innerText = 'Надіслати'
// document.body.appendChild(button);
// button.addEventListener('click', () => {
//   const userAge = Number(age.value);
//   if (isNaN(userAge)){
//       alert('ВВедіть вік корректно')
//   }else if (userAge >= 18){
//       alert('Пройдена перевірка')
//   }else{
//       alert('Перевірка не пройдена')
//   }
// })
//#ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// const form = document.createElement('form')
// form.classList.add('form');
// document.body.appendChild(form);
// const name = document.createElement('input');
// name.classList.add('name');
// const surname = document.createElement('input');
// surname.classList.add('surname');
// const age =  document.createElement('input');
// age.classList.add('age');
// name.setAttribute('placeholder', 'Введіть імя');
// surname.setAttribute('placeholder', 'Введіть прізвище');
// age.setAttribute('placeholder', 'Введіть вік');
// const button = document.createElement('button');
// button.classList.add('button');
// button.innerText = 'Надіслати данні'
// form.appendChild(name);
// form.appendChild(surname);
// form.appendChild(age);
// form.appendChild(button);
// button.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     let user = {}
//     user.name = name.value;
//     user.surname = surname.value;
//     user.age  = age.value;
//     console.log(user);
//     let userparametrs = document.createElement('div');
//     userparametrs.classList.add('user');
//     document.body.appendChild(userparametrs);
//     let userinfo = document.createElement('p')
//     userinfo.innerText = `${user.name}-${user.surname}-${user.age}`
//     userparametrs.appendChild(userinfo);
// })
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let x = +localStorage.getItem('number');
// x +=1;
// localStorage.setItem('number',x);
// const div = document.createElement('div')
// document.body.appendChild(div);
//
//
// div.innerText =x ;
// // #LhSfdhM3
// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
// sessionsList = JSON.parse(localStorage.getItem("sessionsList")) || [];
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList',JSON.stringify(sessionsList));


// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// const x = document.createElement('input')
// x.classList.add('kg');
// x.setAttribute('placeholder', 'Введіть вагу у КГ')
// document.body.appendChild(x);
// let result = document.createElement('div');
// x.addEventListener('input', (e) => {
//
//     result.innerText = +e.target.value*2.2;
//     document.body.appendChild(result);
// })
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
// function addToLocalStorage(arrayName,objToAdd){
//     const arrayToAdd = JSON.parse(localStorage.getItem(arrayName));
//     if(!arrayToAdd){
//         alert('Не иснує такого обєкта у локал сторадж')
//     }
//   arrayToAdd.push(objToAdd);
//   const result = localStorage.setItem(arrayName, JSON.stringify(arrayToAdd));
// }
// addToLocalStorage('sessionsList','hi');
// console.log(x);



// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// let x = document.createElement('input');
// let c = document.createElement('input');
// let v = document.createElement('input');
// x.classList.add('trNumbers');
// x.setAttribute('placeholder', 'введіть кількість рядків');
// c.classList.add('tdNumbers');
// c.setAttribute('placeholder', 'введіть кількість стовпчиків');
// v.classList.add('valuerOfCells');
// v.setAttribute('placeholder', 'введіть вміст клітинки');
// let b = document.createElement('button');
// b.classList.add('table-writer');
// b.innerText = 'draw TABLE';
// document.body.appendChild(x);
// document.body.appendChild(c);
// document.body.appendChild(v);
// document.body.appendChild(b);
// b.addEventListener('click', (e) => {
//     const table = document.createElement('table');
//     document.body.appendChild(table);
//     let lines = +x.value;
//     let column = +c.value;
//     let value = v.value;
//     for (let i =0; i <lines; i++) {
//          tr = document.createElement('tr')
//          table.appendChild(tr);
//          for (let j =0; j < column; j++) {
//              td = document.createElement('td');
//              table.appendChild(td);
//              td.innerText = value;
//          }
//     }
//
// })
//#bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбуваєтl

// if (!localStorage.getItem('x')) {
//     localStorage.setItem('x', '100');
// }
// const div = document.createElement('div');
// div.innerText = `${localStorage.getItem('x')} грн.`;
// document.body.appendChild(div);
//
// window.addEventListener('beforeunload', ev => {
//     if(ev.timeStamp>10000) {
//         ;
//         value = +localStorage.getItem('x');
//         newValue = value + 10;
//         localStorage.setItem('x', newValue);
//         div.innerText = `${newValue} грн.`;
//     }})
//

//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// if (!localStorage.getItem('tenValue')){
//     localStorage.setItem('tenValue', '10');
// }
// function arrayCreator (){
//     let array = [];
//     for (let i = 1; i <= 100; i++){
//         array.push(i);
//     }
//     return array;
// }
// let array = arrayCreator();
//
//
// const globalDiv = document.createElement('div');
// globalDiv.id = 'globalDiv';
// document.body.appendChild(globalDiv);
// document.querySelector('#globalDiv')
// const div = document.createElement('div');
// div.id = 'div';
// globalDiv.appendChild(div);
//
// startOfIter = +(localStorage.getItem('tenValue')-10);
// endOfIter = +localStorage.getItem('tenValue');
//
// for (let i = startOfIter; i <endOfIter; i++){
//     let x = document.querySelector('#div')
//     let y = document.createElement('p');
//     y.innerText = array[i];
//     x.appendChild(y);
// }
//
//
// let next = document.createElement('button');
// next.id = 'next';
// next.innerText = 'Next';
// document.body.appendChild(next);
// let prev = document.createElement('button');
// prev.id = 'prev';
// prev.innerText = 'Prev';
// document.body.appendChild(prev);
// let nextTen = document.querySelector('next');
//
//
//
// next.addEventListener('click', function(){
//     startOfIter = +(localStorage.getItem('tenValue'));
//     endOfIter = +localStorage.getItem('tenValue')+10;
//     localStorage.setItem('tenValue', endOfIter);
//
//     let remover = document.querySelector('#div');
//     remover.remove()
//     const newDiv = document.createElement('div');
//     newDiv.id = 'div';
//     globalDiv.appendChild(newDiv);
//     if(endOfIter>=array.length){
//         localStorage.setItem('tenValue', 0);
//     }
//
//
//
//     for (let i = startOfIter; i <endOfIter; i++){
//
//         let x = document.querySelector('#div')
//         let y = document.createElement('p');
//         y.innerText = array[i];
//         x.appendChild(y);
//     }
// })
// prev.addEventListener('click', function(){
//
//
//     startOfIter = +localStorage.getItem('tenValue')-20;
//     endOfIter = +localStorage.getItem('tenValue')-10;
//     localStorage.setItem('tenValue', endOfIter);
//     if(startOfIter < 0){
//         localStorage.setItem('tenValue', array.length-10);
//         startOfIter = array.length - 10;
//         endOfIter = array.length;
//     }
//     let remover = document.querySelector('#div');
//     remover.remove()
//     const newDiv = document.createElement('div');
//     newDiv.id = 'div';
//     globalDiv.appendChild(newDiv);
//
//
//
//
//     for (let i =startOfIter; i <endOfIter; i++){
//
//         let x = document.querySelector('#div')
//         let y = document.createElement('p');
//         y.innerText = array[i];
//         x.appendChild(y);
//     }
// })
//


