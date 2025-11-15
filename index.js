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
// STICKY HEADER ON SCROLL
// =========================
const headerOffset = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY > headerOffset) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Update active link
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
    navLinks[index].classList.add('active');
}

// =========================
// DARK/LIGHT THEME TOGGLE
// =========================
const themeToggleBtn = document.querySelector('.theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Save preference to localStorage
        if(document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
}
