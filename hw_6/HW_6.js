// - Знайти та вивести довижину настипних стрінгових значень
const stingLength = (text) => text.length
console.log(stingLength('hello world'));
console.log(stingLength('lorem ipsum'));
console.log(stingLength('javascript is cool'));
// або так
let stingArray = ['hello world', 'lorem ipsum', 'javascript is cool']
for (let str of stingArray){
    console.log(str.length);
}
// - Перевести до великого регістру наступні стрінгові значення
let lover = [ 'hello world', 'lorem ipsum', 'javascript is cool']
for (let str of lover) {
    console.log(str.toUpperCase());
}
//- Перевести до нижнього регістру настипні стрінгові значення
let upper = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (let str of upper){
    console.log(str.toLowerCase())
}
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
str = ' dirty string   '
let clearString = str.trim();
console.log(clearString)
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let strtask = 'Ревуть воли як ясла повні';
let stringToarray = (string) => {
   const newArray = string.split(' ');
    return newArray;
}
let arr = stringToarray(strtask);
console.log(arr);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbersArray = [10,8,-7,55,987,-1011,0,1050,0];
let strArray = numbersArray.map(value => value.toString())
console.log(strArray)
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
nums.sort((num1,num2) =>{
    return num2-num1;
})
console.log(nums);
nums.sort((num1,num2)=>{
    return num1-num2
})
console.log(nums)
//  - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}];
const map = coursesAndDurationArray
    .sort((a,b) => b.monthDuration-a.monthDuration)
    .filter(value => value.monthDuration>5)
    .map((value, index) => {
        value.id = index+1;
        return value;
    })
console.log(map);
// описати колоду карт (від 6 до туза без джокерів)
const cardDeck =[]
const cardSuits = ['diamonds','hearts','spades','clubs'];
const cardValues = ['6','7','8','9','10','jack','queen','king','ace'];
for (let suits of cardSuits){
    for (cardValue of cardValues){
        const cards ={cardSuit:suits,cardValue:cardValue}
        if(suits === 'diamonds' || suits=== 'hearts'){
            cards.color='red';
        }else {
            cards.color='black';
        }
        cardDeck.push(cards);
        }
    }
console.log(cardDeck);
console.log(cardDeck.find(card=> card.cardValue === 'ace'&& card.cardSuit === 'spades'));
console.log(cardDeck.filter(card => card.cardValue ==='6'));
console.log(cardDeck.filter(card => card.color ==='red'));
console.log(cardDeck.filter(card => card.cardSuit === 'diamonds'));
console.log(cardDeck.filter(card => card.cardSuit ==='clubs' && (card.cardValue !== '6' || card.cardValue !=='7' || card.cardValue !== '8' )))

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let newCardDeck = cardDeck.reduce((cardSuitNew,card) =>{
if(card.cardSuit === 'hearts'){
cardSuitNew.hearts.push(card)
}
else if(card.cardSuit === 'diamonds'){
    cardSuitNew.diamond.push(card)
}
else if(card.cardSuit === 'spades'){
    cardSuitNew.spade.push(card)
}
else if(card.cardSuit === 'clubs'){
    cardSuitNew.club.push(card)
}
return cardSuitNew;}, {hearts:[],diamond:[],spade:[],club:[]});
console.log(newCardDeck);
// --написати пошук всіх об'єктів, в яких в modules є sass
console.log('________________________________')
let coursesArray = [
    {
        title:'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title:'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let sassIncludec = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassIncludec);
// --написати пошук всіх об'єктів, в яких в modules є docker
let dockerIncludes = coursesArray.filter(course => course.modules.includes('docker'));
console.log(dockerIncludes)










