const form = document.getElementById('form-numero');

function validaNumeros(numB, numA){
    return numB > numA;
}
form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();

    const numeroA = document.getElementById('numero-A');
    const numeroB = document.getElementById('numero-B');

    formValido = validaNumeros(numeroB.valueAsNumber, numeroA.valueAsNumber)
    if(formValido) {
        alert("tudo certo");
    }else{
        alert("o numero A tem que ser menor que o numero B");
    }

})

    
    
console.log(form);