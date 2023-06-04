document.addEventListener('DOMContentLoaded', function(){
    const dataDoEvento = new Date('Aug 18, 2023 17:00:00');
    const timeStampDoEvento = dataDoEvento.getTime();
    const spanContador = document.getElementById('contador');

    const contadorAteOEvento = setInterval(function(){
        const dataAtual = new Date();
        const timeStampAtual = dataAtual.getTime();

        const tempoRestanteEmMs = timeStampDoEvento - timeStampAtual;
        const diaEmMs = 1000 * 60 * 60 * 24;
        const horasEmMs = 1000 * 60 * 60;
        const minutosEmMs = 1000 * 60;
        const segundosEmMs = 1000;
        



        const diasRestantes = Math.floor(tempoRestanteEmMs/diaEmMs);
        const horasRestantes = Math.floor((tempoRestanteEmMs % diaEmMs) / horasEmMs);
        const minutosRestantes = Math.floor((tempoRestanteEmMs % horasEmMs) / minutosEmMs);
        const segundosRestantes = Math.floor((tempoRestanteEmMs % minutosEmMs) / segundosEmMs);



        spanContador.innerHTML = `${diasRestantes}d ${horasRestantes}h ${minutosRestantes}min ${segundosRestantes}s`;
    }, 1000)
})