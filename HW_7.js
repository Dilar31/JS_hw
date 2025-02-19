//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone){
    this.name=name;
    this.id=id;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let arrayOfUsers = [];
arrayOfUsers.push(new User(10,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
arrayOfUsers.push(new User(3,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
arrayOfUsers.push(new User(4,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
arrayOfUsers.push(new User(6,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
arrayOfUsers.push(new User(9,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
arrayOfUsers.push(new User(2,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
arrayOfUsers.push(new User(1,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
arrayOfUsers.push(new User(5,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
arrayOfUsers.push(new User(7,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
arrayOfUsers.push(new User(8,'Dima','Novikov','dfsd@fmail.com','13434534534534'));
console.log(arrayOfUsers);

//  Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
arrayOfUsers.filter(value => {
    if (value.id % 2===0){
        console.log(value)
    }
})

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
arrayOfUsers.sort((a,b)=>a.id-b.id);
console.log(arrayOfUsers);
//  #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function UserAndOrder (id,name,surname,email,phone,order){
    this.name=name;
    this.id=id;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order=order
}
let arrayOfUsersAndOrder = [];
arrayOfUsersAndOrder.push(new UserAndOrder(1,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar']));
arrayOfUsersAndOrder.push(new UserAndOrder(2,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar','tea']));
arrayOfUsersAndOrder.push(new UserAndOrder(3,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar','tea','fsdfs']));
arrayOfUsersAndOrder.push(new UserAndOrder(4,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar','tea','fsdfs']));
arrayOfUsersAndOrder.push(new UserAndOrder(5,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar','tea','sdfsdf','sdfsdfsdf']));
arrayOfUsersAndOrder.push(new UserAndOrder(6,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar','tea']));
arrayOfUsersAndOrder.push(new UserAndOrder(7,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar','tea']));
arrayOfUsersAndOrder.push(new UserAndOrder(8,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar','tea']));
arrayOfUsersAndOrder.push(new UserAndOrder(9,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar','tea']));
arrayOfUsersAndOrder.push(new UserAndOrder(10,'Dima','Novikov','dfsd@fmail.com','13434534534534',['milk','sugar','tea']));
console.log(arrayOfUsersAndOrder);
//#8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
arrayOfUsersAndOrder.sort((a,b)=>a.order.length-b.order.length);
console.log(arrayOfUsersAndOrder);

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function CarCreator (model,manufacturer,year,maxspeed,volume){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.maxspeed=maxspeed;
    this.volume=volume;
}

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
CarCreator.prototype.drive = function(){
    return `Їдемо зі швидкістю  ${this.maxspeed} кілометрів на годину`
}
let car = new CarCreator('copeyka','ussr',1971,20000,4);
console.log(car);
console.log(car.drive());;
//   -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
CarCreator.prototype.info = function (){
    for (let value in car) {
        if (car.hasOwnProperty(value)) //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty брав звідси інфу
        {
        console.log(`${value} - ${car[value]}`)
    }
    }
}
car.info();
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
CarCreator.prototype.increaseMaxSpeed = function(newspeed){
    car.maxspeed = car.maxspeed + newspeed
    return `проапгрейили двигун і зараз максимальна швидкість станвоить ${car.maxspeed}`
};
console.log(car.increaseMaxSpeed(20000000));
console.log(car);
// changeYear (newValue) - змінює рік випуску на значення newValue
CarCreator.prototype.changeYear = function (newy){
    car.year = newy;
    return `новий рік випуску ${car.year}`
}
console.log(car.changeYear(228));
//    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
CarCreator.prototype.addDriver = function(obj){
    this.drivet  = obj;
}
car.addDriver({name:'dsfsd',age:23});
console.log(car);


//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class newCar{
    constructor(model, manufacturer, year, maxspeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;
    }
    drive (){
        return `їдемо зі швидкістю ${this.maxspeed} на годину`
    }

    info (){
        for (let value in this) {
            if (this.hasOwnProperty(value))
            {
                console.log(`${value} - ${this[value]}`)
            }
        }
    }

    increaseMaxSpeed (newspeed){
        this.maxspeed = this.maxspeed + newspeed
        return `проапгрейили двигун і зараз максимальна швидкість станвоить ${this.maxspeed}`
    };

    changeYear (newy){
        this.year = newy;
        return `новий рік випуску ${this.year}`
    }

    addDriver (obj){
        this.driver  = obj;
        return neewCar
    }

}
let neewCar = new newCar('kolesnica','Rome',123,25,'1kg sena')
console.log(neewCar);
console.log(neewCar.drive());
neewCar.info()
console.log(neewCar.increaseMaxSpeed(25));
console.log(neewCar.changeYear(199));
console.log(neewCar.addDriver({name: 'ffjfjfjfjf', age: 'fsdfsdf'}));
//#zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class princessCreator {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
princessCollettor=[]
let princess1 = new princessCreator('jora',31,30);
let princess2 = new princessCreator('stepan',31,31);
let princess3 = new princessCreator('kolya',31,32);
let princess4 = new princessCreator('albert',31,33);
let princess5 = new princessCreator('jhon',31,34);
let princess6 = new princessCreator('iskader',31,35);
let princess7 = new princessCreator('petro',31,36);
let princess8 = new princessCreator('arnold',31,37);
let princess9 = new princessCreator('smith',31,38);
let princess10 = new princessCreator('wesson',31,39);
princessCollettor.push(princess1);
princessCollettor.push(princess2);
princessCollettor.push(princess3);
princessCollettor.push(princess4);
princessCollettor.push(princess5);
princessCollettor.push(princess6);
princessCollettor.push(princess7);
princessCollettor.push(princess8);
princessCollettor.push(princess9);
princessCollettor.push(princess10);

class priceCreator {
    constructor(name, age, shoesize) {
        this.name = name;
        this.age = age;
        this.shoesize = shoesize;
    }
}
princeCollector = [];
let prince1 = new priceCreator('vladislava',30,39);
let prince2 = new priceCreator('marina',30,38);
let prince3 = new priceCreator('izolda',30,37);
let prince4 = new priceCreator('svetlana',30,36);
let prince5 = new priceCreator('polina',30,35);
let prince6 = new priceCreator('julia',30,34);
let prince7 = new priceCreator('liza',30,33);
let prince8 = new priceCreator('carla',30,32);
let prince9 = new priceCreator('ivy',30,31);
let prince10 = new priceCreator('inna',30,30);
princeCollector.push(prince1);
princeCollector.push(prince2);
princeCollector.push(prince3);
princeCollector.push(prince4);
princeCollector.push(prince5);
princeCollector.push(prince6);
princeCollector.push(prince7);
princeCollector.push(prince8);
princeCollector.push(prince9);
princeCollector.push(prince10);
console.log(princeCollector);



for (let x of princessCollettor){
    let findPrincess = x;
    for(let y of princeCollector){
        if(x.footsize === y.shoesize){
            console.log(`Принц ${y.name} знайшов туфельку принцеси ${x.name}`)
        }
    }
}
princessCollettor.find(value => {
    for (let x of princeCollector){
    if(value.footsize === x.shoesize)
console.log(`принц ${x.name} знайшов туфельку ${value.name}`);
}})



// *Через Array.prototype. створити власний foreach, filter;
let array= ['ewrw','rwerwe','rwerwerw','rwerwer'];
Array.prototype.myForEach = function (doThis){
const myArr = this;
for (let x of this){
    doThis(x)
}
}
array.myForEach(value =>console.log(value))
let arr = [1,2,3,4,5,6,7,8,9,10]
arr.myForEach (value =>{
    if(value % 2===0){
        console.log(value);
    }
})

let arr1 = [10,9,8,7,6,5,4,3,2,1]
arr1.myForEach(value=>{
    console.log(value * value);
})
// filter

const array2=[1,2,3,4,5,'prive',{name:'vasya',age:40}]
Array.prototype.myFilter = function (filteredObj){
    let result = [];
    for(let x of this){
        if(filteredObj(x)){
            result.push(x)
        }
    }
        return result
    }



const result = princessCollettor.myFilter(value => value.name );
console.log(result);