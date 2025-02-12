function  calculateArea (a,b){
    let area = a*b;
    console.log(area);
}
calculateArea(2,2);
console.log('________');
function circleArea (r){
    let area = 3.14*r*r;
    console.log(area);
}
circleArea(3);
console.log('________');
function cylinderArea (h,r){
    let area = 2*3.14*r*h;
    console.log(area)
}
cylinderArea(2,5);

console.log('________');
function array (arr){
    console.log(arr);
    document.write(`<h1>${arr}</h1>`)
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
array([2,3,4,5,6,7]);
console.log('________');
function writer (text){
    document.write(`<p>${text}</p>`)
}
writer('privet');
console.log('________');
function ulWriter(text){
    document.write(`
    <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>
    `)
}
ulWriter('create ul and li')
console.log('________');
function  ulWtiter2(text, y){
    document.write(`<ul>`)
    for (let i=1;i<=y;i++)
    {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ulWtiter2('privet',10);
console.log('________');
function ulWriter3(array){
    document.write(`<ul>`);
    for(let i=0;i<array.length;i++){
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}
ulWriter3([1,2,3,4,5,6,'privet',false])
console.log('________');
function objWriter(obj){
    for(let ob of obj){
        document.write(`<div>${ob.id} - ${ob.name} - ${ob.age}</div>`)
    }
}
objWriter([
    {id:1, name:'vasya', age:30},
    {id:2, name:'vasya', age:30},
    {id:3, name:'vasya', age:30},
    {id:5, name:'vasya', age:30},
    {id:6, name:'vasya', age:30}
    ])
console.log('________');
function minimalNumber(array){
    let x = array[0];
    for (let i=1;i<array.length;i++){
        x = array[i];
        if(array[i]<x){
            x=array[i+1]
        }
    }
    console.log(x);
}
minimalNumber([1,2,3,4,5,6,-1]);
console.log('________');
function sum(array){
    let x =0;
    for (let number of array) {
        x += number;
    }
 return x;
}
console.log(sum([1,2,10]));
console.log('________');
function swap(array,index1,index2){
    let x =array[index1]
    array[index1]=array[index2];
    array[index2]=x
  return array;
}
console.log(swap([1,2,3,4,5],3,4));
console.log('________');
function exchange(sumUAN,currencyValues,exchangeCurrency){
    document.write(`<div><h1>Ви, обмінюєте ${sumUAN} грн. у ${exchangeCurrency} </h1>`)
         for (let y of currencyValues){
             if(y.currency === exchangeCurrency){
                 document.write(`<p>${sumUAN/y.value}  ${exchangeCurrency}</p>`)
                 break;
         }
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')
