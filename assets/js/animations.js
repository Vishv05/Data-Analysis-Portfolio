/* ===========================
   ANIMATIONS.JS - GSAP Animations
   =========================== */

function ensureContentVisibilityFallback() {
    const hiddenByUtility = document.querySelectorAll('.opacity-0');
    hiddenByUtility.forEach((element) => {
        element.classList.remove('opacity-0');
    });

    const criticalSections = document.querySelectorAll(
        '#projects .project-card, #certifications > div > div > div[data-aos], #blog .blog-card, #stats .stat-card, #skills .skill-item, [data-aos]'
    );

    criticalSections.forEach((element) => {
        element.style.opacity = '1';
        element.style.transform = 'none';
        element.classList.add('aos-animate');
        if (element.style.display === 'none') {
            element.style.display = '';
        }
    });
}

if (!window.gsap || !window.ScrollTrigger) {
    window.addEventListener('load', () => {
        ensureContentVisibilityFallback();
        console.warn('GSAP/ScrollTrigger not available. Fallback visibility mode enabled.');
    });
} else {

gsap.registerPlugin(ScrollTrigger);

// ===========================
// TIMELINE ANIMATIONS
// ===========================

// About section timeline animation
gsap.from('#about .flex', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8
});

// ===========================
// SKILL SECTION ANIMATIONS
// ===========================

const skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach((bar, index) => {
    const width = bar.style.width;
    gsap.set(bar, { width: '0%' });
    
    gsap.to(bar, {
        width: width,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: bar,
            start: 'top 70%',
            once: true
        },
        delay: index * 0.1
    });
});

// Skill items fade in with stagger
gsap.from('.skill-item', {
    scrollTrigger: {
        trigger: '#skills',
        start: 'top center',
        once: true
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: 'back.out'
});

// ===========================
// STATS COUNTER ANIMATION
// ===========================

const statCards = document.querySelectorAll('.stat-card');
statCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            once: true
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'back.out',
        delay: index * 0.1
    });
});

// Stat card hover animation
statCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
            duration: 0.3,
            overwrite: 'auto'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            overwrite: 'auto'
        });
    });
});

// ===========================
// PROJECT CARDS ANIMATION
// ===========================

const animProjectCards = document.querySelectorAll('.project-card');
animProjectCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            once: true
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: 'back.out',
        delay: index * 0.15
    });
    
    // Hover animation
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -12,
            duration: 0.3,
            overwrite: 'auto',
            boxShadow: '0 25px 50px -12px rgba(34, 211, 238, 0.25)'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            overwrite: 'auto',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        });
    });
});

// ===========================
// BLOG CARDS ANIMATION
// ===========================

const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        y: 30,
        duration: 0.8,
        ease: 'back.out',
        delay: index * 0.1
    });
});

// ===========================
// CERTIFICATION TIMELINE ANIMATION
// ===========================

const certItems = document.querySelectorAll('#certifications > div > div > div[data-aos]');
certItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 75%',
            once: true
        },
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
        duration: 0.8,
        ease: 'power2.out',
        delay: index * 0.15
    });
});

// ===========================
// CONTACT SECTION ANIMATION
// ===========================

gsap.from('#contact > div > div', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 60%',
        once: true
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'back.out'
});

// Contact form focus animations
const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        gsap.to(this, {
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
            duration: 0.3
        });
    });
    
    input.addEventListener('blur', function() {
        gsap.to(this, {
            boxShadow: '0 0 0px rgba(34, 211, 238, 0)',
            duration: 0.3
        });
    });
});

// ===========================
// PARALLAX EFFECT FOR HERO
// ===========================

gsap.to('#hero', {
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    y: 100,
    opacity: 0.8
});

// ===========================
// BUTTON ANIMATIONS
// ===========================

const buttons = document.querySelectorAll('button, a.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            overwrite: 'auto'
        });
    });
    
    btn.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            overwrite: 'auto'
        });
    });
});

// ===========================
// SCROLL-TRIGGERED COUNTER ANIMATION
// ===========================

function animateCounter(element, endValue, duration = 2) {
    let startValue = 0;
    const increment = endValue / (duration * 60); // 60 FPS
    
    const timer = gsap.to(
        { value: startValue },
        {
            value: endValue,
            duration: duration,
            ease: 'power2.out',
            onUpdate: function() {
                element.textContent = Math.floor(this.targets()[0].value);
            }
        }
    );
    
    return timer;
}

// ===========================
// MODAL OPEN/CLOSE ANIMATION
// ===========================

const modalElement = document.getElementById('projectModal');

if (modalElement) {
    // Store reference to the main.js modal functions
    const originalOpenModal = window.openProjectModal;
    const originalCloseModal = window.closeProjectModal;

    // Override with animated versions
    window.openProjectModal = function(projectId) {
        // Call original function first to populate content
        if (originalOpenModal) {
            originalOpenModal(projectId);
        } else {
            modalElement.style.display = 'flex';
        }
        
        // Add animation
        gsap.from('.modal-content', {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.4,
            ease: 'back.out'
        });
    };

    window.closeProjectModal = function() {
        gsap.to('.modal-content', {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                if (originalCloseModal) {
                    originalCloseModal();
                } else {
                    modalElement.style.display = 'none';
                }
            }
        });
    };
}

// ===========================
// HOVER GLOW EFFECT
// ===========================

const glowElements = document.querySelectorAll('.project-card, .blog-card, .stat-card');
glowElements.forEach(element => {
    element.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(this, {
            '--glow-x': x + 'px',
            '--glow-y': y + 'px',
            duration: 0.3,
            overwrite: 'auto'
        });
    });
});

// ===========================
// SCROLL TRIGGER DEBUG MODE
// ===========================

// Uncomment to enable ScrollTrigger debugging
// ScrollTrigger.defaults({ markers: true });

// ===========================
// ANIMATIONS COMPLETE CALLBACK
// ===========================

window.addEventListener('load', () => {
    ensureContentVisibilityFallback();
    console.log('✨ All GSAP animations initialized!');
});

}
