(function () {
  'use strict';
  var form = document.querySelector('.private-inquiry-form');
  if (!form) return;

  var params = new URLSearchParams(window.location.search);
  ['source_page', 'intent', 'application'].forEach(function (field) {
    var parameter = field === 'source_page' ? 'source' : field;
    var value = params.get(parameter);
    var input = form.querySelector('[name="' + field + '"]');
    if (value && input) input.value = value.slice(0, 100);
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    var status = form.querySelector('.form-status');
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = 'Please add your email or WhatsApp and a short question.';
      status.className = 'form-status is-error';
      return;
    }
    if (form.dataset.formConfigured !== 'true') {
      status.textContent = 'Private form delivery is being connected. Please use WhatsApp or email for now.';
      status.className = 'form-status is-error';
      return;
    }
    status.textContent = 'Sending your private inquiry…';
    status.className = 'form-status is-ready';
    var submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    try {
      var response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Form delivery failed');
      window.location.assign('/inquiry-received/');
    } catch (error) {
      status.textContent = 'Your inquiry could not be sent. Please use WhatsApp or email and try again later.';
      status.className = 'form-status is-error';
      submitButton.disabled = false;
    }
  });
}());
