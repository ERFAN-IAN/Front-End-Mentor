let color=document.querySelectorAll('.color');
let colorText= document.querySelectorAll('.caption');
let card = document.querySelectorAll('.card');
for(let i=0;i<color.length;i++){
    let num = "#"+Math.floor(Math.random()*16777215).toString(16);
    let array=[]
    while(num.length<7 || array.includes(num)){
        num = "#"+Math.floor(Math.random()*16777215).toString(16);
    }
    array.push(num)
    color[i].style.background=num;
    colorText[i].textContent=num;
    card[i].addEventListener("click", function(){
        navigator.clipboard.writeText(colorText[i].textContent)})
}