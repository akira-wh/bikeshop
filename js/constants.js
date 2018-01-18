'use strict';

/*
***********************************************************************************
***********************************************************************************
***
***                 КОНСТАНТЫ: УЗЛЫ, ГЛОБАЛЬНЫЕ ОБЪЕКТЫ, МАССИВЫ
***
***********************************************************************************
***********************************************************************************
*/

(function () {

  window.constants = {

    // Контейнер с отзывами
    REVIEWS_CONTAINER: document.querySelector('.reviews__container'),

    // Кнопка "Показать еще" (модуль отзывов)
    MORE_REVIEWS_BUTTON: document.querySelector('.reviews__more-button'),

    // Кнопка "Оставить отзыв" (модуль отзывов)
    WRITE_REVIEW_BUTTON: document.querySelector('.reviews__write-button'),

    // Шаг, с которым подгружаются новые отзывы (количество)
    REVIEWS_LOAD_STEP: 5,

    // Точка отрисовки комментариев
    REVIEWS_INSERT_POINT: document.querySelector('.reviews__actions-container'),

    // Модальное окно для наисания отзыва
    MODAL: document.querySelector('.modal'),

    // Кнопка закрытия модального окна написания отзыва
    MODAL_CLOSE_BUTTON: document.querySelector('.modal__close-button')
  };
})();
