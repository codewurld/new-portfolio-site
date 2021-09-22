// Display and hide menu

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// display menu
// run function if navToggle exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('display-menu')
    })
}

// hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('display-menu')
    })
}

// hide mobile menu when menu option is clicked
const navLink = document.querySelectorAll('.nav_link')

function hideMobileMenu() {
    const navMenu = document.getElementById('nav-menu')
    // when each nav_link is clicked, remove display-menu class
    navMenu.classList.remove('display-menu')
}

navLink.forEach(n => n.addEventListener('click', hideMobileMenu))