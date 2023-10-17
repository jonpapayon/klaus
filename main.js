// navbar
const menu = document.querySelector('#menu')
const header = document.querySelector('.header')
const open = document.querySelector('#open')
const close = document.querySelector('#close')
open.addEventListener('click', () => {
    menu.classList.add('visible')
})
close.addEventListener('click', () => {
    menu.classList.remove('visible')
})
window.addEventListener('scroll', ()=> {
    header.classList.toggle('scrollDown', window.scrollY>0)
})
window.addEventListener('scroll', ()=> {
    menu.classList.toggle('ulBg', window.scrollY===0)
})
// form
const formuario = document.querySelector('#miFormulario')
const buttonMailto = document.querySelector('#trucazo')
formuario.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('nombre'))
    buttonMailto.setAttribute('href', `mailto:whyjonpapayon@gmail.com?subject=nombre: ${form.get('nombre')} correo: ${form.get('email')} ceular: ${form.get('telefono')}&body=${form.get('mensaje')}`)
    buttonMailto.click()
}

