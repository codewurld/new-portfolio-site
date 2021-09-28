import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

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

// Skills Functions
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

const toggleSkills = () => {
    let itemClass = this.parentNode.className;

    // loop through items containing 'skills content' class
    // assign class name to each content

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills_content skills_close"
    }

    // if itemClass has class of skills_close return the class of skills_open and 'open' item
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

// when each item in skills header is clicked, call toggle skills function
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// Qualification Functions
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_Active')

        [tab].forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

// Swiper Functions
// let swiper = new Swiper('.portfolio-container', {
//     cssMode: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination'
//     },
//     mousewheel: true,
//     keyboard: true,
// })