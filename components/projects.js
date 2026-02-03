import { t } from '../utils/i18n.js';

export function Projects() {
    const works = {
        es: [
            { 
                id: 1, 
                name: 'Casa Avándaro', 
                desc: 'Integración radical con el bosque mediante concreto aparente y cristal.',
                year: '2024', 
                img: 'assets/img/hero.jpg', 
                col: 'md:col-span-8', 
                aspect: 'aspect-[16/9]', 
                delay: '0' 
            },
            { 
                id: 2, 
                name: 'Residencia El Lago', 
                desc: 'Proyecto que enfatiza la horizontalidad y las vistas panorámicas al lago.',
                year: '2023', 
                img: 'assets/img/2.jpg', 
                col: 'md:col-span-4', 
                aspect: 'aspect-[4/5]', 
                delay: '200' 
            },
            { 
                id: 3, 
                name: 'Refugio Bosque', 
                desc: 'Arquitectura mínima en madera carbonizada para mimetizarse con el entorno.',
                year: '2024', 
                img: 'assets/img/3.jpg', 
                col: 'md:col-span-5', 
                aspect: 'aspect-square', 
                delay: '0' 
            },
            { 
                id: 4, 
                name: 'Terraza Valle', 
                desc: 'Espacio social que utiliza materiales vernáculos y diseño contemporáneo.',
                year: '2022', 
                img: 'assets/img/4.jpg', 
                col: 'md:col-span-7', 
                aspect: 'aspect-[16/10]', 
                delay: '200' 
            },
            { 
                id: 5, 
                name: 'Studio Avándaro', 
                desc: 'Espacio de trabajo creativo que prioriza la luz cenital y el orden visual.',
                year: '2024', 
                img: 'assets/img/5.jpg', 
                col: 'md:col-span-6', 
                aspect: 'aspect-[4/3]', 
                delay: '0' 
            },
            { 
                id: 6, 
                name: 'Villa Serena', 
                desc: 'Vivienda de lujo con jardines internos que borran los límites del interior.',
                year: '2023', 
                img: 'assets/img/6.jpeg', 
                col: 'md:col-span-6', 
                aspect: 'aspect-[4/3]', 
                delay: '200' 
            }
        ],
        en: [
            { 
                id: 1, 
                name: 'Avándaro House', 
                desc: 'Radical integration with the forest through exposed concrete and glass.',
                year: '2024', 
                img: 'assets/img/hero.jpg', 
                col: 'md:col-span-8', 
                aspect: 'aspect-[16/9]', 
                delay: '0' 
            },
            { 
                id: 2, 
                name: 'Lake Residence', 
                desc: 'A project emphasizing horizontality and panoramic views of the lake.',
                year: '2023', 
                img: 'assets/img/2.jpg', 
                col: 'md:col-span-4', 
                aspect: 'aspect-[4/5]', 
                delay: '200' 
            },
            { 
                id: 3, 
                name: 'Forest Refuge', 
                desc: 'Minimal architecture in charred wood to blend into the surroundings.',
                year: '2024', 
                img: 'assets/img/3.jpg', 
                col: 'md:col-span-5', 
                aspect: 'aspect-square', 
                delay: '0' 
            },
            { 
                id: 4, 
                name: 'Valle Terrace', 
                desc: 'Social space utilizing vernacular materials and contemporary design.',
                year: '2022', 
                img: 'assets/img/4.jpg', 
                col: 'md:col-span-7', 
                aspect: 'aspect-[16/10]', 
                delay: '200' 
            },
            { 
                id: 5, 
                name: 'Avándaro Studio', 
                desc: 'Creative workspace prioritizing overhead lighting and visual order.',
                year: '2024', 
                img: 'assets/img/5.jpg', 
                col: 'md:col-span-6', 
                aspect: 'aspect-[4/3]', 
                delay: '0' 
            },
            { 
                id: 6, 
                name: 'Serena Villa', 
                desc: 'Luxury home with internal gardens that blur the boundaries of the interior.',
                year: '2023', 
                img: 'assets/img/6.jpeg', 
                col: 'md:col-span-6', 
                aspect: 'aspect-[4/3]', 
                delay: '200' 
            }
        ]
    };

    const lang = localStorage.getItem('lang') || 'es';
    const currentWorks = works[lang] || works['es'];

    const gridItems = currentWorks.map(w => `
        <div class="${w.col} reveal-box" style="transition-delay: ${w.delay}ms">
            <div class="group relative overflow-hidden bg-valle-stone/10 ${w.aspect} cursor-crosshair">
                <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                
                <img src="${w.img}" 
                     class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] scale-110 group-hover:scale-100"
                     alt="${w.name}">
                
                <div class="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                    <span class="text-[10px] bg-white/90 dark:bg-black/90 dark:text-white px-3 py-1 tracking-[0.3em] backdrop-blur-sm uppercase font-bold border border-black/5 dark:border-white/5">
                        ${w.year}
                    </span>
                </div>
    
                <div class="absolute bottom-6 right-6 z-20 max-w-[70%] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-right">
                    <div class="bg-white/90 dark:bg-black/90 dark:text-white p-3 backdrop-blur-sm border border-black/5 dark:border-white/5 inline-block">
                        <p class="text-[10px] md:text-[11px] leading-relaxed font-light italic tracking-tight">
                            ${w.desc}
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 flex flex-col gap-2 group">
                <h3 class="text-2xl md:text-4xl lg:text-5xl font-extralight tracking-tighter uppercase group-hover:italic transition-all duration-500 dark:text-white">
                    ${w.name}
                </h3>
                <div class="w-full h-[1px] bg-black/10 dark:bg-white/10 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></div>
                <p class="text-[10px] tracking-[0.4em] uppercase opacity-40 font-bold dark:text-white">
                    ${t('projects.category')}
                </p>
            </div>
        </div>
    `).join('');

    return `
    <section id="projects" class="py-48 px-6 bg-transparent transition-colors overflow-hidden">
        <div class="max-w-[100rem] mx-auto">
            <header class="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
                <h2 class="reveal-box text-5xl md:text-8xl lg:text-9xl font-extralight tracking-tighter uppercase leading-none opacity-0 transition-all duration-1000">
                    ${t('projects.title')}<span class="text-valle-clay">.</span>
                </h2>
                <p class="reveal-box text-sm md:text-xl max-w-sm opacity-50 font-light leading-relaxed tracking-tight opacity-0 italic transition-all duration-1000 delay-200">
                    ${t('projects.description')}
                </p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-32">
                ${gridItems}
            </div>
        </div>
    </section>
    `;
}

export function initProjects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('translate-y-20', 'opacity-0');
                entry.target.classList.add('translate-y-0', 'opacity-100');
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.reveal-box').forEach(el => observer.observe(el));
}