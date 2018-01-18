'use strict';

/*
***********************************************************************************
***********************************************************************************
***
***                           МЕХАНИКА ОТРИСОВКИ ОТЗЫВОВ
***
***********************************************************************************
***********************************************************************************
*/

(function () {

  // Навешивание на кнопку "Показать еще" хендлера нажатия
  window.constants.MORE_REVIEWS_BUTTON.addEventListener('click', onMoreReviewsButtonClick);

  /**
   * При клике по кнопке "Показать еще":
   * отрисовка следующих комментариев.
   *
   * @function onMoreReviewsButtonClick
   */
  function onMoreReviewsButtonClick() {
    renderReviews();
  }

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
   * Отрисовка следующих 5-и комментариев из базы.
   * Если комментариев не набирается нужное количество — отрисовывается то, что есть.
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
        break;
      }
    }

    window.constants.REVIEWS_CONTAINER.insertBefore(reviewsFragment, window.constants.REVIEWS_INSERT_POINT);
    window.constants.MORE_REVIEWS_BUTTON.dataset.count = i;
  }
})();
