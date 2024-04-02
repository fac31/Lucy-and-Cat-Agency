console.log('Hello world')

let navbar = document.querySelector('.navbar') 
let closeNavBtn = document.querySelector('.close-nav') 
let openNavBtn = document.querySelector('.open-nav')
let body = document.querySelector('body')
let transparentBg = document.querySelector('.transparent-bg')

let navIsOpen = false

// Click events
const closeNav = () => {
    // Show 'openNav button
    openNavBtn.classList.remove('hide')
    // Hide navbar
    navbar.classList.add('hide')

    // Change background of main content back to normal
    transparentBg.style.opacity = '0'
    transparentBg.style.display = 'none'
    navIsOpen = false

    // If navbar is closed, remove the eventlistener that closes the navbar
    transparentBg.removeEventListener('click', handleClickOutsideNavbar)

}
closeNavBtn.addEventListener('click', closeNav)

const openNav = () => {
    // Hide openNav button
    navbar.classList.remove('hide')
    // Show navbar
    openNavBtn.classList.add('hide')
    // Change background of main content to blurred
    transparentBg.style.display = 'block'
    transparentBg.style.opacity = '0.95'
    navIsOpen = true

    // If navbar is open, close navbar by clicking outside of the navbar
    transparentBg.addEventListener('click', handleClickOutsideNavbar)
}
openNavBtn.addEventListener('click', openNav)


const handleClickOutsideNavbar = (e) => {
    // If the navbar is open, return true
    // If e.target is not on the menu, return true
    if (navIsOpen && !navbar.contains(e.target)) {
        closeNav()
    }
}


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