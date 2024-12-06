function mostrarOpcoes(modalidade) {
    const opcoesDiv = document.getElementById('opcoesDiv');
    const opcoes = document.getElementById('opcoes');

    // Mostrar a div de opções
    opcoesDiv.style.display = 'block';

    // Limpar as opções anteriores
    opcoes.innerHTML = '';

    // Gerar as opções dependendo da modalidade selecionada
    if (modalidade === 'EI') {
        opcoes.innerHTML = `
            <label><input type="radio" name="opcaoEI" value="3 anos"> 3 anos</label><br>
            <label><input type="radio" name="opcaoEI" value="4 anos"> 4 anos</label><br>
            <label><input type="radio" name="opcaoEI" value="5 anos"> 5 anos</label><br>
        `;
    } else if (modalidade === 'AI') {
        opcoes.innerHTML = `
            <label><input type="radio" name="opcaoAI" value="1º ano"> 1º ano</label><br>
            <label><input type="radio" name="opcaoAI" value="2º ano"> 2º ano</label><br>
            <label><input type="radio" name="opcaoAI" value="3º ano"> 3º ano</label><br>
            <label><input type="radio" name="opcaoAI" value="4º ano"> 4º ano</label><br>
            <label><input type="radio" name="opcaoAI" value="5º ano"> 5º ano</label><br>
        `;
    } else if (modalidade === 'AF') {
        opcoes.innerHTML = `
            <label><input type="radio" name="opcaoAF" value="6º ano"> 6º ano</label><br>
            <label><input type="radio" name="opcaoAF" value="7º ano"> 7º ano</label><br>
            <label><input type="radio" name="opcaoAF" value="8º ano"> 8º ano</label><br>
            <label><input type="radio" name="opcaoAF" value="9º ano"> 9º ano</label><br>
        `;
    } else if (modalidade === 'EM') {
        opcoes.innerHTML = `
            <label><input type="radio" name="opcaoEM" value="1ª Série"> 1ª Série</label><br>
            <label><input type="radio" name="opcaoEM" value="2ª Série"> 2ª Série</label><br>
            <label><input type="radio" name="opcaoEM" value="3ª Série"> 3ª Série</label><br>
        `;
    }
}
