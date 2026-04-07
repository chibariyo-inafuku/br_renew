jQuery(document).ready(function ($) {

    var form = $('.purchase_form'),
        section = $('.nayla-theme-status'),
        warn = form.find('.act-warning'),
        actValue = form.find('input[name="act"]').val();

    if (section.length) {

        section.insertBefore('.redux-wrap-div')

    }


    $('.purchase_form').on('submit', function (e) {
        e.preventDefault();

        section.addClass('checking')

        var purchaseCode = form.find('input[name="purchase_code"]').val();

        $.ajax({
            url: nayla_ajax.ajax_url,
            type: 'POST',
            data: {
                'action': 'nayla_handle_ajax_request',
                'purchase_code': purchaseCode,
                'act': actValue // Include the 'act' value here
            },
            success: function (response) {

                section.removeClass('checking')


                var responseData = JSON.parse(response),
                    isValid = responseData.is_valid;

                console.log(responseData)

                // If purchase code is valid
                if (isValid) {


                    var username = responseData.username,
                        purchaseDate = responseData.sold_at,
                        supportDate = responseData.supported,
                        isExists = responseData.is_exists,
                        url = responseData.url,
                        message = responseData.message,
                        added = responseData.added;



                    if (isExists) {

                        warn.removeClass('success');
                        warn.addClass('no-success');

                        if (actValue === 'deactivate') {

                            location.reload();

                        }

                        if (added) {

                            warn.removeClass('no-success')
                            warn.addClass('success')

                            location.reload();

                        }


                        warn.html(message)

                    } else {

                        if (added) {

                            warn.removeClass('no-success')
                            warn.addClass('success')

                            location.reload();

                        } else {

                            warn.addClass('no-success')
                            warn.removeClass('success')
                        }


                        warn.html(message)

                    }

                } else {

                    let message = responseData.message;

                    warn.removeClass('success')
                    warn.addClass('no-success')
                    warn.html(message)

                }


            },
            error: function (error) {
                console.error('Error:', error);
            }
        });
    });
});
