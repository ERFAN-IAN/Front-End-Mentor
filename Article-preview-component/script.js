const share=document.querySelector('#share');
const popup=document.querySelector('.popup');
const fontAwesome=document.querySelector('.fas');
const popupdesktop=document.querySelector('.popupdesktop');
share.addEventListener('click',()=>{
    if(popup.style.bottom=="0rem" && window.innerWidth<850){
        popup.style.bottom="-4rem"
        share.style.backgroundColor="hsl(210, 46%, 95%)"
        fontAwesome.style.color="gray"
    }else if(window.innerWidth<850){
        popup.style.bottom="0rem"
        share.style.backgroundColor="hsl(212, 23%, 69%)"
        fontAwesome.style.color="white"
    }
    if(window.innerWidth>850 && popupdesktop.classList.contains('hide')){
        popupdesktop.classList.remove('hide')
    }else if(window.innerWidth>800 && popupdesktop.classList.contains('hide')==false){
        popupdesktop.classList.add('hide')
    }
})
function hide(){
    if(window.innerWidth>850){
        popup.style.display="none";
        share.style.backgroundColor="hsl(210, 46%, 95%)"
        fontAwesome.style.color="gray"
    }
    if(window.innerWidth<=850 && popup.style.bottom=="0rem"){
        share.style.backgroundColor="hsl(212, 23%, 69%)"
        fontAwesome.style.color="white"
    }
    if(window.innerWidth<=850){
        popup.style.display="flex";
        popupdesktop.classList.add('hide')
    }
}
window.addEventListener('resize', hide)
