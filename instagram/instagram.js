window.addEventListener("click", () => {
  const activeEl = document.activeElement;
  if (activeEl.getAttribute("href") === null) {
    return;
  }
  location.assign(activeEl.href);
});
