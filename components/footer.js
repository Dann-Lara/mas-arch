import { t } from '../utils/i18n.js';

export function Footer() {
    return `
    <footer class="relative py-24 px-6 border-t border-valle-forest/10 dark:border-white/5 bg-valle-bg dark:bg-[#151718] transition-colors duration-700 overflow-hidden">
        <div class="absolute -bottom-10 -right-10 text-[15rem] font-black opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
            M+A
        </div>

        <div class="max-w-[100rem] mx-auto relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
                
                <div class="col-span-1 md:col-span-1">
                    <h3 class="text-xl font-bold tracking-[0.3em] uppercase mb-8 dark:text-white">MAS + ARCH</h3>
                    <p class="text-sm font-light opacity-50 leading-relaxed italic dark:text-white">
                        Transformando el paisaje de Valle de Bravo a través de arquitectura consciente y minimalismo orgánico.
                    </p>
                </div>

                <div class="space-y-4">
                    <p class="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-8 dark:text-white">${t('footer.explore') || 'Explorar'}</p>
                    <ul class="space-y-4 text-[11px] uppercase tracking-[0.2em] font-medium dark:text-white">
                        <li><a href="#services" class="hover:text-valle-clay transition-all duration-300 block transform hover:translate-x-2">${t('navbar.services')}</a></li>
                        <li><a href="#projects" class="hover:text-valle-clay transition-all duration-300 block transform hover:translate-x-2">${t('navbar.projects')}</a></li>
                        <li><a href="#studio" class="hover:text-valle-clay transition-all duration-300 block transform hover:translate-x-2">${t('navbar.studio')}</a></li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <p class="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-8 dark:text-white">${t('navbar.contact')}</p>
                    <div class="flex flex-col gap-6">
                        <a href="mailto:info@masarch.com" class="text-sm font-light hover:text-valle-clay transition-colors dark:text-white">info@masarch.com</a>
                        <div class="flex gap-6 mt-2 dark:text-white">
                            <a href="#" class="opacity-50 hover:opacity-100 hover:scale-110 transition-all"><i class="fa-brands fa-instagram text-xl"></i></a>
                            <a href="#" class="opacity-50 hover:opacity-100 hover:scale-110 transition-all"><i class="fa-brands fa-behance text-xl"></i></a>
                            <a href="#" class="opacity-50 hover:opacity-100 hover:scale-110 transition-all"><i class="fa-brands fa-linkedin-in text-xl"></i></a>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <p class="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-8 dark:text-white">Location</p>
                    <div class="flex items-start gap-4 opacity-50 dark:text-white">
                        <i class="fa-solid fa-location-dot mt-1 text-sm text-valle-clay"></i>
                        <div class="text-sm font-light leading-relaxed">
                            <p>Av. del Carmen, Avándaro</p>
                            <p>Valle de Bravo, EdoMex</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-12 border-t border-valle-forest/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                <div class="text-[9px] opacity-30 uppercase tracking-[0.3em] dark:text-white">
                    &copy; ${new Date().getFullYear()} MAS + ARCHITECTURE. ALL RIGHTS RESERVED.
                </div>

                <div class="flex items-center gap-8">
                    <div class="flex gap-4 opacity-20 text-xs grayscale dark:text-white">
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3-alt"></i>
                        <i class="fa-solid fa-wind"></i> 
                    </div>
                    <div class="h-4 w-[1px] bg-black/10 dark:bg-white/10"></div>
                    <div class="text-[9px] tracking-[0.4em] uppercase opacity-40 dark:text-white">
                        MADE BY <a href="#" class="font-bold hover:text-valle-clay transition-colors">DANN LARA</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
}