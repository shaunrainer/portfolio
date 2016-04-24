$(document).ready(function(){

    /* Animation */
    window.sr = new scrollReveal({
        move: '0px',
        mobile: true,
        delay: 'always'
    });

    /* Contact */

    $("#contact-form").validate({
        submitHandler: function(form) {

            $.ajax({
                type     : form.method,
                cache    : false,
                url      : form.action,
                data     : $(form).serialize(),
                success  : function(data) {
                    $('#contact-form-wrapper').hide();
                    $('#msg-sent-wrapper').fadeIn();
                },
                error  : function(data) {
                    $('#contact-form-wrapper').hide();
                    $('#msg-failed-wrapper').fadeIn();
                }
            });

            return false;

        }
    });

});

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top -70
                }, 1000);
                return false;
            }
        }
    });
});