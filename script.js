const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonDescansoCurto = document.querySelector('.app__card-button--curto')
const buttonDescansoLongo = document.querySelector('.app__card-button--longo')
const imagemPersonagem = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')


function alterarContexto(contexto){
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

buttonFoco.addEventListener('click', () => {
    alterarContexto('foco')
})

buttonDescansoCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

buttonDescansoLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})



