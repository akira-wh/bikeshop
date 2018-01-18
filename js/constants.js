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

    // Шаг, с которым подгружаются новые отзывы (количество)
    REVIEWS_LOAD_STEP: 5,

    // Точка отрисовки комментариев
    REVIEWS_INSERT_POINT: document.querySelector('.reviews__actions-container'),

    // Шаблон разметки отзыва
    REVIEW_TEMPLATE: document.querySelector('template').content.querySelector('.reviews__quote')
  };
})();
