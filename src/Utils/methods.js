import $ from 'jquery';

export function scrollProgressBar() {
    var getMax = function () {
        return $(document).height() - $(window).height();
    };

    var getValue = function () {
        return $(window).scrollTop();
    };

    var progressBar = $('.progress-bar'),
        max = getMax(),
        value,
        width;

    var getWidth = function () {
        // Calculate width in percentage
        value = getValue();
        width = (value / max) * 100;
        width = width + '%';
        return width;
    };

    var setWidth = function () {
        progressBar.css({ width: getWidth() });
    };

    $(document).on('scroll', setWidth);
    $(window).on('resize', function () {
        // Need to reset max
        max = getMax();
        setWidth();
    });
}

export function backToTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate(
            {
                scrollTop: 0
            },
            400
        );
        return false;
    });
}
