
import { renderPublicLayout, initPublicLayout } from './layout.js';
import { createHomePage } from './pages/home.js';
import { createAuthPage } from '../shared/auth.js';

export function initPublicSite() {
    const app = document.getElementById('app');

    // Basic Router Logic (TODO: Move to a real router if needed)
    const path = window.location.pathname;
    let content = '';

    if (path === '/' || path === '/index.html') {
        content = createHomePage();
    } else if (path === '/login') {
        content = createAuthPage('login');
    } else if (path === '/signup') {
        content = createAuthPage('signup');
    } else {
        content = `<div class="container" style="padding: 4rem 0;"><h1>Page Not Found</h1><p>The page ${path} does not exist.</p><a href="/" class="btn btn-primary">Go Home</a></div>`;
    }

    app.innerHTML = renderPublicLayout(content);
    initPublicLayout();
}
