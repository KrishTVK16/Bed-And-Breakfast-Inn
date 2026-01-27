
export const createFooter = () => {
    return `
    <footer class="public-footer">
      <div class="container footer-content">
        <div class="footer-column brand-col">
          <div class="footer-logo">Bed & Breakfast</div>
          <p>A sanctuary of calm and comfort. Experience the boutique difference.</p>
        </div>
        
        <div class="footer-column">
          <h4>Explore</h4>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About the Inn</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Guest Services</h4>
          <ul class="footer-links">
             <li><a href="/policies">Policies</a></li>
             <li><a href="/faq">FAQ</a></li>
             <li><a href="/contact">Contact Us</a></li>
             <li><a href="/amenities">Amenities</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Connect</h4>
          <ul class="footer-links">
             <li><a href="#">Instagram</a></li>
             <li><a href="#">Facebook</a></li>
             <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Bed & Breakfast Inn. All rights reserved.</span>
        <button class="btn btn-secondary btn-sm" onclick="window.scrollTo({top:0, behavior:'smooth'})">Back to Top</button>
      </div>
    </footer>
  `;
};
