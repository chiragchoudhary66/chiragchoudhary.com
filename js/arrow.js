         //Keep track of last scroll
        var lastScroll = 0;
        $(window).scroll(function(event)
        {

            if (document.body.scrollTop !== 0)
            {
                $(".arrowHeader").fadeOut(1000);
                // alert(document.body.scrollTop);
            }
            else
            {
                $(".arrowHeader").fadeIn(500);
            }
        });