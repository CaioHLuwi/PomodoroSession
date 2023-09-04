const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonDescansoCurto = document.querySelector('.app__card-button--curto')
const buttonDescansoLongo = document.querySelector('.app__card-button--longo')

const imagemPersonagem = document.querySelector('.app__image')

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    imagemPersonagem.setAttribute('src', `/imagens/${contexto}.png`)
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



