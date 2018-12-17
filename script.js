/** @var {object} media - объект видеозаписи*/
var media;
/** @var {object} play - кнопка play/pause */
var play;
/** контейнер таймера под видео */
var size_box;
/** кнопки переключения картинок в Recent Posts */
var left_btn;
var right_btn;
/** номер картинки(поста) для переключения */
var n = 1;
/**
 * Функция инициализирует все элементы проигрывателя и вешает
 * на его элементы управления обработчики событий.
 */
function initiate() {
    //получаем объект видеозаписи
    media = document.getElementById('media');
    //получаем объект кнопки play
    play = document.getElementById('play_button');
    size_box = document.getElementById('size');
    //вешаем обработчик события click на кнопку play/pause
    play.addEventListener('click', playPauseClick);
    left_btn = document.getElementById('bracket_left');
    right_btn = document.getElementById('bracket_right');
}
/**
 * Функция показыает на шкале времени сколько видео уже просмотрено
 */
function status() {
    //если просмотр не закончен
    if (!media.ended) {
        //получаем сколько уже просмотрено в процентах
        var size = media.currentTime.toTimeString();
        size_box.innerHTML = size;
    }
}
/**
 * Функция вызывается при нажатии на кнопку Play/Pause
 */
function playPauseClick() {
    //если видеозапись не стоит на паузе и не дошло до конца
    if (!media.paused && !media.ended) {
        //ставим видео на паузу
        media.pause();
    }
    else {
        //запускаем видеозапись
        media.play();
        setInterval(status, 1000);
    }
}
$(document).ready(function () {
    initiate();
    right_btn.onclick = (function () {
        $('.post' + n).removeClass('hov hov'+n);
        if (n == 3) n = 1;
        else n++;
        $('.post' + n).addClass('hov hov'+n);
    });
    left_btn.onclick = (function () {
        $('.post' + n).removeClass('hov hov'+n);
        if (n == 1) n = 3;
        else n--;
        $('.post' + n).addClass('hov hov'+n);
    });
    $('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
    (function($){
      $(function() {
        $('.menu__icon').on('click', function() {
          $(this).closest('.menu')
            .toggleClass('menu_state_open');
        });

        $('.menu__links-item').on('click', function() {
          // do something

          $(this).closest('.menu')
            .removeClass('menu_state_open');
        });
      });
    })(jQuery);
});