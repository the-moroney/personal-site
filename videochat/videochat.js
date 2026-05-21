(() => {
  const body = document.body;
  const target = body?.dataset?.redirectUrl;
  if (!target) return;

  const button = document.querySelector('.redirect-button');
  if (button) button.href = target;

  const go = () => {
    window.location.replace(target);
  };

  window.setTimeout(go, 1200);
})();
