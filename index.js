document.addEventListener("DOMContentLoaded", function () {
    console.log('iniciando script')

    var nrmAleatorio
    var nmrTentativas

    var botaoInicia = document.querySelector('.botaoInicia')
    botaoInicia.addEventListener("click", iniciaJogo, false)

    var form = document.querySelector('.form')
    form.style.display = "none"

    var palpite = document.querySelector('.palpite')
    var tentativasRestantes = document.querySelector('.tentativasRestantes')
    var txt = document.querySelector('.txt')
    var altoOuBaixo = document.querySelector('.altoOuBaixo')
    var enviaPalpite = document.querySelector('.enviaPalpite')
    enviaPalpite.addEventListener("click", executarRodada, false);

    function iniciaJogo() {
        form.style.display = "flex"
        botaoInicia.style.display = 'none'
        nmrTentativas = 1
        palpite.value = ''
        tentativasRestantes.textContent = 'Tentativa: ' + nmrTentativas
        nrmAleatorio = Math.floor(Math.random() * 10) + 1
        console.log('Resposta: ' + nrmAleatorio)
        txt.textContent = ' '
        document.querySelector('.palpite').value = 1

    }

    function executarRodada() {

        palpiteValue = Number.parseInt(document.querySelector('.palpite').value)
        console.log('Sua tentativa é a: ' + nmrTentativas)

        if (palpiteValue > 10 || palpite < 0) {
            alert('Os numeros devem ser entre 0 e 10')
            palpite.value = ''
            return
        }

        if (nmrTentativas === 3 && palpiteValue !== nrmAleatorio) {
            tentativasRestantes.textContent = 'Suas tentativas acabaram'
            botaoInicia.style.display = 'unset'
            form.style.display = "none"
            altoOuBaixo.style.display = "none"
            txt.textContent = ' '
            console.log('Acabaram as tentativas')
            return
        } else if (palpiteValue === nrmAleatorio) {
            form.style.display = "none"
            altoOuBaixo.style.display = "none"
            botaoInicia.style.display = 'unset'
            tentativasRestantes.textContent = 'Parabens vc ganhou acertou o numero aleatório: ' + nrmAleatorio
            txt.textContent = ' '
            console.log('Ganhou o Jogo')
            return
        } else {
            if (palpiteValue > nrmAleatorio) {
                altoOuBaixo.style.display = "unset"
                altoOuBaixo.textContent = 'Sua tentetiva foi muito alta'
                palpite.value = ''
                nmrTentativas++
                tentativasRestantes.textContent = 'Tentativa(s): ' + nmrTentativas
                document.querySelector('.palpite').value = palpiteValue
            } else {
                altoOuBaixo.style.display = "unset"
                altoOuBaixo.textContent = 'Sua tentetiva foi muito Baixa'
                palpite.value = ''
                nmrTentativas++
                tentativasRestantes.textContent = 'Tentativa(s): ' + nmrTentativas
                document.querySelector('.palpite').value = palpiteValue
            }
        }
    }

});
