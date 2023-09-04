const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonDescansoCurto = document.querySelector('.app__card-button--curto')
const buttonDescansoLongo = document.querySelector('.app__card-button--longo')
const imagemPersonagem = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const buttonsContexto = document.querySelectorAll('.app__card-button')

const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3') 
musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
        musica.volume = 0.3
    } else {
        musica.pause()
    }
})

buttonFoco.addEventListener('click', () => {
    alterarContexto('foco')
    buttonFoco.classList.add('active')
})

buttonDescansoCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    buttonDescansoCurto.classList.add('active')
})

buttonDescansoLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    buttonDescansoLongo.classList.add('active')
})

function alterarContexto(contexto){
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



