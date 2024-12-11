function adicionarLinha() {
    // Referência à tabela
    const tabela = document.getElementById('tabelaProfissionais');

    // Criação de uma nova linha
    const novaLinha = tabela.insertRow();

    // Célula de "Profissionais"
    const celulaProfissional = novaLinha.insertCell(0);
    celulaProfissional.innerHTML = '<input type="text" name="profissional" style="width: 100%;" placeholder="Digite o profissional">';

    // Célula de "Nome"
    const celulaNome = novaLinha.insertCell(1);
    celulaNome.innerHTML = '<input type="text" name="nome" style="width: 100%;" placeholder="Digite o nome">';

    // Célula de "Contato"
    const celulaContato = novaLinha.insertCell(2);
    celulaContato.innerHTML = '<input type="number" name="tel" style="width: 100%;" placeholder="Digite o telefone">';

    // Célula de "Excluir"
    const celulaExcluir = novaLinha.insertCell(3);
    celulaExcluir.innerHTML = '<button class="btn-remove" onclick="removerLinha(this)">X</button>';
}

function removerLinha(botao) {
    // Encontra a linha do botão e remove
    const linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}
