// main.js - Version finale sans gestion 404
document.addEventListener('DOMContentLoaded', function() {
    // Animation au scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    
    // Gestion de la navigation active
    setActiveNavigation();
    
    // Smooth scrolling pour les ancres
    initSmoothScrolling();
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

function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fonctions globales pour toutes les pages
function scheduleDemo() {
    alert('🚀 Fonctionnalité de démonstration\n\nCette fonction ouvrirait normalement un calendrier de réservation. En attendant, vous pouvez nous contacter pour une démonstration.');
}

function startFreeTrial(programName) {
    const program = programName || 'Neuronomy';
    alert(`🎯 Essai gratuit - ${program}\n\nVotre essai gratuit de 14 jours commence maintenant ! Vous recevrez un email avec vos identifiants.`);
}
