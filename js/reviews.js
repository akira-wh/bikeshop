'use strict';

/*
***********************************************************************************
***********************************************************************************
***
***                     МЕХАНИКА НАПИСАНИЯ И ОТРИСОВКИ ОТЗЫВОВ
***
***********************************************************************************
***********************************************************************************
*/

(function () {

  // Отрисовка самых свежих отзывов.
  refreshReviews();

  // Навешивание на кнопку "Показать еще" хендлера нажатия.
  window.constants.MORE_REVIEWS_BUTTON.addEventListener('click', onMoreReviewsButtonClick);

  // Навешивание на кнопку "Оставить отзыв" хендлера нажатия
  // При нажатии активируется соответствующее модальное окно,
  // а также навешиваются дополнительные хендлеры для его закрытия.
  window.constants.WRITE_REVIEW_BUTTON.addEventListener('click', function () {
    window.constants.MODAL.classList.add('modal--active');
    window.constants.MODAL_CLOSE_BUTTON.addEventListener('click', onModalCloseButtonClick);
    window.addEventListener('keydown', onWindowEscPress);
    window.constants.MODAL_FORM.addEventListener('submit', onModalFormSubmit);
  });

  /*
  ***********************************************************************************
  ***********************************************************************************
  ***
  ***                             ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
  ***
  ***********************************************************************************
  ***********************************************************************************
  */

  /**
   * При клике по кнопке "Показать еще":
   * отрисовка комментариев.
   *
   * @function onMoreReviewsButtonClick
   */
  function onMoreReviewsButtonClick() {
    renderReviews();
  }

  /**
   * При клике по кнопке "Закрыть" —
   * закрытие модального окна,
   * удаление связанных хендлеров.
   *
   * @function onModalCloseButtonClick
   */
  function onModalCloseButtonClick() {
    closeModal();
  }

  /**
   * При нажатии ESC когда модальное окно активно —
   * закрытие модального окна,
   * удаление связанных хендлеров.
   *
   * @function onWindowEscPress
   * @param {object} evt — объект события, нажатие клавиши
   */
  function onWindowEscPress(evt) {
    if (evt.keyCode === window.constants.ESC_KEYCODE) {
      closeModal();
    }
  }

  /**
   * Закрытие модального окна,
   * удаление связанных с ним хендлеров.
   *
   * function closeModal
   */
  function closeModal() {
    window.constants.MODAL.classList.remove('modal--active');

    if (window.constants.MODAL_ALERT_SUCCESS.classList.contains('modal__alert--active')) {
      window.constants.MODAL_ALERT_SUCCESS.classList.remove('modal__alert--active');
    }

    window.constants.MODAL_CLOSE_BUTTON.removeEventListener('click', onModalCloseButtonClick);
    window.removeEventListener('keydown', onWindowEscPress);
    window.constants.MODAL_FORM.removeEventListener('submit', onModalFormSubmit);
  }

  /**
   * При попытке публикации нового отзыва —
   * отмена стандартного поведения формы,
   * запись отзыва в базу данных,
   * перерисовка списка отзывов с учетом нового,
   * обнуление заполненной формы.
   *
   * @function onModalFormSubmit
   * @param {object} evt — объект события, попытка сабмита
   */
  function onModalFormSubmit(evt) {
    evt.preventDefault();

    var newReview = {};

    newReview.author = window.constants.MODAL_FORM_AUTHOR.value;
    newReview.text = window.constants.MODAL_FORM_TEXT.value;

    window.data.unshift(newReview);
    refreshReviews();
    window.constants.MODAL_ALERT_SUCCESS.classList.add('modal__alert--active');
    window.constants.MODAL_FORM.reset();
  }

  /**
   * Перерисовка отзывов, обнуление контейнера и счетчика.
   *
   * @function refreshReviews
   */
  function refreshReviews() {
    window.constants.REVIEWS_CONTAINER.innerHTML = '';
    window.constants.MORE_REVIEWS_BUTTON.dataset.count = '0';
    renderReviews();
  }

  /**
   * Отрисовка следующих 5-и комментариев из базы.
   * Если нужное количество комментариев не набирается — отрисовывается то, что есть.
   *
   * @function renderReviews
   */
  function renderReviews() {
    var reviewsStartIndex = Number(window.constants.MORE_REVIEWS_BUTTON.dataset.count);
    var reviewsFragment = document.createDocumentFragment();

    for (var i = reviewsStartIndex; i < reviewsStartIndex + window.constants.REVIEWS_LOAD_STEP; i++) {
      if (window.data[i]) {
        var review = document.createElement('blockquote');
        var reviewText = document.createElement('p');
        var reviewAuthor = document.createElement('cite');

        review.classList.add('reviews__quote');
        reviewText.classList.add('reviews__quote-text');
        reviewAuthor.classList.add('reviews__quote-author');

        reviewAuthor.textContent = window.data[i].author;
        reviewText.textContent = window.data[i].text;

        review.appendChild(reviewText);
        review.appendChild(reviewAuthor);
        reviewsFragment.appendChild(review);
      } else {
        window.constants.MORE_REVIEWS_BUTTON.classList.add('button--unactive');
        window.constants.MORE_REVIEWS_BUTTON.textContent = 'Конец списка';
        window.constants.MORE_REVIEWS_BUTTON.removeEventListener('click', onMoreReviewsButtonClick);
        break;
      }
    }

    window.constants.REVIEWS_CONTAINER.appendChild(reviewsFragment);
    window.constants.MORE_REVIEWS_BUTTON.dataset.count = i;
  }
})();
