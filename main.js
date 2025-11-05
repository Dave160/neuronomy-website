// main.js - avec Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    // Animation au scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});

function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Les modals et autres composants Bootstrap fonctionnent automatiquement