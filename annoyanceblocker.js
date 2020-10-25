const removePresentation = () => {
  for (let child of document.body.children) {
    if (child.getAttribute("role") === "presentation") {
      child.remove();
    }
  }
  if (document.body.style.overflow !== "auto") {
    document.body.style.overflow = "auto";
  }
};

document.onload = removePresentation();

window.addEventListener("scroll", removePresentation);

window.addEventListener("click", () => {
  const activeEl = document.activeElement;
  if (activeEl.getAttribute("href") === null) {
    return;
  }
  removePresentation();
  location.assign(activeEl.href);
});
