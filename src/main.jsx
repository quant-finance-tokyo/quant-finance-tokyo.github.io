import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Scroll animation observer
const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  const observe = () => {
    document.querySelectorAll('.fade-in, .fade-in-right, .fade-in-up').forEach((el) => {
      if (!el.classList.contains('visible')) {
        observer.observe(el);
      }
    });
  };

  // Observe on initial load and on route changes
  observe();
  const mutationObserver = new MutationObserver(() => {
    setTimeout(observe, 50);
  });
  mutationObserver.observe(document.getElementById('root'), {
    childList: true,
    subtree: true,
  });
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Init after first render
requestAnimationFrame(() => {
  requestAnimationFrame(initScrollAnimations);
});
