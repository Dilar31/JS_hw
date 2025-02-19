const canvas = document.getElementById('gameField');
const ctx = canvas.getContext("2d")
function drawRood() {
        ctx.beginPath();
        ctx.moveTo(250,1000);
        ctx.lineTo(400,450);
        ctx.strokeStyle ="black" ;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.moveTo(400,450);
        ctx.lineTo(400,650);
        ctx.lineWidth = 0.8;
        ctx.stroke()
        ctx.moveTo(400,650);
        ctx.arc(402,652,2,0,Math.PI, false)
        ctx.stroke()
}
drawRood();
function throwRood(){
    let x = getRandomIntInclusive(200,500);
    let y = getRandomIntInclusive(500,700);
    void ctx.clearRect(0, 0, 700,800);
    ctx.beginPath();
    ctx.moveTo(250,1000);
    ctx.lineTo(600,450);
    ctx.strokeStyle ="black" ;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.moveTo(600,450);
    ctx.lineTo( x,y);
    ctx.lineWidth = 0.8;
    ctx.stroke();
    drawFloat();
    function drawFloat(){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, 1, -15);
        ctx.stroke();
    }
    fishOnAHook(x,y)
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}
let button = document.getElementById('optionalButton');
button.addEventListener('click',() =>{
if (button.innerText === 'Закинути вудку'){
    button.innerText = 'Дістати вудку';
    throwRood()
}else if(button.innerText === 'Дістати вудку'){
    clearTimeout(fishTimeout);
    button.innerText = 'Закинути вудку'
    void ctx.clearRect(0, 0, 700,800);
    drawRood()
}else if (button.innerText === 'Підсікай'){
    createFish(fishCollector);
    clearTimeout(fishTimeout);
    button.innerText = 'Закинути вудку'
    void ctx.clearRect(0, 0, 700,800);
    drawRood()

}
})

let fishTimeout;
function fishOnAHook(a,b) {
    fishTimeout = setTimeout(() =>{
    ctx.beginPath()
        ctx.strokeStyle = 'white'
        ctx.arc(a, b, 3, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.arc(a, b, 6, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.arc(a, b, 9, 0, Math.PI * 2, true);
        ctx.stroke();
    button.innerText = 'Підсікай';
    setTimeout(()=>{
        if(button.innerText === 'Підсікай'){
            button.innerText = 'Риба втекла!';
            setTimeout(()=>{
                button.innerText = 'Закинути вудку'
                void ctx.clearRect(0, 0, 700,800);
                drawRood()
            },1000)
        }
    },3000)
    },Math.random() * 5000 +5000);

}

function createFish (obj){
   let y = getRandomIntInclusive(1,5)
    let z = getRandomIntInclusive(0,2)
    for(const x of obj){
        if (x.id ===y ){
            for (let weight of x.weight){
           let d =  document.querySelector('.fishlist')
            d.innerHTML = `<li>${x.name} - ${x.weight[z]} </li>`
        }
}
}
}



fishCollector = [
    {id:1,name:'plotva',weight:['100 gramm','200 gramm','300 gramm']},
    {id:2,name:'karas',weight:['100 gramm','200 gramm','300 gramm']},
    {id:3,name:'perch',weight:['100 gramm','200 gramm','300 gramm']},
    {id:4,name:'pike',weight:['100 gramm','200 gramm','300 gramm']},
    {id:5,name:'sapog',weight:['100 gramm','200 gramm','300 gramm']}
]










