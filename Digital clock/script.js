setInterval(mother, 1000);
let helper=0
let helperm=0
let rotateS= document.querySelector('.seconds');
let test = document.querySelector('[data-second-front]')
function setTime(){
    let time= new Date;
    let frontSecond= document.querySelector('[data-second-front]')
    let backSecond= document.querySelector('[data-second-back]')
    let fronthour= document.querySelector('[data-hour-front]')
    let frontMinute = document.querySelector('[data-minute-front')
    let second=time.getSeconds();
    let hour=time.getHours();
    let minute=time.getMinutes();
    frontSecond.textContent=second;
    backSecond.textContent=second;
    fronthour.textContent=hour;
    frontMinute.textContent=minute;
    console.log(helperm)
    console.log(minute)
    let animationMinute = document.querySelector('.minutes');
    let animationHour = document.querySelector('.hours');
    if (helperm!=minute && helperm!=0){
        animationMinute.style.animationName="rotateh"
        animationMinute.style.animationDuration="400ms"   
    }else{
        animationMinute.style.animationName="rotatehh"
    }
    if (helper!=hour && helper!=0){
        animationHour.style.animationName="rotateh"
        animationHour.style.animationDuration="400ms"
    }else{
        animationHour.style.animationName="rotatehh"
    }
    helper=hour
    helperm=minute

}
function color(){
    let color = document.querySelectorAll('.face');
    for(let i=0;i<color.length;i++){
        let num = "#"+Math.floor(Math.random()*16777215).toString(16);
        while(num.length<7){
            num = "#"+Math.floor(Math.random()*16777215).toString(16);
        }
        color[i].style.background=num;
    }
}
function mother(){
    setTime()
    color()
}
let animationSecond = document.querySelector('.seconds');
animationSecond.style.animationName="rotate";
