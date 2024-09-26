
const form = document.getElementById('form-valor');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

function validaNumero(valorA, valorB){
    const numA = parseFloat(valorA.value);
    const numB = parseFloat(valorB.value);
    
    return numB > numA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(validaNumero(campoA, campoB)) {
        alert('O valor B é maior que o valor A.\nEstá correto!');
        location.reload();
    } else {
        alert('O valor B deve ser maior que o valor A.\nPor favor, digite novamente!');        
    }
});



