// завдання додаткове task1 #yHAwJOyiC (3 блок) 1 та 2 блоки додатквого завдання 1 виконані у HW_3
let array=[10,9,8,7,6,5,4,3,2,1];
console.log('_________')
for (let i =0;i<array.length;i++){
    console.log(array[i]);
}
console.log('_________')
let arrayText = ['a','b','c','d','e','f','j','lol','privet','poka'];
for (let x in arrayText){
    console.log(arrayText[x]);
}
console.log('_________')
let arr = [1,2,3,'a','b','c','d','e',true,false];
for (let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log('_________')
for (let i = 0 ; i<arr.length;i++){
    if(arr[i] === true || arr[i] === false ){
        console.log(arr[i])
    }
}
console.log('_________');

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        console.log(arr[i]);
    }
}
console.log('_________');
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        console.log(arr[i]);
    }
}
// additional task1 4  блок
console.log('_________');
let arrayfour=[];
arrayfour[0]=1;
arrayfour[1]='privet';
arrayfour[2]='privet';
arrayfour[3]='privet';
arrayfour[4]=true;
arrayfour[5]=false;
arrayfour[6]=13;
arrayfour[7]='privet';
arrayfour[8]='privet';
arrayfour[9]='privet';
for(let i =0; i<arrayfour.length;i++){
    console.log(arrayfour[i]);
}
console.log('_________');
for (let i=1;i<=10;i++){
    console.log(i);
    document.write(`<p>${i}</p>`)
}
console.log('_________');
for (let i=1;i<=100;i++){
    console.log(i);
    document.write(`<p>${i}</p>`)
}
console.log('____________')
for (let i=1;i<=100;i+=2){
    console.log(i);
    document.write(`<p>${i}</p>`)
}
console.log('___________');
for (let i=1;i<=100;i++){
    if(i%2===0){
    console.log(i);
    document.write(`<p>${i}</p>`)}
}
console.log('___________');
for (let i=1;i<=100;i++){
    if(i%2===1){
        console.log(i);
        document.write(`<p>${i}</p>`)}
}

console.log('___________');
const books = [
    {
        title: "Мистецтво війни",
        pages: 250,
        authors: ["Сунь-цзи"],
        genres: ["Військова справа", "Філософія"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["Джордж Орвелл"],
        genres: ["Антиутопія", "Фантастика", "Політика"]
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        pages: 320,
        authors: ["Джоан Роулінг"],
        genres: ["Фентезі", "Пригоди"]
    },
    {
        title: "Тарас Бульба",
        pages: 240,
        authors: ["Микола Гоголь","Гоголь Микола"],
        genres: ["Історичний роман", "Класика"]
    },
    {
        title: "Кобзар",
        pages: 400,
        authors: ["Тарас Шевченко"],
        genres: ["Поезія", "Література"]
    }
];
let maxPagesBook=books[0]
for (let book of books ){
if(book.pages > maxPagesBook.pages)
    maxPagesBook=book;
   }
console.log(maxPagesBook);

console.log('___________');
let maxgenre=0;
for (let book of books) {
    if (book.genres.length > maxgenre) {
        maxgenre = book.genres.length;
        bookMaxGenres = book;
    }
}
console.log(bookMaxGenres);
console.log('___________');
for (let book of books){
    if (book.authors.length === 2){
        console.log(book);
        document.write(`<p>Книгу - ${book.title} написало 2 автори:${book.authors[0]} та ${book.authors[1]}</p>`)
    }
}
console.log('__________');
for (let book of books){
    if (book.authors.length === 1){
        console.log(book);
        document.write(`<p>Книгу - ${book.title} написав 1 автор:${book.authors[0]}</p>`)
    }
}