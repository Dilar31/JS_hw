//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function deepCopy(obj){
    let fuctionOfObj = {}
    for (let key in obj){
        if(typeof obj[key]==='function'){
        fuctionOfObj[key] = obj[key];}
    }
    if(obj) {
        let x = JSON.stringify(obj);
        let y = JSON.parse(x);
        for (let funct in fuctionOfObj){
            y[funct] = fuctionOfObj[funct]
        }
        return y;
    }

}




const x = {
    name:'vasya',
    age:31,
    greeting(){
        console.log('hi!')
    }
}
console.log(deepCopy(x));
deepCopy(x).greeting();
//#iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((course, index)=>({...course,id:index+1})))