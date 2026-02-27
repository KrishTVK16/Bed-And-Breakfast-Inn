// 1. THEME TOGGLE LOGIC
const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn, .mobile-theme-toggle');
const htmlElement = document.documentElement;

// Check Local Storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
}

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});




// 3. MOBILE MENU LOGIC
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && closeMenu && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Don't close if it's the theme toggle
            if (!link.classList.contains('mobile-theme-toggle')) {
                mobileMenu.classList.remove('active');
            }
        });
    });
}

// 4. ADMIN SIDEBAR TOGGLE
const sidebarToggle = document.getElementById('sidebar-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const adminSidebar = document.querySelector('.admin-sidebar');
const adminOverlay = document.querySelector('.admin-overlay');

if (sidebarToggle && adminSidebar && adminOverlay) {
    function toggleSidebar() {
        adminSidebar.classList.toggle('active');
        adminOverlay.classList.toggle('active');
    }

    sidebarToggle.addEventListener('click', toggleSidebar);
    adminOverlay.addEventListener('click', toggleSidebar);

    if (closeSidebar) {
        closeSidebar.addEventListener('click', toggleSidebar);
    }
}

// 5. SCROLL TO TOP ON REFRESH & FLOATING BUTTON
// Force scroll to top on page refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});


// Floating Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
    // Create button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'floatingBackToTop';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Scroll to Top');
    document.body.appendChild(backToTopBtn);

    // Initial check
    toggleBackToTop();

    // Scroll listener
    window.addEventListener('scroll', toggleBackToTop);

    function toggleBackToTop() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    // Click listener
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
