$(function() {
    //Variables
    var footer = $('#js-footer'),
        footerHeight = footer.innerHeight();

    //Now we check document height and window height
    if (($(document.body).height() + footerHeight) < $(window).height()) {
        footer.addClass('footer-sticky');
    } else {
        footer.addClass('footer-static');
    }
});
