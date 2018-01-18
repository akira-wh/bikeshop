'use strict';

/*
***********************************************************************************
***********************************************************************************
***
***                     КОНСТАНТЫ: КОДЫ, ЗНАЧЕНИЯ, УЗЛЫ etc.
***
***********************************************************************************
***********************************************************************************
*/

(function () {

  window.constants = {

    // Код клавиши ESC
    ESC_KEYCODE: 27,

    // Контейнер с отзывами
    REVIEWS_CONTAINER: document.querySelector('.reviews__container'),

    // Кнопка "Показать еще" (модуль отзывов)
    MORE_REVIEWS_BUTTON: document.querySelector('.reviews__more-button'),

    // Кнопка "Оставить отзыв" (модуль отзывов)
    WRITE_REVIEW_BUTTON: document.querySelector('.reviews__write-button'),

    // Шаг, с которым подгружаются новые отзывы (количество)
    REVIEWS_LOAD_STEP: 5,

    // Модальное окно для наисания отзыва
    MODAL: document.querySelector('.modal'),

    // Кнопка закрытия модального окна написания отзыва
    MODAL_CLOSE_BUTTON: document.querySelector('.modal__close-button'),

    // Форма создания отзыва
    MODAL_FORM: document.querySelector('.modal__form'),

    // Поле "Имя" формы
    MODAL_FORM_AUTHOR: document.querySelector('.modal__form-input[name="author"]'),

    // Поле "Имя" формы
    MODAL_FORM_TEXT: document.querySelector('.modal__form-textarea[name="text"]'),

    // Оповещение об успешном размещении коментария
    MODAL_ALERT_SUCCESS: document.querySelector('.modal__alert--success')
  };
})();
