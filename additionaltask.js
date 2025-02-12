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

