// import './styles.scss';
import './js/common.js';
// import './css/main.css';
import './sass/main.sass';
import './libs/bootstrap/bootstrap';

$(document).ready(function() {
    $('.wrap').append('<h3 class="title">Hello jQuery!</h3>');
    $('.title').css('background-color', 'green').addClass('d-flex col-md-6');
});
