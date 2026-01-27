
export const createHomePage = () => {
    return `
    <section class="hero-section">
      <div class="container hero-content">
        <h1>Escape to Serenity</h1>
        <p class="hero-subtitle">A historic inn where luxury meets nature. Experience our Deep Forest and Warm Sand aesthetic.</p>
        <div class="hero-actions">
           <a href="/booking" class="btn btn-primary">Book Your Stay</a>
           <a href="/about" class="btn btn-secondary">Our Story</a>
        </div>
      </div>
      <!-- Placeholder for Hero Image -->
      <div class="hero-image-placeholder"></div>
    </section>

    <section class="container intro-section">
       <div class="intro-text">
          <h2>Two Souls, One Experience</h2>
          <p>Whether you seek the calm of the forest or the warmth of the sand, our inn provides a perfect sanctuary. Discover our carefully curated rooms and premium amenities.</p>
       </div>
    </section>

    <section class="container featured-rooms">
       <h3>Featured Rooms</h3>
       <div class="room-grid">
          <!-- Room Card 1 -->
          <div class="room-card">
             <div class="room-image"></div>
             <div class="room-details">
                <h4>The Forest Suite</h4>
                <p>Immerse yourself in deep greens and tranquility.</p>
                <div class="room-footer">
                   <span class="price">$150/night</span>
                   <a href="/rooms/forest-suite" class="btn btn-secondary btn-sm">View</a>
                </div>
             </div>
          </div>
          <!-- Room Card 2 -->
          <div class="room-card">
             <div class="room-image" style="background-color: var(--color-secondary);"></div>
             <div class="room-details">
                <h4>The Sand Loft</h4>
                <p>Bright, airy, and full of warmth.</p>
                <div class="room-footer">
                   <span class="price">$180/night</span>
                   <a href="/rooms/sand-loft" class="btn btn-secondary btn-sm">View</a>
                </div>
             </div>
          </div>
       </div>
    </section>
  `;
};
