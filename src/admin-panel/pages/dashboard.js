
export const createDashboard = () => {
    return `
    <div class="dashboard-grid">
       <div class="stat-card">
          <div class="stat-title">Arrivals Today</div>
          <div class="stat-value">3</div>
       </div>
       <div class="stat-card">
          <div class="stat-title">Departures</div>
          <div class="stat-value">2</div>
       </div>
       <div class="stat-card">
          <div class="stat-title">Occupancy</div>
          <div class="stat-value">75%</div>
       </div>
        <div class="stat-card">
          <div class="stat-title">Cleaning</div>
          <div class="stat-value">2 Rooms</div>
       </div>
    </div>

    <div class="timeline-section">
       <div class="timeline-header">
          <h3>Activity Timeline</h3>
          <div class="controls">
             <button class="btn btn-secondary btn-sm">Today</button>
          </div>
       </div>
       
       <div class="timeline-track">
          <div class="timeline-column">
             <div class="timeline-col-header">Yesterday</div>
             <div class="timeline-card status-reserved">
                <strong>Smith</strong> - Room 101<br>
                <small>Checkout completed</small>
             </div>
          </div>
          
          <div class="timeline-column">
             <div class="timeline-col-header" style="color:var(--color-primary);border-color:var(--color-primary);">Today</div>
              <div class="timeline-card status-cleaning">
                <strong>Room 102</strong><br>
                <small>Needs Cleaning</small>
             </div>
             <div class="timeline-card status-ready">
                <strong>Johnson</strong> - Room 104<br>
                <small>Check-in @ 3pm</small>
             </div>
          </div>
          
          <div class="timeline-column">
             <div class="timeline-col-header">Tomorrow</div>
              <div class="timeline-card status-occupied">
                <strong>Johnson</strong> - Room 104<br>
                <small>Occupied</small>
             </div>
          </div>
       </div>
    </div>
  `;
};
