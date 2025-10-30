// src/swRegister.js
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/mpc-react/sw.js', { scope: '/mpc-react/' })
        .then((reg) => console.log('✅ SW registered:', reg.scope))
        .catch((err) => console.warn('❌ SW registration failed:', err));
    });
  }
}
