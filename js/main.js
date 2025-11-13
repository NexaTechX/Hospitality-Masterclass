/**
 * Hospitality Masterclass Landing Page
 * Main JavaScript File
 * 
 * Features:
 * - Countdown Timer
 * - Smooth Scroll Navigation
 * - Scroll Animations
 * - Sticky Navigation
 * - Mobile Menu Toggle
 * - Payment Link Handler
 * - Sticky Bottom CTA
 */

// ===================================
// CONFIGURATION
// ===================================
const CONFIG = {
    eventDate: new Date('2025-11-25T09:00:00'),
    paymentLinks: {
        physical: 'https://paystack.shop/pay/hatman2025', // Physical ticket payment link
        virtual: 'https://paystack.com/pay/virtual-ticket-link'    // Replace with virtual ticket payment link
    },
    earlyBirdDiscount: 0.05,
    prices: {
        physical: 200000,
        virtual: 150000
    }
};

// ===================================
// COUNTDOWN TIMER
// ===================================
function updateCountdown() {
    const now = new Date().getTime();
    const distance = CONFIG.eventDate.getTime() - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<p style="color: var(--accent-yellow); font-size: 1.5rem;">Event has started!</p>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown display
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ===================================
// EARLY BIRD DISCOUNT CALCULATOR
// ===================================
function calculateDiscount() {
    // Calculate physical ticket price
    const physicalDiscounted = CONFIG.prices.physical * (1 - CONFIG.earlyBirdDiscount);
    const physicalPriceElement = document.getElementById('physicalPrice');
    
    if (physicalPriceElement) {
        physicalPriceElement.textContent = `₦${physicalDiscounted.toLocaleString('en-NG')}`;
    }
    
    // Calculate virtual ticket price
    const virtualDiscounted = CONFIG.prices.virtual * (1 - CONFIG.earlyBirdDiscount);
    const virtualPriceElement = document.getElementById('virtualPrice');
    
    if (virtualPriceElement) {
        virtualPriceElement.textContent = `₦${virtualDiscounted.toLocaleString('en-NG')}`;
    }
}

// ===================================
// SMOOTH SCROLL NAVIGATION
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hash or just #
            if (!href || href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// ===================================
// STICKY NAVIGATION
// ===================================
function initStickyNav() {
    const navbar = document.getElementById('navbar');
    const stickyCta = document.getElementById('stickyCta');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow to navbar on scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide sticky CTA based on scroll position
        if (scrollTop > 800) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
        
        lastScrollTop = scrollTop;
    });
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in and slide-in elements
    document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// PAYMENT LINK HANDLER
// ===================================
function initPaymentHandler() {
    // Handle main payment button
    const paymentBtn = document.getElementById('paymentBtn');
    
    if (paymentBtn) {
        paymentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Track button click (optional - for analytics)
            console.log('Payment button clicked');
            
            // Default to physical ticket or show ticket selection
            window.open(CONFIG.paymentLinks.physical, '_blank');
        });
    }
    
    // Handle ticket-specific buttons
    document.querySelectorAll('.btn-ticket').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const ticketType = btn.getAttribute('data-ticket');
            
            if (ticketType && CONFIG.paymentLinks[ticketType]) {
                e.preventDefault();
                
                // Track ticket type selection
                trackEvent('Registration', 'Click', `${ticketType} ticket`);
                console.log(`${ticketType} ticket selected`);
                
                // Open appropriate payment link
                window.open(CONFIG.paymentLinks[ticketType], '_blank');
            }
        });
    });
}

// ===================================
// FORM VALIDATION (if needed in future)
// ===================================
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!formData.email || !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone || !formData.phone.match(/^[\d\s\+\-\(\)]+$/)) {
        errors.push('Please enter a valid phone number');
    }
    
    return errors;
}

// ===================================
// LOADING ANIMATION
// ===================================
function showLoadingState(button) {
    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<span>Processing...</span>';
    
    return () => {
        button.disabled = false;
        button.innerHTML = originalText;
    };
}

// ===================================
// ANALYTICS TRACKING (Optional)
// ===================================
function trackEvent(category, action, label) {
    // Integrate with Google Analytics or other analytics platforms
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    console.log(`Track Event: ${category} - ${action} - ${label}`);
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
    }).format(amount);
}

// ===================================
// PHONE LINK TRACKING
// ===================================
function initPhoneTracking() {
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('Contact', 'Phone Call', link.getAttribute('href'));
        });
    });
    
    document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('Contact', 'WhatsApp', 'Click');
        });
    });
}

// ===================================
// LAZY LOAD IMAGES (Optional Enhancement)
// ===================================
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// PAGE VISIBILITY API
// ===================================
function handleVisibilityChange() {
    if (document.hidden) {
        // Pause countdown or animations if needed
    } else {
        // Resume countdown
        updateCountdown();
    }
}

// ===================================
// COPY TO CLIPBOARD (for bank details)
// ===================================
function initCopyToClipboard() {
    document.querySelectorAll('.bank-value').forEach(element => {
        element.style.cursor = 'pointer';
        element.title = 'Click to copy';
        
        element.addEventListener('click', () => {
            const text = element.textContent;
            
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    // Show feedback
                    const originalText = element.textContent;
                    element.textContent = 'Copied!';
                    element.style.color = 'var(--accent-yellow)';
                    
                    setTimeout(() => {
                        element.textContent = originalText;
                        element.style.color = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    const originalText = element.textContent;
                    element.textContent = 'Copied!';
                    element.style.color = 'var(--accent-yellow)';
                    
                    setTimeout(() => {
                        element.textContent = originalText;
                        element.style.color = '';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
                
                document.body.removeChild(textArea);
            }
        });
    });
}

// ===================================
// KEYBOARD NAVIGATION
// ===================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
}

// ===================================
// INITIALIZE ALL FEATURES
// ===================================
function init() {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Calculate and display discounted price
    calculateDiscount();
    
    // Initialize all features
    initSmoothScroll();
    initStickyNav();
    initMobileMenu();
    initScrollAnimations();
    initPaymentHandler();
    initPhoneTracking();
    initCopyToClipboard();
    initKeyboardNavigation();
    
    // Optional features
    // initLazyLoading(); // Uncomment if using lazy loading
    
    // Page visibility API
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Track page load
    trackEvent('Page', 'Load', 'Landing Page');
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    console.log('🎉 Landing page initialized successfully!');
}

// ===================================
// DOM CONTENT LOADED
// ===================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===================================
// WINDOW LOAD EVENT
// ===================================
window.addEventListener('load', () => {
    // Any actions that need to wait for all resources to load
    console.log('All resources loaded');
});

// ===================================
// ERROR HANDLING
// ===================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You can send errors to a logging service here
});

// ===================================
// EXPORT FOR TESTING (if needed)
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        updateCountdown,
        calculateDiscount,
        validateForm,
        formatCurrency,
        debounce,
        isInViewport
    };
}

