let accor = document.querySelectorAll('[type="checkbox"]');
for (let i=0;i<accor.length;i++){
    accor[i].addEventListener('click',mine)
}
function mine(e){
    if(e.target.checked){
        remove(e.target)
    }
}
function remove(myclick){
    for(let i=0;i<accor.length;i++){
        if(myclick!=accor[i]){
            accor[i].checked=false;
        }
    }
}