(function() {
	'use strict';

	var $ = jQuery;

	function _typeof(obj) {
		"@babel/helpers - typeof";

		if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
			_typeof = function(obj) {
				return typeof obj;
			};
		} else {
			_typeof = function(obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
			};
		}

		return _typeof(obj);
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	var ThemeHelper = {
		
	};
	var Theme = {



    likeit: function likeit() {

        $( document ).on( 'click', '.pt-like-it', function() {
            var post_id = $(this).find('.like-button').attr('data-id'),
                nonce = $(this).find('.like-button').attr("data-nonce");

            $(this).addClass('disabled');

            $.ajax({
                url: RainbowObj.ajaxurl,
                type : 'post',
                data : {
                    action : 'rainbow_pt_like_it',
                    post_id : post_id,
                    nonce : nonce
                },
                success : function( response ) {
                    $('#like-count-'+post_id).html( response );
                    $('.pt-like-it').removeClass('disabled');
                }
            });

            return false;
        })

    },


    likeit2: function likeit2() {

        $( document ).on( 'click', '.pt-like-it', function() {
            var post_id = $(this).find('.like-button').attr('data-id'),
                nonce = $(this).find('.like-button').attr("data-nonce");

            $(this).addClass('disabled');

            $.ajax({
                url: RainbowObj.ajaxurl,
                type : 'post',
                data : {
                    action : 'rainbow_pt_like_it',
                    post_id : post_id,
                    nonce : nonce
                },
                success : function( response ) {
                    $('#like-count2-'+post_id).html( response );
                    $('.pt-like-it').removeClass('disabled');
                }
            });

            return false;
        })

    },



    loadmore: function loadmore() {

        $('.loadmore').on('click', 'a.rainbow-loadmore', function(e){
            e.preventDefault();
            var _this = $(this),
            container = _this.parents('.rn-portfolio-area'),
            wtgetData = container.data("settings"),
            paged = container.attr('data-paged'),
            
            contentWrap = container.find('.menu-list'),
            loadmore = container.find('.loadmore'),             
            loadmorebtntxt = loadmore.find('a').text();
            var i = 0;
            $.ajax({
                url: RainbowObj.ajaxurl,
                data: { action : 'rainbow_loadmore_projects', data: wtgetData, page: parseInt(paged, 10)},
                type: 'POST',
                beforeSend: function(){
                    loadmore.find('a').text('Loading...').addClass('disabled');
                    i++;
                },
                success: function(resp){
                    container.attr('data-paged', parseInt(resp.page));
                    if(resp.remaining == false){
                        loadmore.addClass('d-none');
                        loadmore.find('a').text('No data remaining').addClass('d-none').attr('disabled', true);
                    }else{
                        loadmore.removeClass('d-none');
                        loadmore.find('a').text(loadmorebtntxt);

                    }   
                    var t = $(resp.html)
                    t.find('.rainbow-items').addClass('test');                      
                    contentWrap.append(resp.html);              
                },
                error: function(e){
                    console.log(e);
                },
                complete: function() {
                    i--;
                    if (i <= 0) {
                        loadmore.find('a').removeClass('disabled');
                    }
                },
            });

        });
    
    },
 
    featherAtcivation: function featherAtcivation() {

        feather.replace()
    },


    testimonialActivation: function testimonialActivation() {
            $('.blog-slick-activation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
            });

        },

        testimonial_slick_activation1: function testimonial_slick_activation1() {
            
        var SlickCarousel = $('.rn-testimonial-area');
            if (SlickCarousel.length) {
                try {
                    if (SlickCarousel.find('.testimonial-activation-item-3').hasClass('slick-initialized')) {
                        SlickCarousel.find('.testimonial-activation-item-3').slick('unslick');
                    }                   
                } catch (e) {}
                
                SlickCarousel.find('.testimonial-activation-item-3').slick({               
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }
                ]
                   
                });
            }

        },

        portfolio_slick_activation: function portfolio_slick_activation() {
            
            var SlickCarousel = $('.portfolio-style-three');
                if (SlickCarousel.length) {
                    try {
                        if (SlickCarousel.find('.portfolio-slick-activation').hasClass('slick-initialized')) {
                            SlickCarousel.find('.portfolio-slick-activation').slick('unslick');
                        }                   
                    } catch (e) {}
                    
                    SlickCarousel.find('.portfolio-slick-activation').slick({               
                        infinite: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: true,
                        cssEase: 'linear',
                        adaptiveHeight: true,
                        prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                        nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                        responsive: [{
                                breakpoint: 1124,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 868,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 576,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    dots: true,
                                    arrows: false,
                                }
                            }
                        ]
                       
                    });
                }

            },

       brand_slick_activation: function brand_slick_activation() {            
        var SlickCarousel = $('.rn-client-area');
            if (SlickCarousel.length) {
                try {
                    if (SlickCarousel.find('.brand-activation-item-5').hasClass('slick-initialized')) {
                        SlickCarousel.find('.brand-activation-item-5').slick('unslick');
                    }                   
                } catch (e) {}
                
                SlickCarousel.find('.brand-activation-item-5').slick({               
                    arrows: true,
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                    responsive: [{
                            breakpoint: 1124,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 868,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ] 
                });
            }

        },
        testimonial_slick_activation3: function testimonial_slick_activation3() {
            
        var SlickCarousel = $('.testimonial-style-2');
            if (SlickCarousel.length) {
                try {
                    if (SlickCarousel.find('.testimonial-item-one').hasClass('slick-initialized')) {
                        SlickCarousel.find('.testimonial-item-one').slick('unslick');
                    }                   
                } catch (e) {}
                
                SlickCarousel.find('.testimonial-item-one').slick({               
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    adaptiveHeight: true,
                    cssEase: 'linear',
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                    responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            arrows: false,
                        }
                    }]
                   
                });
            }

        },

	testimonial_slick_activation2: function testimonial_slick_activation2() {
			
       	var SlickCarousel = $('.testimonial-activation-wrapper');
			if (SlickCarousel.length) {
				try {
					if (SlickCarousel.find('.testimonial-activation').hasClass('slick-initialized')) {
						SlickCarousel.find('.testimonial-activation').slick('unslick');
					}					
				} catch (e) {}
				
				SlickCarousel.find('.testimonial-activation').slick({				
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    adaptiveHeight: true,
                    cssEase: 'linear',
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
				   
				});
			}

		}

	};

	function widthgen() {
		$(window).on('load resize', elementWidth);

		function elementWidth() {
			$('.elementwidth').each(function() {
				var $container = $(this),
					width = $container.outerWidth(),
					classes = $container.attr("class").split(' ');
				var classes1 = startWith(classes, 'elwidth');
				classes1 = classes1[0].split('-');
				classes1.splice(0, 1);
				var classes2 = startWith(classes, 'elmaxwidth');
				classes2.forEach(function(el) {
					$container.removeClass(el);
				});
				classes1.forEach(function(el) {
					var maxWidth = parseInt(el);

					if (width <= maxWidth) {
						$container.addClass('elmaxwidth-' + maxWidth);
					}
				});
			});
		}


		function startWith(item, stringName) {
			return $.grep(item, function(elem) {
				return elem.indexOf(stringName) == 0;
			});
		}
	}

	
	widthgen();
	

	function content_ready_scripts22() {
        jQuery(document).ready(function ($) {
    //set animation timing
    var animationDelay = 2500,
        //loading bar effect
        barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
        //letters effect
        lettersDelay = 50,
        //type effect
        typeLettersDelay = 150,
        selectionDuration = 500,
        typeAnimationDelay = selectionDuration + 800,
        //clip effect 
        revealDuration = 600,
        revealAnimationDelay = 1500;

    initHeadline();

    function initHeadline() {
        //insert <i> element for each letter of a changing word
        singleLetters($('.cd-headline.letters').find('b'));
        //initialise headline animation
        animateHeadline($('.cd-headline'));
    }

    function singleLetters($words) {
        $words.each(function () {
            var word = $(this),
                letters = word.text().split(''),
                selected = word.hasClass('is-visible');
            for (i in letters) {
                if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
            }
            var newLetters = letters.join('');
            word.html(newLetters).css('opacity', 1);
        });
    }

    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function () {
            var headline = $(this);

            if (headline.hasClass('loading-bar')) {
                duration = barAnimationDelay;
                setTimeout(function () {
                    headline.find('.cd-words-wrapper').addClass('is-loading')
                }, barWaiting);
            } else if (headline.hasClass('clip')) {
                var spanWrapper = headline.find('.cd-words-wrapper'),
                    newWidth = spanWrapper.width() + 10
                spanWrapper.css('width', newWidth);
            } else if (!headline.hasClass('type')) {
                //assign to .cd-words-wrapper the width of its longest word
                var words = headline.find('.cd-words-wrapper b'),
                    width = 0;
                words.each(function () {
                    var wordWidth = $(this).width();
                    if (wordWidth > width) width = wordWidth;
                });
                headline.find('.cd-words-wrapper').css('width', width);
            };

            //trigger animation
            setTimeout(function () {
                hideWord(headline.find('.is-visible').eq(0))
            }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);

        if ($word.parents('.cd-headline').hasClass('type')) {
            var parentSpan = $word.parent('.cd-words-wrapper');
            parentSpan.addClass('selected').removeClass('waiting');
            setTimeout(function () {
                parentSpan.removeClass('selected');
                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
            }, selectionDuration);
            setTimeout(function () {
                showWord(nextWord, typeLettersDelay)
            }, typeAnimationDelay);

        } else if ($word.parents('.cd-headline').hasClass('letters')) {
            var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
            hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
            showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                width: '2px'
            }, revealDuration, function () {
                switchWord($word, nextWord);
                showWord(nextWord);
            });

        } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
            $word.parents('.cd-words-wrapper').removeClass('is-loading');
            switchWord($word, nextWord);
            setTimeout(function () {
                hideWord(nextWord)
            }, barAnimationDelay);
            setTimeout(function () {
                $word.parents('.cd-words-wrapper').addClass('is-loading')
            }, barWaiting);

        } else {
            switchWord($word, nextWord);
            setTimeout(function () {
                hideWord(nextWord)
            }, animationDelay);
        }
    }

    function showWord($word, $duration) {
        if ($word.parents('.cd-headline').hasClass('type')) {
            showLetter($word.find('i').eq(0), $word, false, $duration);
            $word.addClass('is-visible').removeClass('is-hidden');

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                'width': $word.width() + 10
            }, revealDuration, function () {
                setTimeout(function () {
                    hideWord($word)
                }, revealAnimationDelay);
            });
        }
    }

    function hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass('in').addClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function () {
                hideLetter($letter.next(), $word, $bool, $duration);
            }, $duration);
        } else if ($bool) {
            setTimeout(function () {
                hideWord(takeNext($word))
            }, animationDelay);
        }

        if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
            var nextWord = takeNext($word);
            switchWord($word, nextWord);
        }
    }

    function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function () {
                showLetter($letter.next(), $word, $bool, $duration);
            }, $duration);
        } else {
            if ($word.parents('.cd-headline').hasClass('type')) {
                setTimeout(function () {
                    $word.parents('.cd-words-wrapper').addClass('waiting');
                }, 200);
            }
            if (!$bool) {
                setTimeout(function () {
                    hideWord($word)
                }, animationDelay)
            }
        }
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
});
    }
    function content_ready_scripts() {
		Theme.testimonial_slick_activation1();	
        Theme.testimonial_slick_activation2();  
        Theme.testimonial_slick_activation3();  
        Theme.portfolio_slick_activation();  
        Theme.brand_slick_activation();  
       //Theme.featherAtcivation();  
       Theme.loadmore();  
       Theme.likeit();  
       Theme.likeit2();
         
	}

	function content_load_scripts() {	
		Theme.testimonial_slick_activation1();
        Theme.testimonial_slick_activation2();
        Theme.testimonial_slick_activation3();
        Theme.portfolio_slick_activation();
        Theme.brand_slick_activation();
        //Theme.featherAtcivation();
       
	}

	$(document).ready(function() {
		content_ready_scripts();	
        // content_ready_scripts22();



	});

	$(window).on('load', function() {
		content_load_scripts();	
	 
	});

	$(window).on('load resize', function() {			
		content_load_scripts();
	});	


	$(window).on('elementor/frontend/init', function() {
		if (elementorFrontend.isEditMode()) {
			elementorFrontend.hooks.addAction('frontend/element_ready/widget', function() {
				content_ready_scripts();
				content_load_scripts();

			});
		}
	});


    var change_elementor_options = function() {
        if ( typeof elementorFrontend === 'undefined' ) {
            return;
        }
    
        elementorFrontend.on( 'components:init', function() {
            elementorFrontend.utils.anchors.setSettings( 'selectors.targets', '.dummy-selector' );
        } );
    };
    
    $( window ).on( 'elementor/frontend/init', change_elementor_options );

}());

