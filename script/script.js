function atualizaHora() {
    // Variáveis para trabalhar com a data do sistema
    var agora = new Date();
    var horaAtual = agora.getHours();
    var dia = agora.getDay();

    // Manipuladores do Dom
    var corpo = document.getElementById('bg');
    var iconlogo = document.getElementById('iconlogo');
    var mensagem = document.querySelector('.mensagem>p');
    var relogio = document.querySelector('.relogio>p');
    var calendario = document.querySelector('.calendario>p');
    var anoRodape = document.querySelector('span.ano');

    // Configuração de exibição da data e hora
    var configLocal = 'pt-BR';
    var configDate = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};


    // Teste para alterar o tema de acordo com a hora do dia

    if (horaAtual < 6) {
        // BOA MADRUGADA
        mensagem.innerText = 'Boa madrugada.';
        iconlogo.className = 'icondia boamadrugada';
        corpo.className = 'madrugada';
    }else if (horaAtual < 12) {
        // BOM DIA
        mensagem.innerText = 'Bom dia!';
        iconlogo.className = 'icondia bomdia';
        corpo.className = 'manha';
    }else if (horaAtual < 18) {
        // BOA TARDE
        mensagem.innerText ='Boa tarde.';
        iconlogo.className = 'icondia boatarde';
        corpo.className = 'tarde';
    }else {
        // BOA NOITE
        mensagem.innerText ='Boa noite!';
        iconlogo.className='icondia boanoite';
        corpo.className = 'noite';
    }

    // Exibe o relógio com hora atual do sistema
    relogio.innerText = agora.toLocaleTimeString(configLocal);

    // Exite calendário formatado
    calendario.innerText = agora.toLocaleDateString(configLocal, configDate);

    // Atualiza ano do rodapé do site
    anoRodape.innerText = agora.getFullYear();
}

// Chama a função no momento que a página é carregada
atualizaHora();

// Segue atualizando a hora chamando a função a cada segundo
setInterval(atualizaHora, 1000);