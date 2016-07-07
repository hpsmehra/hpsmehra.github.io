$(document).ready(function () {
    $('body').append('<div id="back-top"><a href="#top"><i class="fa fa-chevron-up"></i></a></div>')
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});