
export const createHeader = () => {
    return `
    <header class="public-header">
      <div class="container public-header-content">
        <a href="/" class="brand-logo">
          <!-- Placeholder SVG Logo -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
          </svg>
          Bed & Breakfast
        </a>

        <div class="desktop-nav-area hidden-on-mobile">
          <nav class="public-nav">
             <a href="/" class="nav-link">Home</a>
             <a href="/rooms" class="nav-link">Rooms</a>
             <a href="/amenities" class="nav-link">Amenities</a>
             <a href="/contact" class="nav-link">Contact</a>
          </nav>
        </div>

        <div class="header-actions">
           <!-- Theme Toggle (Placeholder, actually handled globally but should be here) -->
           <button class="btn btn-secondary btn-sm global-theme-toggle" aria-label="Toggle Theme">
             Theme
           </button>

           <div class="auth-btn-group hidden-on-mobile">
             <a href="/login" class="btn btn-secondary">Login</a>
             <a href="/signup" class="btn btn-primary">Sign Up</a>
           </div>

           <button class="menu-toggle btn btn-secondary hidden-on-desktop" aria-label="Open Menu">
             Menu
           </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu-overlay" id="mobile-menu">
         <div class="mobile-menu-header">
            <span class="brand-logo">Menu</span>
            <button class="close-menu btn btn-secondary">Close</button>
         </div>
         <nav class="mobile-nav-links">
            <div class="mobile-theme-wrapper">
               <!-- Theme toggle goes first on mobile -->
               <button class="btn btn-secondary w-full mobile-theme-toggle">Switch Theme</button>
            </div>
             <a href="/login" class="btn btn-secondary">Login</a>
             <a href="/signup" class="btn btn-primary">Sign Up</a>
             <hr style="opacity:0.1; margin:1rem 0;">
             <a href="/" class="nav-link">Home</a>
             <a href="/rooms" class="nav-link">Rooms</a>
             <a href="/amenities" class="nav-link">Amenities</a>
             <a href="/contact" class="nav-link">Contact</a>
         </nav>
      </div>
    </header>
  `;
};

export const initHeaderListeners = () => {
    // Mobile Menu Logic
    const menuBtn = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    }
};
