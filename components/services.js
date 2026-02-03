import { t } from '../utils/i18n.js';

export function Services() {
    const items = [
        { icon: 'fa-pen-ruler', key: 'design', tag: '01' },
        { icon: 'fa-hammer', key: 'renovation', tag: '02' },
        { icon: 'fa-compass-drafting', key: 'plans', tag: '03' },
        { icon: 'fa-leaf', key: 'maintenance', tag: '04' }
    ];

    return `
    <section id="services" class="py-24 md:py-40 px-6 bg-transparent relative overflow-hidden">
        <div class="max-w-[100rem] mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-valle-forest/10 dark:border-white/10">
                ${items.map(item => `
                    <div class="service-trigger group relative p-8 md:p-10 border-l border-r border-b border-valle-forest/10 dark:border-white/10 md:even:border-l-0 lg:border-l-0 lg:first:border-l cursor-pointer overflow-hidden transition-all duration-700 hover:bg-valle-clay/[0.02]" data-key="${item.key}">
                        
                        <span class="absolute top-6 right-6 text-[9px] md:text-[10px] font-black opacity-20 tracking-[0.5em] group-hover:opacity-100 transition-opacity uppercase">
                            ${item.tag}
                        </span>

                        <div class="relative z-10">
                            <div class="mb-8 md:mb-10 inline-block">
                                <i class="fa-solid ${item.icon} text-2xl md:text-3xl text-valle-clay block transition-transform duration-500 ease-in-out group-hover:-rotate-6 origin-center"></i>
                            </div>
                            
                            <h3 class="text-xl md:text-lg lg:text-xl uppercase tracking-[0.2em] font-black mb-4 md:mb-6 text-valle-forest dark:text-white leading-none break-words">
                                ${t('services.' + item.key + '_title')}
                            </h3>

                            <p class="text-sm opacity-50 font-light leading-relaxed group-hover:opacity-90 transition-opacity line-clamp-3">
                                ${t('services.' + item.key + '_desc')}
                            </p>
                        </div>

                        <div class="mt-8 md:mt-12 overflow-hidden h-px w-0 bg-valle-clay group-hover:w-full transition-all duration-1000 opacity-20"></div>
                        
                        <div class="service-overlay absolute inset-0 bg-valle-forest dark:bg-valle-stone translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] z-20 flex flex-col justify-end p-8 md:p-10">
                            <button class="close-service absolute top-6 right-6 text-white dark:text-black opacity-40 hover:opacity-100 p-2">
                                <i class="fa-solid fa-xmark text-xl md:text-2xl"></i>
                            </button>
                            
                            <div class="text-white dark:text-black">
                                <p class="text-[8px] uppercase tracking-[0.5em] mb-4 opacity-40">Technical Detail</p>
                                <p class="text-sm md:text-base font-light leading-relaxed mb-6 italic border-l border-white/20 dark:border-black/20 pl-4">
                                    "${t('services.' + item.key + '_detail')}"
                                </p>
                                <div class="h-px w-8 bg-white/20 dark:bg-black/20 mb-4"></div>
                                <span class="text-[9px] uppercase tracking-[0.3em] font-black opacity-60">M + A Studio</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

export function initServices() {
    const triggers = document.querySelectorAll('.service-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            if (e.target.closest('.close-service')) return;
            
            // Cerrar otros
            document.querySelectorAll('.service-overlay').forEach(el => {
                if(el !== trigger.querySelector('.service-overlay')) {
                    el.classList.add('translate-y-full');
                }
            });
            
            // Abrir actual
            const overlay = trigger.querySelector('.service-overlay');
            overlay.classList.toggle('translate-y-full');
        });

        const closeBtn = trigger.querySelector('.close-service');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const overlay = trigger.querySelector('.service-overlay');
            overlay.classList.add('translate-y-full');
        });
    });
}