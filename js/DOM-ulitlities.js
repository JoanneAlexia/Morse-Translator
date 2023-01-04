export function removeClass(elementSelector, className) {
  const element = document.querySelector(elementSelector);
  element.classList.remove(className);
  return element;
}

export function addClass(elementSelector, className) {
  const element = document.querySelector(elementSelector);
  element.classList.add(className);
  return element;
}
