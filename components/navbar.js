import { t } from '../utils/i18n.js';

export function Navbar() {
    const currentLang = localStorage.getItem('lang') || 'es';
    
    return `
    <nav class="fixed w-full z-[100] px-6 md:px-12 py-5 md:py-6 flex justify-between items-center backdrop-blur-xl bg-valle-bg/80 dark:bg-black/80 border-b border-valle-forest/5 dark:border-white/5 transition-all duration-500">
        <div class="text-xl md:text-2xl font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-valle-forest dark:text-white relative z-[120]">
            MAS <span class="text-valle-clay">+</span> ARCH
        </div>
        
        <div class="flex gap-4 md:gap-12 items-center relative z-[120]">
            <ul class="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.3em] font-black text-valle-forest/80 dark:text-white/80">
                <li><a href="#services" class="hover:text-valle-clay transition-colors">${t('navbar.services')}</a></li>
                <li><a href="#projects" class="hover:text-valle-clay transition-colors">${t('navbar.projects')}</a></li>
                <li><a href="#studio" class="hover:text-valle-clay transition-colors">${t('navbar.studio')}</a></li>
                <li><a href="#contact" class="hover:text-valle-clay transition-colors">${t('navbar.contact')}</a></li>
            </ul>
            
            <div class="flex items-center gap-4 md:gap-6 border-l border-valle-forest/20 dark:border-white/10 pl-4 md:pl-6">
                <button id="theme-toggle" class="text-valle-forest dark:text-white hover:scale-110 transition-transform">
                    <i class="fa-solid fa-moon dark:hidden text-lg"></i>
                    <i class="fa-solid fa-sun hidden dark:block text-yellow-400 text-lg"></i>
                </button>
                
                <div class="flex gap-1 text-[10px] md:text-[11px] font-black tracking-widest text-valle-forest dark:text-white">
                    <button class="lang-btn p-1 ${currentLang === 'es' ? 'opacity-100 border-b-2 border-valle-clay' : 'opacity-30'}" data-lang="es">ES</button>
                    <button class="lang-btn p-1 ${currentLang === 'en' ? 'opacity-100 border-b-2 border-valle-clay' : 'opacity-30'}" data-lang="en">EN</button>
                </div>

                <button id="menu-open" class="md:hidden text-valle-forest dark:text-white ml-2">
                    <i class="fa-solid fa-bars-staggered text-xl"></i>
                </button>
            </div>
        </div>
    </nav>

    <div id="mobile-menu" class="not-ready fixed inset-0 bg-valle-bg dark:bg-[#0a0a0a] translate-x-full z-[150] flex flex-col p-12 justify-center transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]">
        <button id="menu-close" class="absolute top-8 right-8 text-valle-forest dark:text-white p-2">
            <i class="fa-solid fa-xmark text-3xl"></i>
        </button>
        
        <div class="flex flex-col gap-10">
            <p class="text-[10px] uppercase tracking-[0.8em] opacity-30 dark:text-white mb-4">Menú</p>
            <ul class="flex flex-col gap-6">
                <li><a href="#services" class="mobile-link text-5xl font-extralight uppercase tracking-tighter text-valle-forest dark:text-white hover:italic transition-all inline-block">${t('navbar.services')}</a></li>
                <li><a href="#projects" class="mobile-link text-5xl font-extralight uppercase tracking-tighter text-valle-forest dark:text-white hover:italic transition-all inline-block">${t('navbar.projects')}</a></li>
                <li><a href="#studio" class="mobile-link text-5xl font-extralight uppercase tracking-tighter text-valle-forest dark:text-white hover:italic transition-all inline-block">${t('navbar.studio')}</a></li>
                <li><a href="#contact" class="mobile-link text-5xl font-extralight uppercase tracking-tighter text-valle-forest dark:text-white hover:italic transition-all inline-block">${t('navbar.contact')}</a></li>
            </ul>

            <div class="mt-20 pt-10 border-t border-valle-forest/10 dark:border-white/10">
                <div class="text-[10px] uppercase tracking-[0.5em] opacity-40 dark:text-white">
                    Valle de Bravo, México
                </div>
            </div>
        </div>
    </div>
    `;
}

export function initNavbar(reRenderCallback) {
    const themeBtn = document.getElementById('theme-toggle');
    const langBtns = document.querySelectorAll('.lang-btn');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // 1. Quitar la prevención de parpadeo después del renderizado inicial
    setTimeout(() => {
        mobileMenu?.classList.remove('not-ready');
    }, 100);

    const toggleMenu = (open) => {
        mobileMenu.classList.toggle('translate-x-full', !open);
        document.body.style.overflow = open ? 'hidden' : '';
    };

    menuOpen?.addEventListener('click', () => toggleMenu(true));
    menuClose?.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

    langBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            localStorage.setItem('lang', btn.getAttribute('data-lang'));
            if (reRenderCallback) await reRenderCallback();
        });
    });

    themeBtn?.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}