/* ===========================
   PARTICLES.JS - Background Animation
   =========================== */

// Initialize Particles.js in hero section
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-bg', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#3b82f6', '#22d3ee', '#60a5fa']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.3,
            random: 0.5,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#22d3ee',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.4,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true,
    background: {
        color: '#0f172a',
        image: '',
        position: '50% 50%',
        repeat: 'no-repeat',
        size: 'cover',
        attachment: 'fixed'
    }
});
} // End particlesJS check

// Responsive adjustment for particles
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.number.value = 40;
        }
    }
});

// Monitor particle interactions
if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
    console.log('✨ Particles.js background animation initialized!');
}
