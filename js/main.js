// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

console.log('🔍 Theme Toggle Button:', themeToggle);

// Check for saved theme preference or default to 'dark' (our black theme)
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
console.log(`🎨 Initial theme set to: ${currentTheme}`);

// Set initial icon based on current theme
if (themeToggle) {
    if (currentTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    console.log(`✅ Theme toggle initialized with ${currentTheme} mode`);
    
    // Add click event listener
    themeToggle.addEventListener('click', () => {
        console.log('🖱️ Theme toggle clicked!');
        
        const current = htmlElement.getAttribute('data-theme') || 'dark';
        const newTheme = current === 'dark' ? 'light' : 'dark';
        
        console.log(`🔄 Switching from ${current} to ${newTheme}`);
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (newTheme === 'light') {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            console.log('☀️ Switched to LIGHT mode');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            console.log('🌙 Switched to DARK mode');
        }
        
        // Force a repaint
        document.body.style.transition = 'all 0.3s ease';
        
        console.log(`✅ Theme is now: ${newTheme}`);
    });
} else {
    console.error('❌ Theme toggle button NOT FOUND! Check HTML id="themeToggle"');
}

// ==================== MOBILE MENU TOGGLE ====================
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== TYPED.JS INITIALIZATION ====================
const typed = new Typed('#typed-text', {
    strings: [
        'Big Data Analyst',
        'Machine Learning Engineer',
        'Data Analyst',
    ],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
});

// ==================== PARTICLES.JS CONFIGURATION ====================
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
            value: '#D946EF'
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
            random: true,
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
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6A0DAD',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
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
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ==================== NAVBAR SCROLL EFFECT ====================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = '0 2px 10px var(--shadow)';
    } else {
        nav.style.boxShadow = '0 5px 20px var(--shadow-hover)';
    }
    
    lastScroll = currentScroll;
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Don't unobserve so animation can repeat if needed
        }
    });
}, observerOptions);

// Observe intro section with delay
setTimeout(() => {
    const introSection = document.querySelector('.intro-container');
    if (introSection) {
        observer.observe(introSection);
    }
}, 100);

// Observe project items with staggered animation
setTimeout(() => {
    document.querySelectorAll('.project-item').forEach((project, index) => {
        project.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(project);
    });
}, 200);

// Observe timeline items with staggered animation
setTimeout(() => {
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });
}, 300);

console.log('✅ Scroll animations initialized');

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.display = 'none';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== SOCIAL ICONS INTERACTIONS ====================
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const iconElement = this.querySelector('i');
        iconElement.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        const iconElement = this.querySelector('i');
        iconElement.style.transform = 'scale(1) rotate(0deg)';
    });
});



// ==================== SKILL ITEM HOVER EFFECTS ====================
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== PROJECT CARD INTERACTIONS ====================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.project-image i');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(360deg)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.project-image i');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ==================== DYNAMIC YEAR FOR COPYRIGHT ====================
document.querySelector('.copyright').textContent = `© ${new Date().getFullYear()} AmirdaSelvi C.S. All rights reserved.`;

// ==================== PARALLAX EFFECT FOR HERO ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-content');
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
        parallax.style.opacity = 1 - (scrolled / 600);
    }
});

// ==================== INITIALIZE ON LOAD ====================
window.addEventListener('load', () => {
    console.log('✅ Portfolio website loaded successfully!');
    
    // Verify particles loaded
    if (window.pJSDom && window.pJSDom.length > 0) {
        console.log('✅ Particles.js initialized');
    } else {
        console.warn('⚠️ Particles.js not initialized');
    }
    
    // Verify typed.js loaded
    if (typeof Typed !== 'undefined') {
        console.log('✅ Typed.js initialized');
    } else {
        console.warn('⚠️ Typed.js not initialized');
    }
    
    // Check for animation elements
    const projectItems = document.querySelectorAll('.project-item');
    const timelineItems = document.querySelectorAll('.timeline-item');
    console.log(`✅ Found ${projectItems.length} project items for animation`);
    console.log(`✅ Found ${timelineItems.length} timeline items for animation`);
});



// ==================== RESUME DOWNLOAD TRACKING ====================
document.querySelector('.btn-download').addEventListener('click', function() {
    console.log('Resume downloaded');
    // You can add analytics tracking here
});

console.log('🚀 Portfolio initialized successfully!');
