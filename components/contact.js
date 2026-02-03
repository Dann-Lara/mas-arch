import { t } from '../utils/i18n.js';

export function Contact() {
    return `
    <section id="contact" class="min-h-screen flex items-center py-24 md:py-48 px-6 bg-transparent transition-colors overflow-hidden">
        <div class="max-w-[100rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            
            <div class="cnt-reveal opacity-0 translate-y-10 transition-all duration-1000">
                <h2 class="text-6xl md:text-8xl lg:text-[10rem] font-extralight tracking-tighter leading-[0.85] mb-12 uppercase dark:text-white">
                    ${t('contact.title')}<span class="text-valle-clay">.</span>
                </h2>
                <p class="text-lg md:text-2xl opacity-50 font-light max-w-md leading-relaxed mb-16 dark:text-white">
                    ${t('contact.subtitle')}
                </p>
                <div class="space-y-6 border-l border-valle-clay/30 pl-8">
                    <p class="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 dark:text-white">${t('contact.info_title')}</p>
                    <p class="text-xl md:text-3xl italic font-serif text-valle-forest dark:text-valle-stone">${t('contact.info_location')}</p>
                </div>
            </div>

            <div class="cnt-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 w-full lg:pt-8">
                <form id="whatsapp-form" class="space-y-12 md:space-y-20" novalidate>
                    
                    <div class="group relative">
                        <label class="block text-[10px] md:text-xs uppercase tracking-[0.5em] opacity-30 font-bold mb-4 dark:text-white transition-opacity group-focus-within:opacity-100">
                            ${t('contact.form_name')}
                        </label>
                        <input type="text" id="form-name"
                            class="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 outline-none focus:border-valle-clay transition-all font-light text-2xl md:text-5xl tracking-tighter dark:text-white" 
                            placeholder="——"
                            minlength="3"
                            required>
                        <span class="error-msg text-[9px] text-red-500 uppercase tracking-widest opacity-0 transition-opacity mt-2 block">
                            ${t('contact.error_name') || 'Nombre requerido'}
                        </span>
                    </div>

                    <div class="group relative">
                        <label class="block text-[10px] md:text-xs uppercase tracking-[0.5em] opacity-30 font-bold mb-4 dark:text-white transition-opacity group-focus-within:opacity-100">
                            ${t('contact.form_email')}
                        </label>
                        <input type="email" id="form-email"
                            class="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 outline-none focus:border-valle-clay transition-all font-light text-2xl md:text-5xl tracking-tighter dark:text-white" 
                            placeholder="email@studio.com"
                            required>
                        <span class="error-msg text-[9px] text-red-500 uppercase tracking-widest opacity-0 transition-opacity mt-2 block">
                            ${t('contact.error_email') || 'Email inválido'}
                        </span>
                    </div>

                    <div class="group relative">
                        <label class="block text-[10px] md:text-xs uppercase tracking-[0.5em] opacity-30 font-bold mb-4 dark:text-white transition-opacity group-focus-within:opacity-100">
                            ${t('contact.form_message')}
                        </label>
                        <textarea id="form-message" rows="1" 
                            class="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 outline-none focus:border-valle-clay transition-all font-light text-2xl md:text-5xl tracking-tighter resize-none overflow-hidden dark:text-white" 
                            placeholder="..."
                            minlength="10"
                            required></textarea>
                        <span class="error-msg text-[9px] text-red-500 uppercase tracking-widest opacity-0 transition-opacity mt-2 block">
                            ${t('contact.error_message') || 'Mensaje requerido'}
                        </span>
                    </div>

                    <button type="submit" id="submit-btn" class="group flex items-center gap-8 pt-6 opacity-30 pointer-events-none transition-all duration-700">
                        <span class="text-sm md:text-xl uppercase tracking-[0.6em] font-black py-4 border-b-2 border-valle-clay group-hover:pr-12 transition-all duration-500 dark:text-white">
                            ${t('contact.form_send')}
                        </span>
                        <i class="fa-solid fa-arrow-right-long text-2xl text-valle-clay transition-transform group-hover:translate-x-4"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
    `;
}

export function initContact() {
    const section = document.querySelector('#contact');
    if (!section) return;

    // 1. Observer con Alias para evitar secuestro de otras secciones
    const revealElements = section.querySelectorAll('.cnt-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('translate-y-10', 'opacity-0');
                entry.target.classList.add('translate-y-0', 'opacity-100');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    // 2. Lógica de Formulario
    const form = section.querySelector('#whatsapp-form');
    const inputs = form.querySelectorAll('input, textarea');
    const submitBtn = section.querySelector('#submit-btn');

    const validateInput = (input) => {
        const errorSpan = input.parentElement.querySelector('.error-msg');
        let isValid = input.checkValidity();

        if (input.type === 'email') {
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
        }

        if (input.value.trim() === "") {
            errorSpan.classList.add('opacity-0');
            return false;
        }

        if (isValid) {
            input.classList.remove('border-red-500');
            errorSpan.classList.add('opacity-0');
        } else {
            input.classList.add('border-red-500');
            errorSpan.classList.remove('opacity-0');
        }
        return isValid;
    };

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
            const allValid = Array.from(inputs).every(i => i.checkValidity());
            submitBtn.style.opacity = allValid ? "1" : "0.5";
            submitBtn.style.pointerEvents = allValid ? "auto" : "none";
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = section.querySelector('#form-name').value;
        const email = section.querySelector('#form-email').value;
        const message = section.querySelector('#form-message').value;
        const phone = "527221818972";

        const text = encodeURIComponent(`*MAS + ARCH*\n*De:* ${name}\n*Email:* ${email}\n\n*Mensaje:* ${message}`);
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
}