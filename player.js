/** @var {object} media - объект видеозаписи*/
var	media;

/** @var {object} play - кнопка play/pause */
var	play;

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


	//вешаем обработчик события click на кнопку play/pause
	play.addEventListener('click', playPauseClick);

}
/**
 * Функция вызывается при нажатии на кнопку Play/Pause
 */
function playPauseClick()
{
	
		//запускаем видеозапись
		media.play();
}
$(document).ready(function() {
    initiate();
});