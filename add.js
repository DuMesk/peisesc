function adicionarDiv() {
    // Obtém o template e clona o conteúdo
    const template = document.getElementById('templateDiv');
    const clone = template.content.cloneNode(true);

    // Adiciona a nova div ao container
    const container = document.getElementById('containerDiv');
    container.appendChild(clone);
}

function removerDiv(botao) {
    // Remove a div que contém o botão clicado
    const divParaRemover = botao.closest('.componente');
    divParaRemover.remove();
}
