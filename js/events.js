document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const body = document.body;

    function toggleMenu() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    }
    
    if (burger) {
        burger.addEventListener('click', toggleMenu);

        burger.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }

    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !burger.contains(e.target)) {
            toggleMenu();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            toggleMenu();
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll(
        '.fade-in, .fade-in-delay, .fade-in-delay-2, ' +
        '.reveal, .reveal-delay, .reveal-delay-2'
    );
    
    animatedElements.forEach(el => observer.observe(el));
});

let isModalOpen = false;
let animationFrameId = null;

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initModal();
    initTooltip();
    initScrollEffects();
    initParallax();
    initTypewriter();
    initParticles();
});

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.classList.contains('performance-detailed')) {
                    animatePerformanceBlock(entry.target);
                }
                
                if (entry.target.classList.contains('timeline-item')) {
                    animateTimelineItem(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2, .fade-in, .fade-in-delay, .fade-in-delay-2');
    revealElements.forEach(el => observer.observe(el));
}

function animatePerformanceBlock(block) {
    const overlay = block.querySelector('.performance-overlay');
    if (overlay) {
        overlay.style.transition = 'opacity 1.5s ease, filter 1.5s ease';
        setTimeout(() => {
            overlay.style.opacity = '0.12';
        }, 300);
    }
}

function animateTimelineItem(item) {
    const timeElement = item.querySelector('.timeline-time');
    const contentElement = item.querySelector('.timeline-content');
    
    if (timeElement) {
        setTimeout(() => {
            timeElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                timeElement.style.transform = 'scale(1)';
            }, 300);
        }, 200);
    }
    
    if (contentElement) {
        const children = contentElement.children;
        Array.from(children).forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                child.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                child.style.opacity = '1';
                child.style.transform = 'translateX(0)';
            }, 300 + (index * 100));
        });
    }
}

function initModal() {
    const registerBtn1 = document.getElementById('registerBtn1');
    const modalOverlay1 = document.getElementById('modalOverlay1');
    const modalClose1 = document.getElementById('modalClose1');
    const registrationForm1 = document.getElementById('registrationForm1');
    const successMessage1 = document.getElementById('successMessage1');

    if (registerBtn1) {
        registerBtn1.addEventListener('click', openModal);
    }

    if (modalClose1) {
        modalClose1.addEventListener('click', closeModal);
    }

    if (modalOverlay1) {
        modalOverlay1.addEventListener('click', (e) => {
            if (e.target === modalOverlay1) {
                closeModal();
            }
        });
    }

    if (registrationForm1) {
        registrationForm1.addEventListener('submit', handleFormSubmit);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isModalOpen) {
            closeModal();
        }
    });
}

function openModal() {
    const modalOverlay1 = document.getElementById('modalOverlay1');
    const modalContainer1 = document.getElementById('modalContainer1');
    
    if (modalOverlay1 && modalContainer1) {
        isModalOpen = true;
        document.body.style.overflow = 'hidden';
        modalOverlay1.classList.add('active');

        setTimeout(() => {
            modalContainer1.style.transform = 'scale(1) rotateX(0)';
        }, 50);

        setTimeout(() => {
            const firstInput = modalContainer1.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 500);
    }
}

function closeModal() {
    const modalOverlay1 = document.getElementById('modalOverlay1');
    const modalContainer1 = document.getElementById('modalContainer1');
    const registrationForm1 = document.getElementById('registrationForm1');
    const successMessage1 = document.getElementById('successMessage1');
    
    if (modalOverlay1 && modalContainer1) {
        isModalOpen = false;
        modalContainer1.style.transform = 'scale(0.7) rotateX(30deg)';
        
        setTimeout(() => {
            modalOverlay1.classList.remove('active');
            document.body.style.overflow = '';

            if (registrationForm1) {
                registrationForm1.style.display = 'flex';
                registrationForm1.reset();
            }
            if (successMessage1) {
                successMessage1.classList.remove('active');
            }
        }, 300);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn1 = form.querySelector('.submit-btn1');
    const successMessage1 = document.getElementById('successMessage1');

    submitBtn1.style.transform = 'scale(0.95)';
    submitBtn1.disabled = true;
    submitBtn1.innerHTML = '<span>ОБРОБКА...</span>';

    setTimeout(() => {
        form.style.display = 'none';
        successMessage1.classList.add('active');
        
        createConfetti();
        
        setTimeout(() => {
            closeModal();
        }, 5000);
    }, 1500);
}

function createConfetti() {
    const colors = ['#E63946', '#D4A574', '#FFFFFF'];
    const modalContent1 = document.querySelector('.modal-content1');
    
    if (!modalContent1) return;
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '0';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            
            modalContent1.appendChild(confetti);
            
            const animDuration = 2000 + Math.random() * 1000;
            const moveX = (Math.random() - 0.5) * 200;
            
            confetti.animate([
                { 
                    transform: 'translateY(0) translateX(0) rotate(0deg)', 
                    opacity: 1 
                },
                { 
                    transform: `translateY(${modalContent1.offsetHeight}px) translateX(${moveX}px) rotate(${Math.random() * 720}deg)`, 
                    opacity: 0 
                }
            ], {
                duration: animDuration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                confetti.remove();
            }, animDuration);
        }, i * 30);
    }
}

function initTooltip() {
    const murName = document.getElementById('murName');
    const murTooltip = document.getElementById('murTooltip');
    
    if (!murName || !murTooltip) return;
    
    let tooltipTimeout;
    
    murName.addEventListener('mouseenter', () => {
        clearTimeout(tooltipTimeout);
        murTooltip.style.opacity = '1';
        murTooltip.style.visibility = 'visible';
        murTooltip.style.transform = 'translate(-50%, -50%) scale(1)';

        const tooltipContent = murTooltip.querySelector('.tooltip-content');
        if (tooltipContent) {
            const children = tooltipContent.children;
            Array.from(children).forEach((child, index) => {
                child.style.opacity = '0';
                child.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    child.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, 100 + (index * 50));
            });
        }
    });
    
    murName.addEventListener('mouseleave', () => {
        tooltipTimeout = setTimeout(() => {
            hideTooltip();
        }, 300);
    });
    
    murTooltip.addEventListener('mouseenter', () => {
        clearTimeout(tooltipTimeout);
    });
    
    murTooltip.addEventListener('mouseleave', () => {
        hideTooltip();
    });
    
    function hideTooltip() {
        murTooltip.style.opacity = '0';
        murTooltip.style.visibility = 'hidden';
        murTooltip.style.transform = 'translate(-50%, -50%) scale(0.8)';

        const tooltipContent = murTooltip.querySelector('.tooltip-content');
        if (tooltipContent) {
            const children = tooltipContent.children;
            Array.from(children).forEach(child => {
                child.style.opacity = '0';
                child.style.transform = 'translateY(10px)';
                child.style.transition = 'none';
            });
        }
    }
}

function initParallax() {
    const handleParallax = () => {
        const elements = document.querySelectorAll('.hero, .about-section, .program-section, .mur-section, .quote-section, .registration-section1');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
            
            if (isInViewport) {
                const scrollY = window.scrollY;
                const offset = rect.top + scrollY;
                const speed = 0.3;
                element.style.backgroundPositionY = `${(scrollY - offset) * speed}px`;
            }
        });
        
        animationFrameId = requestAnimationFrame(handleParallax);
    };
    
    animationFrameId = requestAnimationFrame(handleParallax);

    window.addEventListener('unload', () => {
        cancelAnimationFrame(animationFrameId);
    });
}

function initTypewriter() {
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        const text = word.textContent;
        word.textContent = '';
        let charIndex = 0;
        
        function type() {
            if (charIndex < text.length) {
                word.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100 + (index * 50));
            }
        }
        
        setTimeout(type, index * 200);
    });
}

function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.2';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const numberOfParticles = 50;

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = ['#E63946', '#D4A574', '#FFFFFF'][Math.floor(Math.random() * 3)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.3;
            ctx.fill();
        }
    }

    function initParticlesArray() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    
    initParticlesArray();

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(particle => {
            particle.update();
            particle.draw();
        });
        animationFrameId = requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

function initScrollEffects() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY ? 'down' : 'up';

        const leftBorder = document.querySelector('.ornament-border.left');
        const rightBorder = document.querySelector('.ornament-border.right');
        
        if (leftBorder && rightBorder) {
            const offset = currentScrollY * 0.2;
            leftBorder.style.transform = `translateY(${offset}px)`;
            rightBorder.style.transform = `translateY(${offset}px)`;

            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const opacity = 0.3 - (currentScrollY / maxScroll) * 0.2;
            leftBorder.style.opacity = opacity;
            rightBorder.style.opacity = opacity;
        }
        
        lastScrollY = currentScrollY;
    });
}
