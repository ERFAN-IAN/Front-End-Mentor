const test=document.querySelector('[type=submit]')
const myRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const error=document.querySelector('#error')
const please=document.querySelector('#please')
test.addEventListener('click',(e)=>{
    e.preventDefault();
    const mail=document.querySelector("#email")
    if(mail.value.match(myRegex)){
        mail.style.border="2px solid #DBCBCC"
        console.log(mail);
        error.classList.add('hide')
        please.classList.add('hide')
    }else{
        mail.style.border="2px solid red"
        error.classList.remove('hide')
        please.classList.remove('hide')
    }
    
})