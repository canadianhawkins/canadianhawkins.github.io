$('a[href^="#"]').on('click',function (e) {
        // e.preventDefault();

        var target = this.hash,
        $target = $(target);

       $('html, body').stop().animate({
         'scrollTop': $target.offset().top-10
        }, 400, 'swing', function () {
         window.location.hash = target;
        });
    });