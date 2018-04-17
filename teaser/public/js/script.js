$(function() {
    var headerHight = 100;
    $('a[href^="#"]').click(function () {
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;
        $("html, body").animate({scrollTop: position }, 400, "swing");
        return false;
    });
});