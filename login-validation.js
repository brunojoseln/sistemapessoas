let email = document.querySelector('#email')
let senha = document.querySelector('#password')
let message = document.querySelector('#message')
let buttonLogin =  document.querySelector('#login')
let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

buttonLogin.addEventListener('click',e =>{
    e.preventDefault()
    if(senha.value.length < 4 || senha.value.length > 10){
        message.innerText = "Senha ou email inválido"
        message.style.display = 'block'
    }else if(reg.test(email.value)){
            document.location = './home.html'
    }else{
        message.innerText = "Email inválido";
        message.style.display = 'block';
    }
    console.log(e)
})