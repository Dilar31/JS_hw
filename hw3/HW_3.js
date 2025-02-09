'use strict'
// task 1
for (let i =1; i<=10; i++){
document.write(`<div><p> Lorem ipsum dolor.</p></div>`)
    console.log(i)
}
// task 2
for (let i =1; i<=10; i++){
    document.write(`<div><p>${i}----- Lorem ipsum dolor.</p></div>`)
    console.log(i)
}
// task 3
let x=1;
while (x<=20){
    document.write(`<h1>Lorem ipsum dolor.</h1>`);
    x++;
}
//task 4
let y =1
while (y<=20){
    document.write(`<h1>${y}Lorem ipsum dolor.</h1>`);
    y++;
}
// task 5
document.write(`<ul>`)
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i <=listOfItems.length; i++){
    document.write(`<li>${listOfItems[i]}</li>`)
}
document.write(`</ul>`)
//task 6

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write(`<div class='product-line'>`)
    for(let product of products){
document.write(`<div class='product-card'>
                  <h1>${product.title} - ${product.price} uan</h1>
                  <img src="${product.image}" alt="1">
                </div>`)
    }

document.write(`</div>`)
// task 7
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
    for(let user of users){
       if(user.status===true){
           document.write(`<p>${user.name}</p>`)
        }
    }
    for(let user of users){
        if(user.status === !true){
            document.write(`<p>${user.name} - have status - ${user.status}</p>`)
            }

    }
    for (let user of users){
        if(+user.age > 30 ){
            document.write(`<p>users over 30 years old - ${user.name}</p>`)
        }
    }

    //additional 1 #WpkK0ZH1
let arrayOne=[1,2,3,4,5];
console.log(arrayOne);
let arrayText = ['a','a','a','3','true'];
console.log(arrayText);
let arrayMix = [1,2,'a','b',true,false];
console.log(arrayMix);
let arrayLast =[]
arrayLast[0]='privet';
arrayLast[1]=5
arrayLast[2]=false;
arrayLast[3]=true;
console.log(arrayLast);
    //#qLQLJSeN7i -завдання

    let i = 0;
   let arrayNextTask = [2,17,13,6,22,31,45,66,100,-18];
   while (i < arrayNextTask.length){
       console.log(arrayNextTask[i]);
       i++;
   }

console.log('------')
   for(let x=0; x<arrayNextTask.length; x++){
       console.log(arrayNextTask[x]);
   }
console.log('------')
    let g = 0;
    while (g < arrayNextTask.length){
    if(g%2===0){
        console.log(arrayNextTask[g])
    }
    g++;
    }
console.log('------')
    for (let d = 0; d<arrayNextTask.length;d++){
    if(d%2===1){
        console.log(arrayNextTask[d]);
    }
    }
    console.log('------')
    let j = 0;
    while (j<arrayNextTask.length){
        if(arrayNextTask[j]%2===0){
            console.log(arrayNextTask[j]);
        }
        j++;
    }
    console.log('---')

    for (let usersNew of arrayNextTask){
        if(usersNew%3===0){
            usersNew='okten'

        }  console.log(usersNew)
    }
    console.log('-------');
    let reversedArr=[]
    for (let f = arrayNextTask.length-1;f >=0; f--){
        reversedArr.push(arrayNextTask[f]);
    }
    console.log (reversedArr);
//     або  існує така можливість  перевернути масив
let rev=arrayNextTask;
rev.reverse();
console.log(rev);
console.log('---------')






