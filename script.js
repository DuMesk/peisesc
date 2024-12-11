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

    const telefoneInputs = document.querySelectorAll('.tel');

    telefoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
            valor = valor.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona o parêntese
            valor = valor.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o hífen
            e.target.value = valor.substring(0, 15); // Limita o tamanho
        });
    });

    document.getElementById('buscar').addEventListener('click', () => {
        const cep = document.getElementById('cep').value;
    
        // Verifica se o CEP é válido
        if (!/^\d{8}$/.test(cep)) {
            alert('Por favor, insira um CEP válido com 8 dígitos.');
            return;
        }
    
    // Chama a API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao buscar o CEP');
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                document.getElementById('cep2').innerText = 'CEP não encontrado.';
                return;
            }

            // Exibe o resultado
            document.getElementById('cep2').innerHTML = `
                <p>${data.logradouro}  |  ${data.bairro}  |  ${data.localidade}  |  ${data.uf}</p>
            `;
        })
        .catch(error => {
            document.getElementById('cep2').innerText = 'Erro ao buscar o CEP.';
            console.error(error);
        });
    });
