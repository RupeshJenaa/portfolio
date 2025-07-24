// ==================== UTILITY FUNCTIONS ====================
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

// ==================== MOBILE MENU NAVIGATION (Your Updated Code) ====================
// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = hamburger.classList.contains("active") ? 'hidden' : '';
    });

    // Close mobile menu on link click
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.style.overflow = '';
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        const isMenuOpen = navMenu.classList.contains("active");
        if (isMenuOpen && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.style.overflow = '';
        }
    });
}

// ==================== SMOOTH SCROLLING ====================
// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.scrollY > 50;
        navbar.classList.toggle('scrolled', scrolled);
        
        // Update active nav link
        updateActiveLink();
    }, 100));
}

// Update active navigation link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// ==================== THEME MANAGEMENT ====================
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const sunIcon = themeToggle.querySelector('.fa-sun');
            const moonIcon = themeToggle.querySelector('.fa-moon');
            if (sunIcon && moonIcon) {
                if (theme === 'dark') {
                    sunIcon.style.opacity = '0.5';
                    moonIcon.style.opacity = '1';
                } else {
                    sunIcon.style.opacity = '1';
                    moonIcon.style.opacity = '0.5';
                }
            }
        }
    }

    toggle() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }

    bindEvents() {
        const themeToggle = document.getElementById('theme-toggle');
        if(themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }
}

// ==================== CUSTOM CURSOR ====================
class CustomCursor {
    constructor() {
        this.cursor = {
            dot: document.querySelector('[data-cursor-dot]'),
            outline: document.querySelector('[data-cursor-outline]')
        };
        this.isVisible = true;
        this.init();
    }

    init() {
        if (!this.cursor.dot || !this.cursor.outline) return;
        
        // Hide default cursor
        document.body.style.cursor = 'none';
        this.bindEvents();
    }

    bindEvents() {
        // Mouse move
        document.addEventListener('mousemove', (e) => {
            const { clientX: x, clientY: y } = e;
            this.cursor.dot.style.left = x + 'px';
            this.cursor.dot.style.top = y + 'px';
            this.cursor.outline.style.left = x + 'px';
            this.cursor.outline.style.top = y + 'px';
        });

        // Mouse enter/leave
        document.addEventListener('mouseenter', () => this.show());
        document.addEventListener('mouseleave', () => this.hide());

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn, .project-item, .skill-category');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.addHover());
            el.addEventListener('mouseleave', () => this.removeHover());
        });
    }

    addHover() {
        this.cursor.outline.classList.add('hover');
    }

    removeHover() {
        this.cursor.outline.classList.remove('hover');
    }

    show() {
        if (!this.isVisible) {
            this.cursor.dot.style.opacity = '1';
            this.cursor.outline.style.opacity = '1';
            this.isVisible = true;
        }
    }

    hide() {
        if (this.isVisible) {
            this.cursor.dot.style.opacity = '0';
            this.cursor.outline.style.opacity = '0';
            this.isVisible = false;
        }
    }
}

// ==================== TYPING ANIMATION ====================
class TypingAnimation {
    constructor(element) {
        this.element = element;
        this.words = JSON.parse(element.getAttribute('data-text'));
        this.currentWordIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.speed = 150;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentWord = this.words[this.currentWordIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentWord.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            this.speed = 100;
        } else {
            this.element.textContent = currentWord.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            this.speed = 150;
        }

        if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
            this.speed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            this.speed = 500; // Pause before next word
        }

        setTimeout(() => this.type(), this.speed);
    }
}

// ==================== PARTICLES CONFIGURATION ====================
const initParticles = () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#00ff88", "#06b6d4", "#f59e0b"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.6,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 4,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00ff88",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
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
                        size: 40,
                        duration: 2,
                        opacity: 8,
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
            retina_detect: true
        });
    }
};

// ==================== SCROLL ANIMATIONS ====================
const initScrollAnimations = () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 120,
            delay: 100
        });
    }
};

// ==================== FORM HANDLING ====================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;
        this.bindEvents();
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Add loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success feedback
            this.showMessage('Message sent successfully!', 'success');
            this.form.reset();
        } catch (error) {
            // Error feedback
            this.showMessage('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    showMessage(text, type) {
        const message = document.createElement('div');
        message.className = `form-message ${type}`;
        message.textContent = text;
        this.form.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// ==================== PAGE TRANSITIONS ====================
class PageTransition {
    constructor() {
        this.overlay = document.querySelector('.page-transition');
        this.init();
    }

    init() {
        this.bindEvents();
        this.hideOverlay();
    }

    bindEvents() {
        // Internal links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                this.animateToSection(target);
            });
        });
    }

    showOverlay() {
        this.overlay.classList.add('active');
    }

    hideOverlay() {
        setTimeout(() => {
            this.overlay.classList.remove('active');
        }, 100);
    }

    animateToSection(target) {
        this.showOverlay();
        setTimeout(() => {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            this.hideOverlay();
        }, 300);
    }
}

// ==================== PERFORMANCE OPTIMIZATION ====================
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    preloadCriticalResources() {
        const criticalImages = [
            'images/profile.jpg',
            'images/hero-bg.jpg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    const themeManager = new ThemeManager();
    const customCursor = new CustomCursor();
    const contactForm = new ContactForm();
    const pageTransition = new PageTransition();
    const performanceOptimizer = new PerformanceOptimizer();

    // Initialize typing animation
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        new TypingAnimation(typingElement);
    }

    // Initialize particles
    initParticles();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add smooth reveal animation for page load
    document.body.classList.add('loaded');
});

// ==================== WINDOW EVENTS ====================
window.addEventListener('load', () => {
    // Hide loading spinner if any
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});

window.addEventListener('resize', debounce(() => {
    // Refresh particles on resize
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
        window.pJSDom[0].pJS.fn.vendors.resize();
    }
    
    // Refresh AOS on resize
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}, 250));

// ==================== ADDITIONAL SCROLL EFFECTS ====================
// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
