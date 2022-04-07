let adress = document.querySelector('#adress')
let username = document.querySelector('#username')
let phone = document.querySelector('#phone')
let email = document.querySelector('#email')
let cep = document.querySelector('#adress')
let bairro = document.querySelector('#bairro')
let localidade = document.querySelector('#localidade')
let uf = document.querySelector('#uf')

buttonRegister = document.querySelector('#register')

adress.addEventListener('blur',e =>{   
    fetch('https://viacep.com.br/ws/'+cep.value+'/json/')
    .then(function(result){
        return result.json();
    }).then(function(result){
        console.log(result)
        bairro.value = result.bairro;
        bairro.disabled = true;

        localidade.value = result.localidade;
        localidade.disabled = true;

        uf.value = result.uf;
        uf.disabled = true;

        console.log(result.bairro)
    })

})

buttonRegister.addEventListener('click', e =>{
    e.preventDefault();
    

})