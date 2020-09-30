(function($) {
    /*EQUAL HEIGHTS FUNC*/

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each(function() {
            var height = $(this).innerHeight();

            if (height > maxHeight) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

    // auto-initialize plugin
    $('[data-equal]').each(function() {
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });
    
    $('.blog-table-wrpp .blog-post-content').equalHeights();

    $(document).ready(function() {
        
        //nice-select
         $('select').niceSelect();

        //menu hover
        if ($(window).width() > 1199) {
            $('.main-header .navbar-nav li').hover(function() {
                $(this).find('.dropdown-menu').fadeIn(200);
            }, function() {
                $(this).find('.dropdown-menu').fadeOut(200);
            });
        }
        //mobile dropdown menu
        $('.main-header .navbar-nav li a').click(function(){
            $(this).parent().find('.dropdown-menu').slideDown();
        })
        
        
        $(".navbar-toggle").on("click", function () {
          $(this).toggleClass("active");
      });

        $('.menu-wrapper .menu .fa').on('click', function() {
            $(this).next().slideToggle(10)
            $(this).toggleClass('rotated')
        });

        // if($(window).width() >= 1280) {
        //     $('.burger-menu_button').hover(function() {
        //         $(this).find('spun').addClass('hidden')
        //         $(this).find('img').addClass('vissib')
        //     }, function() {
        //         $(this).find('spun').removeClass('hidden')
        //         $(this).find('img').removeClass('vissib')
        //     })
        // }

        // $('.burger-menu_button').on('click', function() {
        //     $('.menu-wrapper').addClass('transformed')
        //     $('html, body').addClass('fix')
        // })

        // $('.exit-butt').on('click', function(e) {
        //     e.preventDefault();
        //     $('.menu-wrapper').removeClass('transformed')
        //     $('html, body').removeClass('fix')
        // })

        //accordion
        $('.accordion-item__header').click(function(){
            $(this).parent().toggleClass('open');
            $(this).parent().find('.accordion-item__body').slideToggle();
        })

        //counter
         $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

         $('.menu-button').click(function(){
            $('.fullscreen-menu').fadeIn(300);
            $('.fullscreen-menu').addClass('menu-open');
            $('body, html').addClass('fix');
         })

         $('.close-btn').click(function(){
            $('.fullscreen-menu').removeClass('menu-open');
            setTimeout(() => {
                $('.fullscreen-menu').fadeOut(300);
                $('body, html').removeClass('fix');
            }, 200)
         })

         //slick-slider
         $('.testimonial-slider').slick({
            slideToShow: 1,
            slideToScroll: 1,
            arrows: true
         })

         $('<span class="menu-trigger"></span>').insertAfter('.main-menu .menu-item-has-children > a');
         $('.main-menu .menu-trigger').click(function(){
            $(this).parent().find('.sub-menu').slideToggle(300);
            $(this).parent().toggleClass('sub-open');
         })
        
        //top section menu scroll start
        $('.top-section-menu .menu li a').click(function(e) {
            e.preventDefault();
            var href = $(this).attr('href');
            var offset = $(href).offset().top;
            $('body,html').animate({ scrollTop: offset - 115 }, 800);
        })
        //top section menu scroll end
        

    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var heroH = $('.hero-section').outerHeight() - 120;
        if (scroll > heroH) {
            $('.main-header').addClass('sticky');
        } else {
            $('.main-header').removeClass('sticky');
        }

        if (scroll > heroH) {
            $('.top-section-menu').addClass('sticky');
        } else {
            $('.top-section-menu').removeClass('sticky');
        }

        if (scroll < heroH && scroll > 50) {
            $('.main-header').addClass('middle-state');
        } else {
            $('.main-header').removeClass('middle-state');
        }
    });

    $(window).resize(function() {
        
        //menu hover
        if ($(window).width() > 1199) {
            $('.main-header .navbar-nav li').hover(function() {
                $(this).find('.dropdown-menu').fadeIn(200);
            }, function() {
                $(this).find('.dropdown-menu').fadeOut(200);
            });
        }
        
    });

    $(window).load(function() {

    });
    

    
    
})(jQuery);