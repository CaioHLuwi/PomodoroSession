const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonDescansoCurto = document.querySelector('.app__card-button--curto')
const buttonDescansoLongo = document.querySelector('.app__card-button--longo')
const imagemPersonagem = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const buttonsContexto = document.querySelectorAll('.app__card-button')
const buttonComecarParar = document.querySelector('#start-pause')
const btIniciarOuPausar = document.querySelector('#start-pause span')
const iconIniciarOuPausar = document.querySelector('.app__card-primary-butto-icon')
const tempoNaTela = document.querySelector('#timer')

let tempoDecorridoEmSegundos = 1500
let intervaloId

const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3') 
musica.loop = true
const somIniciar = new Audio('/sons/play.wav')
const somPausar = new Audio('/sons/pause.mp3')
const somAcabouTempo = new Audio('/sons/beep.mp3')

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
        musica.volume = 0.3
    } else {
        musica.pause()
    }
})

buttonFoco.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 60*25
    alterarContexto('foco')
    buttonFoco.classList.add('active')
})

buttonDescansoCurto.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 60*5
    alterarContexto('descanso-curto')
    buttonDescansoCurto.classList.add('active')
})

buttonDescansoLongo.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 60*15
    alterarContexto('descanso-longo')
    buttonDescansoLongo.classList.add('active')
})

function alterarContexto(contexto){
    mostrarTempo()
    buttonsContexto.forEach((target) => {
        target.classList.remove('active') // Após clicado no botão ele ira remover todas classes active dos botões, e ler a próxima linha, que adiciona no clicado.
    })
    html.setAttribute('data-contexto', contexto)
    imagemPersonagem.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        // somAcabouTempo.play() 
        alert('Tempo finalizado')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

buttonComecarParar.addEventListener('click', iniciarOuPausar)

function alteraIconePlayOrPause(imagem){
    iconIniciarOuPausar.setAttribute('src', `/imagens/${imagem}.png`)
}

function iniciarOuPausar() {
    if(intervaloId){
        zerar()
        somPausar.play()
        return
    }
    somIniciar.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    btIniciarOuPausar.textContent = "Pausar"
    alteraIconePlayOrPause('pause')
}

function zerar(){
    clearInterval(intervaloId)
    btIniciarOuPausar.textContent = "Começar"
    alteraIconePlayOrPause('play_arrow')
    intervaloId = null
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()


