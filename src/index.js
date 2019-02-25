// import './styles.scss';
import './js/common.js';
import './css/main.css';
import './sass/main.sass';
import './bootstrap/bootstrap';

$(document).ready(function() {
    $('.row').append('<h3 class="title">Hello jQuery!</h3>');
    $('.title').css('background-color', 'grey').addClass('d-flex col-md-6');
});