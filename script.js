console.log('Hello world')

let navbar = document.querySelector('.navbar') 
let closeNavBtn = document.querySelector('.close-nav') 
let openNavBtn = document.querySelector('.open-nav')
let mainContent = document.querySelector('.main')


// Click events
const closeNav = () => {
    openNavBtn.classList.remove('hide')
    navbar.classList.add('hide')
}
closeNavBtn.addEventListener('click', closeNav) 
// mainContent.addEventListener('click', closeNav)

const openNav = () => {
    // mainContent.style.opacity = '0.5'
    navbar.classList.remove('hide')
    openNavBtn.classList.add('hide')
}
openNavBtn.addEventListener('click', openNav)


// Keyboard events
// Press the enter key when the openNavBtn is in focus
const handleKeyPressOpen = (event) => {
    if (event.key === 'Enter') {
        openNav()
    }
}
openNavBtn.addEventListener('keypress', handleKeyPressOpen)

const handleKeyPressClose = (event) => {
    if (event.key === 'Enter') {
        closeNav()
    }
}
closeNavBtn.addEventListener('keypress', handleKeyPressClose)