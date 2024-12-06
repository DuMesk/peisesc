function printDocument() {
    // Adiciona classe para estilo de impressão
    document.body.classList.add('printing');
    
    // Configura opções de impressão
    const printOptions = {
        margin: 0,
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Remove o botão de impressão temporariamente
    const printButton = document.getElementById('print-button');
    printButton.style.display = 'none';

    // Inicia a impressão
    window.print();

    // Restaura o botão após a impressão
    setTimeout(() => {
        printButton.style.display = 'block';
        document.body.classList.remove('printing');
    }, 1000);
}
