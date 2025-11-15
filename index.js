// =========================
// NAVIGATION TOGGLE
// =========================
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// =========================
// SCROLL REVEAL
// =========================
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if(revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger once on load

// =========================
// STICKY HEADER ON SCROLL
// =========================
const headerOffset = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY > headerOffset) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    updateActiveLink();
});

// =========================
// ACTIVE LINK HIGHLIGHTING
// =========================
const sections = document.querySelectorAll('section');

function updateActiveLink() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
    navLinks.forEach(link => link.classList.remove('active'));
    if(navLinks[index]) navLinks[index].classList.add('active');
}

// =========================
// DARK/LIGHT THEME TOGGLE
// =========================
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle button
    const toggle = document.querySelector('.theme-toggle');

    // Add a click event listener to toggle dark mode
    toggle.addEventListener('click', () => {
        // Toggle the class 'dark-theme' on <body>
        document.body.classList.toggle('dark-theme');

        // Optional: save the user's preference in localStorage
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Optional: load saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

