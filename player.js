/** @var {object} media - объект видеозаписи*/
var	media;

/** @var {object} play - кнопка play/pause */
var	play;

var size_box;

/**
 * Функция инициализирует все элементы проигрывателя и вешает
 * на его элементы управления обработчики событий.
 */
function initiate()
{ 
	//получаем объект видеозаписи
	media = document.getElementById('media');

	//получаем объект кнопки play
	play = document.getElementById('play_button');

    size_box = document.getElementById('size');
	//вешаем обработчик события click на кнопку play/pause
	play.addEventListener('click', playPauseClick);

}
/**
 * Функция показыает на шкале времени сколько видео уже просмотрено
 */
function status()
{
	//если просмотр не закончен
	if(!media.ended)
	{
		//получаем сколько уже просмотрено в процентах
		var size = media.currentTime.toTimeString();
        size_box.innerHTML = size;
	}
	
}
/**
 * Функция вызывается при нажатии на кнопку Play/Pause
 */
function playPauseClick()
{
	//если видеозапись не стоит на паузе и не дошло до конца
	if(!media.paused && !media.ended) 
	{
		//ставим видео на паузу
		media.pause();
	}
	else
	{
		//запускаем видеозапись
		media.play();
        setInterval(status, 1000);
	}
}


$(document).ready(function() {
    initiate();
});