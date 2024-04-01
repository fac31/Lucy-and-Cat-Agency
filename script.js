console.log('Hello world')

let navbar = document.querySelector('.navbar') 
let closeNavBtn = document.querySelector('.close-nav') 
let openNavBtn = document.querySelector('.open-nav')
let body = document.querySelector('body')
let transparentBg = document.querySelector('.transparent-bg')

let mainContent = document.querySelector('.main')

let navIsOpen = false

// Click events
const closeNav = () => {
    openNavBtn.classList.remove('hide')
    navbar.classList.add('hide')
    // body.classList.remove('nav__open')
    transparentBg.style.opacity = '0'
    transparentBg.style.display = 'none'
    navIsOpen = false
}
closeNavBtn.addEventListener('click', closeNav) 
// mainContent.addEventListener('click', closeNav)

const openNav = () => {
    navbar.classList.remove('hide')
    openNavBtn.classList.add('hide')
    // body.classList.add('nav__open')
    transparentBg.style.display = 'block'
    transparentBg.style.opacity = '0.9'
    navIsOpen = true
}
openNavBtn.addEventListener('click', openNav)


// const handleClickOutsideNavbar = (e) => {
//     if (navIsOpen && !navbar.contains(e.target)) {
//         console.log('HIT')
//     }
// }

// if (navIsOpen) {
//     body.addEventListener('click', handleClickOutsideNavbar)
// } else {
//     body.removeEventListener('click', handleClickOutsideNavbar)
    
// }




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