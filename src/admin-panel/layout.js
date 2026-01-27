
export const createAdminSidebar = () => {
    return `
    <aside class="admin-sidebar" id="admin-sidebar">
       <div class="admin-logo">
          <span>InnKeeper</span> <!-- Not using full logo, distinct name -->
       </div>
       
       <nav class="admin-nav">
          <a href="/admin/dashboard" class="admin-nav-link active">
             <span>Dashboard</span>
          </a>
          <a href="/admin/reservations" class="admin-nav-link">
             <span>Reservations</span>
          </a>
          <a href="/admin/calendar" class="admin-nav-link">
             <span>Calendar</span>
          </a>
          <a href="/admin/rooms" class="admin-nav-link">
             <span>Rooms</span>
          </a>
          <a href="/admin/guests" class="admin-nav-link">
             <span>Guests</span>
          </a>
          <a href="/admin/settings" class="admin-nav-link">
             <span>Settings</span>
          </a>
       </nav>

       <div class="user-profile">
          <div class="avatar" style="width:32px;height:32px;background:var(--color-secondary);border-radius:50%;"></div>
          <div class="user-info">
             <div style="font-size:0.8rem;font-weight:600;">Admin User</div>
             <div style="font-size:0.7rem;opacity:0.7;">Manager</div>
          </div>
       </div>
    </aside>
    `;
};

export const renderAdminLayout = (mainContent) => {
    return `
    <div class="admin-layout">
        ${createAdminSidebar()}
        <main class="admin-main">
           <header class="admin-header">
              <h2>Dashboard</h2>
              <div class="actions">
                 <button class="btn btn-secondary btn-sm" id="admin-menu-toggle">Menu</button>
                 <button class="btn btn-primary btn-sm">New Booking</button>
              </div>
           </header>
           ${mainContent}
        </main>
    </div>
  `;
};

export const initAdminLayout = () => {
    // Mobile Sidebar Toggle
    const toggle = document.getElementById('admin-menu-toggle');
    const sidebar = document.getElementById('admin-sidebar');
    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
};
