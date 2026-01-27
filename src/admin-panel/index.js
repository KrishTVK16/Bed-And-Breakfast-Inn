
import { renderAdminLayout, initAdminLayout } from './layout.js';
import { createDashboard } from './pages/dashboard.js';

export function initAdminPanel() {
    const app = document.getElementById('app');

    // TODO: Add routing logic for sub-pages
    const content = createDashboard();

    app.innerHTML = renderAdminLayout(content);
    initAdminLayout();
}
