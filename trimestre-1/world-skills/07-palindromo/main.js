const btn = document.querySelector('.btn');
const result = document.querySelector('.resultado');

btn.addEventListener('click', palindromo);

function palindromo(){
    
    const word = document.querySelector('.word').value;

    if (word == ""){
        result.innerHTML = "Ingrese una palabra.";
    } else{
        const rep = word.replace(/[\W_]/g,''); //Quitar espacios, -, /
        const lowered = rep.toLowerCase(); //añadir minuscula
        const splitted = lowered.split(''); //separa con coma cada letra
        const reverse = splitted.reverse(); //Invierte las letras
        const joined = reverse.join(''); //Une las letras

        if(lowered == joined) {
        result.innerHTML = `${word} Es un palindromo`
    } else {
        result.innerHTML = `${word} No es un palindromo`
    }
    }
}