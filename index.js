// =========================
// NAVIGATION TOGGLE
// =========================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.querySelector('header');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
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

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle .theme-icon');

    if (!themeToggleBtn) return;

    // Function to apply theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            if (themeIcon) themeIcon.src = 'moon-icon.svg';
        } else {
            document.body.classList.remove('dark-theme');
            if (themeIcon) themeIcon.src = 'sun-icon.svg';
        }
        localStorage.setItem('theme', theme);
    }

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        applyTheme(isDark ? 'dark' : 'light');
    });
});
