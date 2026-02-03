export function Testimonials() {
    const feedback = {
        es: [
            { 
                id: 1, 
                user: '@lucia_valle', 
                platform: 'Instagram',
                text: 'La integración con el paisaje de Valle de Bravo es perfecta. Entendieron exactamente cómo equilibrar el modernismo con materiales orgánicos.',
                project: 'Casa Avándaro',
                date: 'Hace 2 días'
            },
            { 
                id: 2, 
                user: 'Mark J. Robertson', 
                platform: 'LinkedIn',
                text: 'Un estudio que prioriza la luz y el espacio sobre el exceso. Nuestro proyecto es una obra maestra de arquitectura consciente.',
                project: 'Residencia El Lago',
                date: 'Hace 1 semana'
            },
            { 
                id: 3, 
                user: '@arch_digest_mx', 
                platform: 'Twitter / X',
                text: 'Líneas limpias y ejecución impecable. MAS + ARCH está redefiniendo el minimalismo en México.',
                project: 'Mención Editorial',
                date: 'Hace 3 días'
            }
        ],
        en: [
            { 
                id: 1, 
                user: '@lucia_valle', 
                platform: 'Instagram',
                text: 'The integration with the Valle de Bravo landscape is seamless. They understood exactly how to balance modernism with organic materials.',
                project: 'Avándaro House',
                date: '2 days ago'
            },
            { 
                id: 2, 
                user: 'Mark J. Robertson', 
                platform: 'LinkedIn',
                text: 'A studio that prioritizes light and space over excess. Our project is a masterpiece of conscious architecture.',
                project: 'Lake Residence',
                date: '1 week ago'
            },
            { 
                id: 3, 
                user: '@arch_digest_mx', 
                platform: 'Twitter / X',
                text: 'Clean lines and impeccable execution. MAS + ARCH is redefining minimalism in Mexico.',
                project: 'Editorial Mention',
                date: '3 days ago'
            }
        ]
    };

    const lang = localStorage.getItem('lang') || 'es';
    const currentFeedback = feedback[lang] || feedback['es'];
    
    // Títulos según idioma
    const ui = {
        es: { title: 'Feedback Social', subtitle: 'Casos de Éxito' },
        en: { title: 'Social Feedback', subtitle: 'Success Cases' }
    };
    const currentUI = ui[lang] || ui['es'];

    return `
    <section id="testimonials" class="py-24 px-6 bg-transparent reveal-box">
        <div class="max-w-[100rem] mx-auto">
            
            <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 dark:border-white/10 pb-8">
                <div class="space-y-2">
                    <h2 class="text-5xl md:text-7xl font-light tracking-tighter uppercase leading-none text-black dark:text-white">
                        ${currentUI.title}
                    </h2>
                    <div class="h-[1px] w-24 bg-valle-clay opacity-50"></div>
                </div>
                <p class="text-[10px] uppercase tracking-[0.4em] text-black/40 dark:text-white/40 mt-6 md:mt-0 font-black">
                    ${currentUI.subtitle}
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${currentFeedback.map(item => `
                    <div class="group relative bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded-2xl transition-all duration-500 hover:border-valle-clay/30">
                        
                        <div class="flex justify-between items-start mb-6">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-valle-clay/10 flex items-center justify-center text-valle-clay font-black text-xs">
                                    ${item.user.charAt(0).toUpperCase() === '@' ? item.user.charAt(1).toUpperCase() : item.user.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h4 class="text-[11px] font-black uppercase tracking-wider text-black dark:text-white">${item.user}</h4>
                                    <p class="text-[9px] uppercase opacity-40">${item.platform}</p>
                                </div>
                            </div>
                            <span class="text-[9px] opacity-30 uppercase font-black">${item.date}</span>
                        </div>

                        <div class="relative">
                            <i class="fa-solid fa-quote-left absolute -top-2 -left-2 opacity-5 text-xl"></i>
                            <p class="text-base leading-relaxed text-black/70 dark:text-white/70 italic relative z-10">
                                "${item.text}"
                            </p>
                        </div>

                        <div class="mt-8 flex items-center gap-2">
                            <div class="h-px w-4 bg-valle-clay/30"></div>
                            <span class="text-[10px] uppercase tracking-widest font-black text-valle-clay/60">
                                ${item.project}
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}
