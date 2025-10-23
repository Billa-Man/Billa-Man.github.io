(function() {
  'use strict';
  
  function init() {
    const bar = document.querySelector('.proj-filterbar');
    if (!bar) return;

    const listContainers = [
      ...document.querySelectorAll('.projects-list'),
      ...document.querySelectorAll('.projects-grid')
    ];

    const getAllCards = () => ([
      ...document.querySelectorAll('.projects-list .project-row'),
      ...document.querySelectorAll('.projects-grid .project-tile')
    ]);

    // Event delegation for filter buttons
    bar.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const btn = target.closest('.pf-btn');
      if (!btn) return;

      // Active state
      bar.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const f = btn.dataset.filter || 'all';
      const cards = getAllCards();

      cards.forEach((card) => {
        const cat = card.dataset.category;
        const show = (f === 'all') || (cat === f);
        if (!show && 'open' in card) card.open = false;
        card.style.display = show ? '' : 'none';
      });
    });

    // One-open-at-a-time guard per container
    listContainers.forEach((container) => {
      container.querySelectorAll('details').forEach((d) => {
        d.addEventListener('toggle', () => {
          if (!d.open) return;
          container.querySelectorAll('details[open]').forEach((other) => {
            if (other !== d) other.open = false;
          });
        });
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();