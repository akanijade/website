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
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Optional: change icon
    const icon = themeToggle.querySelector('.theme-icon');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'sun-icon.svg'; // replace with sun icon path
    } else {
        icon.src = 'moon-icon.svg'; // replace with moon icon path
    }
});
