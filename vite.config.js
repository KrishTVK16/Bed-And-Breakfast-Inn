import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        modern: resolve(__dirname, 'index-2.html'),
        about: resolve(__dirname, 'about.html'),
        amenities: resolve(__dirname, 'amenities.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        login: resolve(__dirname, 'login.html'),
        policies: resolve(__dirname, 'policies.html'),
        rooms: resolve(__dirname, 'rooms.html'),
        signup: resolve(__dirname, 'signup.html'),
        // Admin Pages
        admin: resolve(__dirname, 'admin/index.html'),
        adminReservations: resolve(__dirname, 'admin/reservations.html'),
        adminCalendar: resolve(__dirname, 'admin/calendar.html'),
        adminRooms: resolve(__dirname, 'admin/rooms.html'),
        adminGuests: resolve(__dirname, 'admin/guests.html'),
        adminSettings: resolve(__dirname, 'admin/settings.html'),
      },
    },
  },
});
