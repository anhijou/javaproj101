(function ($) {
  "use strict";

  var imJs = {
    m: function (e) {
      imJs.d();
      imJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      imJs.backToTopInit();
      imJs.mobileMenuActive();
      imJs.magnificPopupActivation();
      imJs.stickyHeader();
      imJs.contactForm();
      imJs.wowActive();
      imJs.awsActivation();
      imJs.demoActive();
      imJs.activePopupDemo();
      imJs.onePageNav();
      imJs.onePageNav2();
      imJs.onePageNavMobile();
      imJs.stickyAdjust();
      imJs._slickactivation();
      imJs.clapAnimation();
      imJs.stopVideo();
      imJs.plyrVideo();
      imJs.swiperSlideronModal();
    },

    plyrVideo: function () {
      // init video player for courses Curriculum
      const player = new Plyr(".rbt-player");
    },

    stopVideo: function () {
      $(".modal").on("show.bs.modal", function (event) {
        $(this).find("iframe").attr("src", $(event.relatedTarget).data("url"));
      });
      $(".modal").on("hidden.bs.modal", function (e) {
        $(this).find("iframe").attr("src", "");
      });

      $.fn.stopVideoAfterLoadmore = function () {
        return this.each(function () {
          $(".modal").on("show.bs.modal", function (event) {
            $(this)
              .find("iframe")
              .attr("src", $(event.relatedTarget).data("url"));
          });
          $(".modal").on("hidden.bs.modal", function (e) {
            $(this).find("iframe").attr("src", "");
          });
        });
      };
      $(document).on("click", ".close", function () {
        $(this).stopVideoAfterLoadmore();
      });
    },

    swiperSlideronModal: function () {
      $(document).on('shown.bs.modal','.modal', function () {
        setTimeout(function(){
          if (typeof(Event) === 'function') {
            // modern browsers
            window.dispatchEvent(new Event('resize'));
          } else {
            // for IE and other old browsers
            // causes deprecation warning on modern browsers
            var evt = window.document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
          }
          // console.log('Resize');
        }, 500);
      });

    },

    clapAnimation: function () {
      $.fn.clapAnimateButton = function () {
        return this.each(function () {
          $(this).addClass("animate");
          setTimeout(() => {
            $(this).removeClass("animate");
          }, 300);
        });
      };
      $(document).on("click", ".like-button", function () {
        $(this).clapAnimateButton();
      });
    },

    onePageNav: function () {
      $("#sideNav").onePageNav({
        currentClass: "current",
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.8,
        filter: ":not(.external-link)",
        easing: "swing",
      });
    },
    onePageNav2: function () {
      $("#onepagenav").onePageNav({
        currentClass: "current",
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.8,
        filter: ":not(.external-link)",
        easing: "swing",
      });
    },
    onePageNavMobile: function () {
      $("#sideNavMobile").onePageNav({
        currentClass: "current",
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.8,
        filter: ":not(.external-link)",
        easing: "swing",
      });
    },

    onePageTopFixed: function () {
      if ($(".onepagefixed").length) {
        var fixedElem = $(".onepagefixed"),
          distance = fixedElem.offset().top - 100,
          $window = $(window),
          totalDistance =
            $(".service-scroll-navigation-area").outerHeight() + distance;

        $(window).on("scroll", function () {
          if ($window.scrollTop() >= distance) {
            fixedElem.css({
              position: "fixed",
              left: "0",
              right: "0",
              top: "0",
              zIndex: "5",
            });
          } else {
            fixedElem.removeAttr("style");
          }
          if ($window.scrollTop() >= totalDistance) {
            fixedElem.removeAttr("style");
          }
        });
      }
    },

    activePopupDemo: function (e) {
      $(".popuptab-area li a.demo-dark").on("click", function (e) {
        $(".demo-modal-area").addClass("dark-version");
        $(".demo-modal-area").removeClass("white-version");
      });
      $(".popuptab-area li a.demo-light").on("click", function (e) {
        $(".demo-modal-area").removeClass("dark-version");
        $(".demo-modal-area").addClass("white-version");
      });
    },

    demoActive: function (e) {
      $(".rn-right-demo").on("click", function (e) {
        $(".demo-modal-area").addClass("open");
      });
      $(".demo-close-btn").on("click", function (e) {
        $(".demo-modal-area").removeClass("open");
      });
    },

    contactForm: function () {
      $(".rwt-dynamic-form").on("submit", function (e) {
        e.preventDefault();
        var _self = $(this);
        var __selector = _self.closest("input,textarea");
        _self.closest("div").find("input,textarea").removeAttr("style");
        _self.find(".error-msg").remove();
        _self
          .closest("div")
          .find('button[type="submit"]')
          .attr("disabled", "disabled");
        var data = $(this).serialize();
        $.ajax({
          url: "mail.php",
          type: "post",
          dataType: "json",
          data: data,
          success: function (data) {
            _self
              .closest("div")
              .find('button[type="submit"]')
              .removeAttr("disabled");
            if (data.code == false) {
              _self.closest("div").find('[name="' + data.field + '"]');
              _self
                .find(".rn-btn")
                .after('<div class="error-msg"><p>*' + data.err + "</p></div>");
            } else {
              $(".error-msg").hide();
              $(".form-group").removeClass("focused");
              _self
                .find(".rn-btn")
                .after(
                  '<div class="success-msg"><p>' + data.success + "</p></div>"
                );
              _self.closest("div").find("input,textarea").val("");

              setTimeout(function () {
                $(".success-msg").fadeOut("slow");
              }, 5000);
            }
          },
        });
      });
    },

    wowActive: function () {
      new WOW().init();
    },

    stickyAdjust: function (e) {
      // Sticky Top Adjust..,
      $(".rbt-sticky-top-adjust").css({
        top: 120,
      });
      $(".rbt-sticky-top-adjust-two").css({
        top: 100,
      });
      $(".rbt-sticky-top-adjust-three").css({
        top: 50,
      });
      $(".header-sticky .rbt-sticky-top-adjust").css({
        top: 160,
      });
    },

    testimonialActivation: function () {
      $(".testimonial-activation").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        cssEase: "linear",
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    pauseOnDotsHover: false,
                },
            },
        ],
      });

      $(".testimonial-item-one").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        cssEase: "linear",
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
            },
          },
        ],
      });

      $(".portfolio-slick-activation").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 868,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".blog-slick-activation").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 868,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".testimonial-activation-item-3").slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      });

      $(".brand-activation-item-5").slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 868,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },

    _slickactivation: function (e) {
      $(".inbio-carousel-gallery").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
      });
    },

    backToTopInit: function () {
      // declare variable
      var scrollTop = $(".backto-top");
      $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 250) {
          $(scrollTop).css("opacity", "1");
        } else {
          $(scrollTop).css("opacity", "0");
        }
      });
      //Click event to scroll to top
      $(scrollTop).on("click", function () {
        $("html, body").animate(
          {
            scrollTop: 0,
            easingType: "linear",
          },
          500
        );
        return false;
      });
    },

    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      });
    },

    magnificPopupActivation: function () {
      var yPopup = $(".video-play-button");
      if (yPopup.length) {
        yPopup.magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false,
        });
      }
    },

    vedioActivation: function (e) {
      $("#play-video").on("click", function (e) {
        e.preventDefault();
        $("#video-overlay").addClass("open");
        $("#video-overlay").append(
          '<iframe width="80%" height="80%" src="https://www.youtube.com/embed/7e90gBu4pas" frameborder="0" allowfullscreen></iframe>'
        );
      });

      $(".video-overlay, .video-overlay-close").on("click", function (e) {
        e.preventDefault();
        close_video();
      });

      $(document).keyup(function (e) {
        if (e.keyCode === 27) {
          close_video();
        }
      });

      function close_video() {
        $(".video-overlay.open").removeClass("open").find("iframe").remove();
      }
    },

    mobileMenuActive: function (e) {
      $(".humberger-menu").on("click", function (e) {
        e.preventDefault();
        $(".popup-mobile-menu").addClass("menu-open");
        imJs._html.css({
          overflow: "hidden",
        });
      });

      $(
        ".close-menu-activation, .is-mobile-onepage.popup-mobile-menu .primary-menu .menu-item a:not(.external-link), .is-mobile-onepage.popup-mobile-menu .mainmenu-nav .menu-item a:not(.external-link)"
      ).on("click", function (e) {
        e.preventDefault();
        $(".popup-mobile-menu").removeClass("menu-open");
        $(".has-droupdown > a")
          .removeClass("open")
          .siblings(".submenu")
          .removeClass("active")
          .slideUp("400");
        imJs._html.css({
          overflow: "",
        });
      });

      $(".popup-mobile-menu").on("click", function (e) {
        e.target === this && $(".popup-mobile-menu").removeClass("menu-open");
        imJs._html.css({
          overflow: "",
        });
      });

      $(".popup-mobile-menu .menu-item-has-children > a").on(
        "click",
        function (e) {
          e.preventDefault();
          $(this)
            .siblings(".sub-menu")
            .toggleClass("active")
            .slideToggle("400");
          $(this).toggleClass("open");
          imJs._html.css({
            overflow: "",
          });
        }
      );

      $(".nav-pills .nav-link").on("click", function (e) {
        $(".rn-popup-mobile-menu").removeClass("menu-open");
        imJs._html.css({
          overflow: "",
        });
      });
    },
    awsActivation: function (e) {
        setTimeout(function () { AOS.init(); }, 1000);
    },
  };
  imJs.m();
})(jQuery, window);
