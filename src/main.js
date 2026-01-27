import './styles/index.css';
import { initPublicSite } from './public-site/index.js';
import { initAdminPanel } from './admin-panel/index.js';
import { initThemeToggle } from './shared/theme-toggle.js';

const theme = initThemeToggle();

// Simple router based on path
const pathname = window.location.pathname;

if (pathname.startsWith('/admin')) {
  document.body.classList.add('admin-mode');
  initAdminPanel();
} else {
  document.body.classList.add('public-mode');
  initPublicSite();
}

// Add global Theme Toggle UI (Temporary position)
const toggleBtn = document.createElement('button');
toggleBtn.id = 'theme-toggle-global';
toggleBtn.innerText = '🌗';
toggleBtn.style.position = 'fixed';
toggleBtn.style.top = '1rem';
toggleBtn.style.right = '1rem';
toggleBtn.style.zIndex = '9999';
toggleBtn.style.fontSize = '1.5rem';
toggleBtn.onclick = () => theme.toggle();
document.body.appendChild(toggleBtn);
