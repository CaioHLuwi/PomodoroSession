/* Mudança de background */
const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonDescansoCurto = document.querySelector('.app__card-button--curto')
const buttonDescansoLongo = document.querySelector('.app__card-button--longo')

const imagemPersonagem = document.querySelector('.app__image')

buttonFoco.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    imagemPersonagem.setAttribute('src', '/imagens/foco.png')
})

buttonDescansoCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    imagemPersonagem.setAttribute('src', '/imagens/descanso-curto.png')
})

buttonDescansoLongo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    imagemPersonagem.setAttribute('src', '/imagens/descanso-longo.png')
})
/* Mudança de background */


