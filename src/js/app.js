// ### ПОДСКАЗКА, прикреплённая к элементу ###

// import { } from './base';
import createTipElement, { deleteElement } from './actions';

document.addEventListener('DOMContentLoaded', () => { // помещаем addEventlistener внутрь обратной функции - для успешного прохождения тестов Jest
  let tipMarker = false;
  let tipElement;
  let selectedElement;
  document.addEventListener('click', (event) => { //  обработка события клика на элементе
    if ((!tipMarker) && (event.target.tagName === 'BUTTON')) { // подсказки только для кнопок
      tipElement = createTipElement(event.target); // появление подсказки
      tipMarker = true;
      selectedElement = event.target;
    } else if (event.target.tagName === 'BUTTON') {
      deleteElement(tipElement); // исчезание подсказки
      tipMarker = false;
      selectedElement = undefined;
    }
  });
  window.addEventListener('resize', () => { // событие изменения размера окна
    if ((tipMarker) && (selectedElement !== undefined)) {
      deleteElement(tipElement); // удаление "старой" подсказки
      tipElement = createTipElement(selectedElement); // перерисовка подсказки с новыми координатами
    }
  });
});
