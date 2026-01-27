
import { renderPublicLayout, initPublicLayout } from '../public-site/layout.js';

export const createAuthPage = (type = 'login') => {
    const title = type === 'login' ? 'Welcome Back' : 'Join Our Community';
    const btnText = type === 'login' ? 'Login' : 'Sign Up';
    const altLink = type === 'login'
        ? `Don't have an account? <a href="/signup" style="color:var(--color-primary);font-weight:600;">Sign up</a>`
        : `Already have an account? <a href="/login" style="color:var(--color-primary);font-weight:600;">Login</a>`;

    return `
    <div class="container" style="max-width: 480px; padding: var(--spacing-2xl) var(--spacing-md);">
       <div class="auth-card" style="
          background: white; 
          padding: var(--spacing-lg); 
          border-radius: var(--radius-lg); 
          box-shadow: var(--shadow-card);
          text-align: center;
       ">
          <h1 style="font-family: var(--font-family-serif); margin-bottom: var(--spacing-md);">${title}</h1>
          <form style="display: flex; flex-direction: column; gap: var(--spacing-md); text-align: left;">
             <div>
                <label style="display:block; margin-bottom:var(--spacing-xs); font-size:var(--font-size-sm); font-weight:500;">Email Address</label>
                <input type="email" placeholder="you@example.com" style="
                   width: 100%; 
                   padding: 0.75rem; 
                   border: 1px solid #ddd; 
                   border-radius: var(--radius-sm);
                ">
             </div>
             <div>
                <label style="display:block; margin-bottom:var(--spacing-xs); font-size:var(--font-size-sm); font-weight:500;">Password</label>
                <input type="password" placeholder="••••••••" style="
                   width: 100%; 
                   padding: 0.75rem; 
                   border: 1px solid #ddd; 
                   border-radius: var(--radius-sm);
                ">
             </div>
             <button type="submit" class="btn btn-primary" style="margin-top: var(--spacing-sm);">${btnText}</button>
          </form>
          <p style="margin-top: var(--spacing-md); font-size: var(--font-size-sm); opacity: 0.8;">
             ${altLink}
          </p>
       </div>
    </div>
  `;
};

// This needs to be hooked into the public router
