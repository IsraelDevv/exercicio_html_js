    document.addEventListener('DOMContentLoaded', function () {
    
    function validarFormulario(event) {
        event.preventDefault(); 
        
        var valorA = parseFloat(document.querySelector('input[placeholder="Campo A"]').value);
        var valorB = parseFloat(document.querySelector('input[placeholder="Campo B"]').value);
        
        if (valorB > valorA) {
            alert('Formulário válido! B é maior que A.');
        } 
        else {
            alert('Formulário inválido! B deve ser maior que A.');
        }
    }
    
    document.querySelector('form').addEventListener('submit', validarFormulario);
});

