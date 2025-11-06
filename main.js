// main.js - fonctionnalités de base avec gestion des pages manquantes
document.addEventListener('DOMContentLoaded', function() {
    // Animation au scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    
    // Gestion de la navigation active
    setActiveNavigation();
    
    // Gestion des liens vers pages manquantes
    handleMissingPages();
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

function handleMissingPages() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Si c'est un lien vers une page qui n'existe pas encore
            if (href && 
                !href.startsWith('#') && 
                !href.startsWith('http') && 
                !href.startsWith('mailto') &&
                href !== 'index.html' && 
                href !== '404.html' &&
                href !== 'programs.html' && // Ajoutez ici les pages qui existent
                !isPageExists(href)) {
                
                e.preventDefault();
                showPageUnderConstruction(href);
            }
        });
    });
}

function isPageExists(pageUrl) {
    // Liste des pages qui existent DÉJÀ
const existingPages = [
    'index.html',
    'programs.html', 
    'resources.html',
    'science.html',
    '404.html'
];
    
    return existingPages.includes(pageUrl);
}

function showPageUnderConstruction(pageName) {
    const pageTitle = getPageTitle(pageName);
    
    const userChoice = confirm(
        `🚧 Page en construction\n\n` +
        `La page "${pageTitle}" est en cours de développement.\n\n` +
        `Souhaitez-vous :\n` +
        `• OK = Voir la page 404 (message détaillé)\n` +
        `• Annuler = Rester sur la page actuelle`
    );
    
    if (userChoice) {
        window.location.href = '404.html?from=' + encodeURIComponent(pageName);
    }
}

function getPageTitle(pageUrl) {
    const pageTitles = {
        'resources.html': 'Ressources Gratuites',
        'science.html': 'Notre Science',
        'contact.html': 'Contact',
        'careers.html': 'Carrières',
        'programs.html': 'Nos Programmes'
    };
    
    return pageTitles[pageUrl] || pageUrl.replace('.html', '').replace(/-/g, ' ');
}

// Fonction de démonstration
function scheduleDemo() {
    alert('🚀 Fonctionnalité de démonstration\n\nCette fonction ouvrirait normalement un calendrier de réservation. En attendant, vous pouvez nous contacter pour une démonstration.');
}

// Smooth scrolling pour les ancres
document.addEventListener('DOMContentLoaded', function() {
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
});

