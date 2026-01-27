
import { createHeader, initHeaderListeners } from './components/header.js';
import { createFooter } from './components/footer.js';

export const renderPublicLayout = (mainContent) => {
    return `
    ${createHeader()}
    <main class="public-main">
        ${mainContent}
    </main>
    ${createFooter()}
  `;
};

export const initPublicLayout = () => {
    initHeaderListeners();
};
