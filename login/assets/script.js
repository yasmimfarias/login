let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let botao = document.querySelector('#btn');

function alteracao(){
    if(senha.getAttribute('type') === 'text'){
        senha.setAttribute('type','password')   
    } else {
        senha.setAttribute('type', 'text')
    }
};


    

