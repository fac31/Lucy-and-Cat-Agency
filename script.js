console.log('Hello world')

let navbar = document.querySelector('.navbar') 
let closeNavBtn = document.querySelector('.close-nav') 
let openNavBtn = document.querySelector('.open-nav')
let mainContent = document.querySelector('.main')

const closeNav = () => {
    navbar.style.display = 'none';
    openNavBtn.style.display = 'block'
}
closeNavBtn.addEventListener('click', closeNav) 
// mainContent.addEventListener('click', closeNav)

const openNav = () => {
    navbar.style.display = 'block'
    openNavBtn.style.display = 'none'
}
openNavBtn.addEventListener('click', openNav)