(function () {
  'use strict';
  document.querySelectorAll('[data-conversion]').forEach(function (link) {
    link.addEventListener('click', function () {
      try {
        sessionStorage.setItem('ouyang_surge_last_conversion', JSON.stringify({
          type: link.dataset.conversion || '',
          source: link.dataset.source || window.location.pathname,
          application: link.dataset.application || '',
          path: window.location.pathname,
          timestamp: new Date().toISOString()
        }));
      } catch (error) {
        // Tracking is optional and must never interrupt a contact action.
      }
    });
  });
}());
