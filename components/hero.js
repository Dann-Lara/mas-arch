import { t } from '../utils/i18n.js';

export function Hero() {
    return `
    <section id="hero-section" class="relative h-screen flex items-center px-6 bg-cover bg-center overflow-hidden transition-colors duration-700">
        <div class="absolute inset-0 bg-valle-bg/40 dark:bg-black/60 z-0"></div>
        
        <div class="relative z-10 max-w-[100rem] mx-auto w-full">
            <h1 class="font-extralight tracking-tighter leading-[0.85] mb-8 md:mb-10 dark:text-white animate-hero-fade-in"
                style="font-size: clamp(3.5rem, 12vw, 15rem);">
                ${t('hero.title')}
            </h1>
            
            <div class="animate-hero-content-in">
                <p class="text-lg md:text-3xl max-w-sm md:max-w-2xl mb-12 opacity-80 font-light leading-snug md:leading-relaxed tracking-tight dark:text-white">
                    ${t('hero.subtitle')}
                </p>
                
                <a href="#projects" class="inline-block px-10 py-5 border border-valle-forest dark:border-white/20 hover:bg-valle-forest hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 uppercase text-[10px] tracking-[0.4em] font-black dark:text-white">
                    ${t('hero.cta')}
                </a>
            </div>
        </div>

        <div class="absolute bottom-12 right-12 hidden md:block text-[10px] tracking-[0.6em] opacity-30 uppercase dark:text-white">
            19.1917° N, 100.1303° W — AVÁNDARO
        </div>

        <a href="#services" class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-bounce cursor-pointer group">
            <span class="text-[9px] uppercase tracking-[0.4em] rotate-90 mb-6 dark:text-white">Scroll</span>
            <div class="w-[1px] h-16 bg-valle-forest dark:bg-white/40"></div>
        </a>
    </section>
    `;
}

export function initHero() {
    // Ya no necesitamos lógica de opacidad aquí porque el CSS lo hace solo.
    // Esto evita que "desaparezca" si el JS falla o se retrasa.
    console.log("Hero animado por CSS.");
}