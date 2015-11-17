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
                type: form.method,
                url: form.action,
                data: $(form).serialize(),
                success: function(data){
                    $('#contact-form-wrapper').hide();
                    $('#msg-sent-wrapper').fadeIn();
                }
            });

        }
    });

});