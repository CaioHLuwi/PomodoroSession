const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonDescansoCurto = document.querySelector('.app__card-button--curto')
const buttonDescansoLongo = document.querySelector('.app__card-button--longo')

buttonFoco.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

buttonDescansoCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

buttonDescansoLongo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})