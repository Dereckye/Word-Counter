document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('texto');
    const numCaracteres = document.getElementById('numCaracteres');
    const numPalavras = document.getElementById('numPalavras');
    const numLinhas = document.getElementById('numLinhas');

    textarea.addEventListener('input', function () {
        const texto = textarea.value;
        const caracteres = texto.length;
        const palavras = texto.split(/\s+/).filter(function (word) {
            return word.length > 0;
        }).length;
        const linhas = texto.split(/\n/).length;

        numCaracteres.innerText = caracteres;
        numPalavras.innerText = palavras;
        numLinhas.innerText = linhas;
    });
});
