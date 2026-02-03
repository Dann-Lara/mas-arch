import { t } from '../utils/i18n.js';

export function Philosophy() {
    // Obtenemos el texto completo y resaltamos la palabra clave dinámicamente
    const quote = t('philosophy.quote');
    const highlight = t('philosophy.highlight');
    const styledQuote = quote.replace(
        highlight, 
        `<span class="text-valle-clay font-serif italic">${highlight}</span>`
    );

    return `
    <section id="studio" class="relative py-60 px-6 bg-valle-stone/10 dark:bg-neutral-900/50 transition-colors duration-1000 overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-valle-clay/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="max-w-[100rem] mx-auto relative z-10">
            <header class="mb-20 reveal-box opacity-0">
                <h2 class="text-[10px] md:text-xs uppercase tracking-[0.8em] opacity-40 font-bold border-l border-valle-clay pl-4">
                    ${t('philosophy.title')}
                </h2>
            </header>

            <div class="reveal-box opacity-0 translate-y-10 transition-all duration-1000 delay-200">
                <blockquote class="text-4xl md:text-7xl lg:text-8xl font-extralight tracking-tighter leading-[1.1] mb-16">
                    "${styledQuote}"
                </blockquote>
                
                <div class="flex flex-col md:flex-row items-start md:items-center gap-8 border-t border-black/5 dark:border-white/5 pt-12">
                    <p class="text-lg md:text-xl max-w-xl opacity-60 font-light leading-relaxed">
                        ${t('philosophy.description')}
                    </p>
                    
                    <div class="hidden md:block ml-auto">
                        <div class="w-24 h-24 border border-valle-clay/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                            <span class="text-[8px] uppercase tracking-[0.2em] opacity-40 text-center p-2">
                                Authentic • Architecture • Studio •
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}