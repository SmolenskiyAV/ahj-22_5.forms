/* eslint-disable linebreak-style */
/* eslint-disable default-case */

export default function createTipElement(elementWithTip) { // создание элемента-подсказки
  const tipElement = document.createElement('div');
  tipElement.className = 'Tip';
  tipElement.textContent = elementWithTip.getAttribute('data-content');
  elementWithTip.offsetParent.appendChild(tipElement);
  tipElement.style.top = `${elementWithTip.offsetTop - tipElement.offsetHeight - 10}px`;
  tipElement.style.left = `${elementWithTip.offsetLeft + elementWithTip.offsetWidth / 2 - tipElement.offsetWidth / 2}px`;
  return tipElement;
}

export function deleteElement(deletedElement) { // удалить элемент
  deletedElement.remove();
}
