function atualizarDescricao() {
    const select = document.getElementById("laudo");
    const descricaoDiv = document.getElementById("descricao");
    const valorSelecionado = select.value;
    const descricoes = {
        "116A02.0": "TEA - Transtorno do Espectro Autista.",
        "6A05.5": "TDAH - Transtorno do déficit de atenção e Hiperatividade.",
        "6A05.0": "TPAC - Transtorno do Processamento Auditivo Central.",
        "6A73": "Transtorno misto de ansiedade e depressão."
    };
    descricaoDiv.textContent = descricoes[valorSelecionado] || "";
}

function adicionarDescricao() {
    const select = document.getElementById("laudo");
    const descricaoTable = document.getElementById("descricaoTable").querySelector("tbody");
    const valorSelecionado = select.value;

    const descricoes = {
        "116A02.0": "TEA - Transtorno do Espectro Autista.",
        "6A05.5": "TDAH - Transtorno do déficit de atenção e Hiperatividade.",
        "6A05.0": "TPAC - Transtorno do Processamento Auditivo Central.",
        "6A73": "Transtorno misto de ansiedade e depressão."
    };

    // Verifica se foi selecionada uma opção válida
    if (!valorSelecionado) {
        alert("Por favor, selecione uma opção.");
        return;
    }

    // Verifica se o código já foi adicionado
    const linhasExistentes = Array.from(descricaoTable.querySelectorAll("tr"));
    if (linhasExistentes.some(linha => linha.cells[0].textContent === valorSelecionado)) {
        alert("Este código já foi adicionado.");
        return;
    }

    // Cria uma nova linha na tabela
    const novaLinha = document.createElement("tr");

    const colunaCodigo = document.createElement("td");
    colunaCodigo.textContent = valorSelecionado;

    const colunaDescricao = document.createElement("td");
    colunaDescricao.textContent = descricoes[valorSelecionado];

    // Cria a coluna de ações com o "X" para remoção
    const colunaAcoes = document.createElement("td");
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "X";
    btnRemover.style.color = "red";
    btnRemover.style.border = "1px solid red";
    btnRemover.style.background = "white";
    btnRemover.style.cursor = "pointer";
    btnRemover.style.padding = "2px 5px";
    btnRemover.style.borderRadius = "4px";

    // Função para remover a linha
    btnRemover.onclick = function () {
        descricaoTable.removeChild(novaLinha);
    };

    // Adiciona o botão "X" à coluna de ações
    colunaAcoes.appendChild(btnRemover);

    // Adiciona as colunas à linha
    novaLinha.appendChild(colunaCodigo);
    novaLinha.appendChild(colunaDescricao);
    novaLinha.appendChild(colunaAcoes);

    // Adiciona a linha ao corpo da tabela
    descricaoTable.appendChild(novaLinha);
}
