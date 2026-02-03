export function LeavesAnimation() {
    // Usamos z-[-10] para forzarlo al fondo absoluto
    return `
        <canvas id="leaves-canvas" 
                class="fixed inset-0 pointer-events-none z-[-10] opacity-40 transition-opacity duration-1000">
        </canvas>
    `;
}

export function initLeavesAnimation() {
    const canvas = document.getElementById('leaves-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 40; 
    let lastScrollY = window.scrollY;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Leaf {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1.5;
            this.speed = Math.random() * 0.4 + 0.1;
            this.angle = Math.random() * Math.PI * 2;
            this.spin = Math.random() * 0.01;
            
            // Colores basados en el tema
            const isDark = document.documentElement.classList.contains('dark');
            const colors = isDark 
                ? ['#A5A58D', '#D6D3D1', '#4A4A4A'] // Colores claros/grises para modo oscuro
                : ['#2D3A3A', '#A5A58D', '#78866B']; // Colores tierra/bosque para modo claro
            
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.3 + 0.1;
        }

        update(scrollDelta) {
            this.y += this.speed + (Math.abs(scrollDelta) * 0.05);
            this.angle += this.spin;
            
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.beginPath();
            
            // Geometría minimalista
            ctx.moveTo(0, -this.size * 2);
            ctx.lineTo(this.size, 0);
            ctx.lineTo(0, this.size * 2);
            ctx.lineTo(-this.size, 0);
            
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            ctx.restore();
        }
    }

    function init() {
        resize();
        particles = Array.from({ length: particleCount }, () => new Leaf());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;

        particles.forEach(p => {
            p.update(scrollDelta);
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    // Escuchar el cambio de tema para resetear colores de partículas
    window.addEventListener('themeChanged', () => {
        particles.forEach(p => p.reset());
    });

    init();
    animate();
}