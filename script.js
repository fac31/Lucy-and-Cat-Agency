console.log('Hello world')


// NAVBAR FUNCTIONALITY

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




// FORM FUNCTIONALITY

const submitForm = document.querySelector('.submit-form')
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')

let formSubmitted = false


let userInput = {
    name: "",
    email: "",
    options: "",
    subject: "",
    message: ""
}

const checkForm = (e) => {
    e.preventDefault()
    let requiredFields = document.getElementsByClassName('form-input')
    let formIsValid = true

    let requiredDiv = document.createElement('div')
    requiredDiv.innerHTML = 'Please fill out this field.'
    requiredDiv.classList.add('invalid')

    for (let i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value === "") {
        // Tell user that all fields are required.
            requiredFields[i].parentElement.parentElement.appendChild(requiredDiv)
            // formIsValid = false
        } else if (requiredFields[i].value !== "") {
        // Set the userInput object with the user's information.
            let currentField = requiredFields[i].name
            userInput[currentField] = requiredFields[i].value
        }
    }

    const isEmpty = Object.values(userInput).some(x => x === "")

    if (!isEmpty) {
        formIsValid = true

        // Create a key for data to be stored against
        let date = new Date()
        let timestamp = date.toUTCString()

        // Save user message to local storage
        // Content must be converted to JSON to be stored
        localStorage.setItem(timestamp, JSON.stringify(userInput))

        showPopUp()

        for (let i = 0; i < requiredFields.length; i++) {
            requiredFields[i].value = ""
        }

    } else {
        formIsValid = false
    }
}

submitForm.addEventListener('click', checkForm)


let popUpIsOpen = false
let popUp = document.querySelector('.popup')
let popupBtn = document.querySelector('.popup-btn')

const showPopUp = () => {
    if (!popUpIsOpen) {
        popUp.style.visibility = 'visible';
        popUpIsOpen = true
        window.scrollTo({top: 0, behavior: 'smooth'})


        transparentBg.style.display = 'block'
        transparentBg.style.opacity = '0.8'

        console.log('pop up visible',)
    } 
}

const hidePopUp = () => {
    if (popUpIsOpen) {
        popUp.style.visibility = 'hidden';
        popUpIsOpen = false

        transparentBg.style.opacity = '0'
        transparentBg.style.display = 'none'
    }
}

popupBtn.addEventListener('click', hidePopUp)


let testBtn = document.querySelector('.test-btn')
testBtn.addEventListener('click', showPopUp)