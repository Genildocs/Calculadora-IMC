
const calcular = document.getElementById('calcular');


function imc (){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && peso !== '' && altura !== '') {
        
        const valorImc = (peso / (altura*altura)).toFixed(2);

        let classificacao = "";

        if(valorImc < 18.5){
            classificacao = 'abaixo do peso.'
        }else if (valorImc <25){
            classificacao = 'peso normal.'
        }else if (valorImc <30){
            classificacao = 'com excesso de peso.'
        }else if(valorImc){
            classificacao = 'com obsidade.'
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;


    }else{
        resultado.textContent = 'Preencha todos os campos!'
    }


}


calcular.addEventListener('click', imc);