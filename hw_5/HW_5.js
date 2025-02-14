console.log('_________');
let calc = (a,b) => a*b;
console.log(calc(2,3));
console.log('_________');
let calcСircleArea = (a)=> 3.14*a*a;
console.log(calcСircleArea(10));
console.log('_________');
let calcCylinder = (a,b) => 2*3.14*a*b;
console.log(calcCylinder(5,6));
console.log('_________');
let printArray = (arr)=> {
    for (let x of arr){
        console.log(x);
    }
}
printArray([1, 2, 3, 4, 5, 'privet', true]);
console.log('_________');
let pWriter = (text) => document.write(`<p>${text}</p>`);
pWriter('hekki');
console.log('_________');
let ulWriter = (ul) => document.write(`<ul>
<li>${ul}</li>
<li>${ul}</li>
<li>${ul}</li>
</ul>
`);
ulWriter('new ul and li');
console.log('_________');
let ulWriter2 = (text,count) =>{ document.write(`<ul>`)
        for (let i =0;i < count; i++){
        document.write(`<li>${text}`);
        }
document.write(`</ul>`)}
ulWriter2('sdfsdfsdf',10);
console.log('_________');
let arrayWriter = (arr) =>{
    document.write(`<ul>`)
    for(let i = 0; i <arr.length; i++){
        document.write(`<li>${arr[i]}`)
    }
    document.write(`</ul>`)
}
arrayWriter([1,2,3,4,5,'3123123',true,false])
console.log('_________');
let objWriter = (obj) =>{
    for (x of obj){
        document.write(`<div>`);
        document.write(`<p>${x.id} - ${x.name} - ${x.age}`);
        document.write(`</div`);

    }
}
objWriter([{id:1,name:'3123123',age:30}, {id:2,name: 'asdasdas',age: 20}]);
console.log('_________');
let minArray = (array) =>{
    let x = array[0];
    for (y of array){
        if(y<x){
            x=y;
        }
    }
    return x;
}
console.log(minArray([1,2,3,4,5,-11]));
console.log('_________');
let calcSumArray = (arr) =>{
    let result = 0;
    for (let i = 0; i <arr.length;i++){
        result += arr[i]
    }
    return result;
}
console.log(calcSumArray([1,2,10]))
console.log('_________');
let arraySwap = (arr,index1, index2) =>{
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2 ]= x;
    return arr;
}
console.log(arraySwap([1,2,3,4,5,6],4,5));
console.log('_________');
let exchange = (sumUAN,currencyValues,exchangeCurrency)=> {
    document.write(`<div><h1>Ви, обмінюєте ${sumUAN} грн. у ${exchangeCurrency} </h1>`)
    for (let y of currencyValues) {
        if (y.currency === exchangeCurrency) {
            document.write(`<p>${sumUAN / y.value}  ${exchangeCurrency}</p>`)
            break;
        }
    }
}
    exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')