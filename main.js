import { Navbar, initNavbar } from './components/navbar.js';
import { Hero } from './components/hero.js';
import { Projects, initProjects } from './components/projects.js';
import { Services, initServices} from './components/services.js'; 
import { Philosophy } from './components/philosophy.js';
import { Testimonials } from './components/testimonials.js';
import { Contact, initContact} from './components/contact.js';
import { Footer } from './components/footer.js';
import { LeavesAnimation, initLeavesAnimation } from './components/leavesAnimation.js';
import { initI18n } from './utils/i18n.js';

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

async function render() {
    const app = document.getElementById('app');
    const savedLang = localStorage.getItem('lang') || 'es';
    
    await initI18n(savedLang);

    app.innerHTML = `
        ${Navbar()}
        ${LeavesAnimation()}
        <main>
            ${Hero()}
            ${Services()}
            ${Projects()}
            ${Philosophy()}
            ${Testimonials()}
            ${Contact()}
        </main>
        ${Footer()}
    `;

    initNavbar(render);
    initServices();
    initProjects();
    initLeavesAnimation();
    initContact();

    window.dispatchEvent(new Event('scroll'));
}

if (localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

render();

window.addEventListener('load', () => window.scrollTo(0, 0));
