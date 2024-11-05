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

function adicionarTabela() {
    // Cria um novo elemento de tabela
    const novaTabela = document.createElement("table");
    novaTabela.innerHTML = `
        <div>
            <div>
                <h3>INFORMAÇÕES GERAIS DO COMPONENTE CURRICULAR: 
                    <select id="coletivo" name="coletivo">
                        <option value="vazio"></option>
                        <option value="Adbel">Adbel Pereira dos Santos</option>
                        <option value="Juliane">Juliane de Souza Silva</option>
                        <option value="Camila">Camila Brotto Fische</option>
                        <option value="Edu">Edu Silva de Mesquita</option>
                        <option value="Elves">Elves Ferreira da Costa</option>
                        <option value="Sik">Sikandra - Lis Fonseca Paulinelli G. Silveira</option>
                        <option value="Tiago">Tiago de Almeida Diniz</option>
                    </select>
                    PROFESSOR: <select id="coletivo" name="coletivo">
                        <option value="vazio"></option>
                        <option value="Adbel">Adbel Pereira dos Santos</option>
                        <option value="Juliane">Juliane de Souza Silva</option>
                        <option value="Camila">Camila Brotto Fische</option>
                        <option value="Edu">Edu Silva de Mesquita</option>
                        <option value="Elves">Elves Ferreira da Costa</option>
                        <option value="Sik">Sikandra - Lis Fonseca Paulinelli G. Silveira</option>
                        <option value="Tiago">Tiago de Almeida Diniz</option>
                    </select>
                    MATRÍCULA: <input type="number" name="matricula" placeholder="Digite sua matrícula"> 
                </h3> <br>
            </div>
            <table>
                <tr>
                    <td>
                        <p>OBJETIVOS PRIORIZADOS NO SEMESTRE: <span class="verm">(comportamentos, habilidades/competências e saberes que o professor deseja que o estudante desenvolva com o término da disciplina.)</span> <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>OBJETIVOS DA DISCIPLINA AO TÉRMINO DO ANO LETIVO: <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>OBJETIVOS ESPECÍFICOS DA DISCIPLINA: <span class="verm">(intermediários e pequenos para alcançarem os pré-requisitos não que estão em processo de aprendizagem) </span> <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>CONTEÚDOS PRIORIZADOS NO SEMESTRE/ SABERES A SEREM CONSTRUÍDOS: <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>METODOLOGIAS ESPECÍFICAS: <span class="verm">(condições de ensino que serão criadas para desenvolver os objetivos/conteúdos) </span> <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>AVALIAÇÃO: <span class="verm">(processos avaliativos que visam estabelecer parâmetros de revisão e/ou promoção dos objetivos) </span> </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Atividades avaliativas dos Projetos Globais: <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Atividades avaliativas específicas da disciplina: <span class="verm">(intermediários e pequenos para alcançarem os pré-requisitos não que estão em processo de aprendizagem) </span> <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
            </table> <br>
            <table>
                <tr>
                    <td style="text-align: justify; font-size: 14pt; background-color: #e6ae6f;"><p>HABILIDADES BIOPSICOSSOCIAIS: <span class="vermama">(PROFESSOR CONSELHEIRO RESPONDE) </span></p> <p>Envolve as habilidades conceituais, sociais e práticas adquiridas pelas pessoas para funcionarem em suas vidas diárias. Exemplos: Linguagem, leitura e escrita, conceitos de dinheiro, autodirecionamento, estabelecer a relação significado – significante de modo que o estudante agregue em seu vocabulário novas palavras noções e conceitos; estimular a percepção visual; psicomotricidade; lateralidade; orientação espaço temporal; Letramento matemático (Conceituais); interação social, responsabilidade, autoestima, seguir regras etc. (Sociais), atividades da vida diária, atividades instrumentais da vida diária – preparar refeições, cuidar da casa, tomar remédios etc. Habilidades ocupacionais, desenvolver atividades de orientação e mobilidade (Práticas). </p></td>
                </tr>
                <tr>
                    <td>
                        <p>CONCEITUAIS: <span class="verm">Pré-requisito o aluno sabe usar dicionário, sabe ler, escrever, usar dinheiro, quais conceitos e pré-requisitos foram adquiridos pelo estudante ao longo do processo etc. </span> <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>SOCIAIS: <span class="verm">Pré-requisito o aluno tem facilidade com trabalhos em grupo, em dupla, participa de seminário, apresentações, dinâmicas, esporte coletivo etc. </span> <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>CONSEQUÊNCIAS OU DECORRÊNCIAS DA AÇÃO DO ESTUDANTE: <span class="verm">Que resultados produz para si mesmo? Que resultados produz no meio físico? Que resultados produz no meio social? Que resultados produz a curto prazo, médio e longo prazo?   </span> <textarea id="observacoes" name="observacoes" rows="5" cols="175" maxlength="200" placeholder="Digite suas observações aqui..."></textarea></p>
                    </td>
                </tr>
                <tr>
                    <td height="100px" text-align="up">ASSINATURA DO PROFESSOR DO COMPONENTE CURRICULAR:</td>
                </tr>
            </table>
        </div>
    `;
    
    // Adiciona a nova tabela ao contêiner de tabelas
    document.getElementById("tabelasContainer").appendChild(novaTabela);
}
