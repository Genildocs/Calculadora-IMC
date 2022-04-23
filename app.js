
const calcular = document.getElementById('calcular');


function imc (){
    const nome = document.getElementById('nome');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const resultado = document.getElementById('resultado');
    
    if (nome !== ' ' ){
        alert('nome vazio!')
    }


}


calcular.addEventListener('click', imc);