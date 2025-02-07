// task 1
let arrayTask1 = ['privet',1,2,3,4,5,6,7,8,9];
console.log(arrayTask1);
console.log(arrayTask1[0]);
console.log(arrayTask1[1]);
console.log(arrayTask1[2]);
console.log(arrayTask1[3]);
console.log(arrayTask1[4]);
console.log(arrayTask1[5]);
console.log(arrayTask1[6]);
console.log(arrayTask1[7]);
console.log(arrayTask1[8]);
console.log(arrayTask1[9]);
// task 2
let  book1 = {
    title:'primer',
    pageCount:100,
    genre:'novel'
}
let  book2 = {
    title:'roadside picnic',
    pageCount:100,
    genre:'dystopia'
}
let  book3 = {
    title:'kobzar',
    pageCount:100,
    genre:'poetry'
}
console.log(book1);
console.log(book2);
console.log(book3);
//task 3
let  book4 = {
    title:'kobzar',
    pageCount:100,
    genre:'poetry',
    authors:[
        {name:'fsdjfs',age:20},
        {name:'eqweqwe',age:1120}
    ]
}

let  book5 = {
    title:'roadside picnic',
    pageCount:100,
    genre:'dystopia',
    autors:[
        {name:'dsfhsdfbvnbcvbcvbc',age:228},
        {name:'zxczxcz',age:1946}
    ]
}
let  book6 = {
    title:'sdfsdf',
    pageCount:2223,
    genre:'pdfsdfsdfy',
    autors:[
        {name:'fsdfsdfsdf',age:13},
        {name:'bofsdfs',age:33}
    ]
}
console.log(book4,book5,book6);
// task 4
let user1 = {name:'vasya',username:'vasya228',password:'zzzxxxccc'};
let user2 = {name:'askold',username:'askold13',password:'1488'};
let user3 = {name:'frodo',username:'sauron',password:'eatmorerice'};
let user4 = {name:'virus',username:'ebola',password:'killallpeople'};
let user5 = {name:'hip-hop',username:'indaclub',password:'party'};
let user6 = {name:'rock-listener',username:'itsmylife',password:'11223344'};
let user7 = {name:'bob',username:'jhon',password:'dasdvd2342344'};
let user8 = {name:'lol',username:'kek',password:'4eburek'};
let user9 = {name:'asdasdasd',username:'sfddsdfds',password:'fsdfsdf'};
let user10 = {name:'afsdfxxxx',username:'42342fdsfsf',password:'fgdfgcvbcvbdrtgergfdf'};
console.log(user1.password, user2.password, user3.password, user4.password, user5.password, user6.password, user7.password, user7.password, user8.password, user9.password, user10.password);
//task 5.1
let temps5=[
    [0,-1,2],
    [-5,-1,2],
    [2,3,2],
    [1,3,2],
    [1,3,5],
    [1,3,5],
    [-5,-3,-4]
]
console.log(temps5);
//task 5.2
let monday={
    day:'monday',
    morning:-2,
    afternoon:0,
    evening:-1
};
let tuesday={
    day:'tuesday',
    morning:-2,
    afternoon:0,
    evening:-1
};
let wednesday   ={
    day:'wednesday',
    morning:-2,
    afternoon:0,
    evening:-1
};
let thursday={
    day:'thursday',
    morning:-2,
    afternoon:0,
    evening:-1
};
let friday={
    day:'friday',
    morning:-2,
    afternoon:0,
    evening:-1
};
let saturday={
    day:'saturday',
    morning:-2,
    afternoon:0,
    evening:-1,
};
let sunday={
    day:'sunday',
    morning:-2,
    afternoon:0,
    evening:-1,
};
let temp=[monday, tuesday, wednesday, thursday, friday, saturday, sunday];
console.log(temp);
//task 6
let y = prompt('введіть число:');
if (+y != 0 ){
    alert ('true');
}else {
    alert ('false')
}
//tasl 7
let x = 16;
if (x>0 && x< 16){
    console.log('в першу чверть');
}
else if (x>15 && x < 30){
    console.log('в другу чверть');
}
else if (x>30 && x<45){
    console.log('в третю чтверть');
}
else if (x>45 && x<60 ){
    consloe.log('в четвету чверть');
}
//task 8
let day =  prompt('введіть день місяця');
    if (+day>0 && +day<11) {
        console.log('1-ша декада');
    }else if (+day>10 && +day < 20){
        console.log('2-га декада');
    }else if (+day>19 && +day <32){
        console.log('3-тя декада');
    } else {
        alert('?????');
    }
//task 9
let dayNumber = prompt('введіть день тиждня:');
    switch (dayNumber){
        case '1':
            console.log('fsdfs')
            console.log('fsdfs')
            console.log('fsdfs')
            break;
        case '2':
            console.log('2323');
            console.log('2323');
            console.log('2323');
            console.log('2323');
            break;
        case '3':
            console.log('333333');
            console.log('333333');
            console.log('333333');
            console.log('333333');
            break;
        case '4':
            console.log('44444444');
            console.log('44444444');
            console.log('44444444');
            console.log('44444444');
            console.log('44444444');
            break;
        case '5':
            console.log('5555555');
            console.log('5555555');
            console.log('5555555');
            console.log('5555555');
            console.log('5555555');
            console.log('5555555');
            break;
        case '6':
            console.log('english');
            console.log('english');
            console.log('english');
            console.log('english');
            console.log('english');
            console.log('english');
            break;
        case '7':
            console.log('sleep');
            console.log('sleep');
            console.log('sleep');
            console.log('sleep');
            console.log('sleep');
            console.log('sleep');
    }
// tasl 10
let numberOne = prompt ('введіть перше число для порівняння');
let numberTwo = prompt ('введіть друге число для порівняння');
if (+numberOne>+numberTwo){
    console.log('більше число: '+numberOne);
}else if (+numberTwo>+numberOne){
    console.log('більше число: '+numberTwo);
}else if (+numberOne===+numberTwo){
    alert('ви ввели рівні числа');
}
// task 11
let xTask = prompt('Введіть щось');
if (+xTask === 0 || xTask === false || xTask==='' || xTask===null || xTask === NaN || xTask === undefined){
    xTask='default'
    console.log(xTask);
}else {
    console.log(xTask);
}
// tsak 12
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('super')
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('super')
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('super')
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('super')
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('super')
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('super')
}