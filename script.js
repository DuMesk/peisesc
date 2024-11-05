function atualizarDescricao() {
    const select = document.getElementById("opcoes");
    const descricaoDiv = document.getElementById("descricao");
    const valorSelecionado = select.value;
    const descricoes = {
        "116A02.0": "TEA- Transtorno do Espectro Autista.",
        "6A05.5": "TDAH - Transtorno do déficit de atenção e Hiperatividade Transtorno misto de Depressão e Ansiedade.",
        "6A05.0": "TPAC - Transtorno do Processamento Auditivo Central.",
        "6A73": "Transtorno misto de ansiedade e depressão."
    };
    descricaoDiv.textContent = descricoes[valorSelecionado] || "";
}

function selecionarImagem() {
    // Abre o seletor de arquivos
    document.getElementById("imagem-input").click();
}

document.getElementById("imagem-input").addEventListener("change", function(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "100px"; // Ajuste o tamanho da imagem conforme necessário
            img.style.height = "auto";

            const cell = document.getElementById("imagem-cell");
            cell.innerHTML = ""; // Limpa o conteúdo atual da célula
            cell.appendChild(img); // Adiciona a imagem à célula
        };

        reader.readAsDataURL(file);
    }
});