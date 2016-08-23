'use strict';

(function () {
  var APP = {
    actionState: function actionState() {
      var triggerText = $(".nav-trigger").text();

      if (triggerText === 'More') {
        return 'Close';
      } else {
        return 'More';
      }
    },

    toggleNav: function toggleNav() {
      var $dropdown = $(".nav-section_dropdown");
      $dropdown.toggleClass('open');
    },

    setNavButtonState: function setNavButtonState() {
      var _this = this;

      var $nav = $(".js-nav-trigger-wrapper");
      var action = this.actionState();
      var navTriggerMarkup = '<button class="nav-trigger">' + action + '</button>';

      $nav.empty().append(navTriggerMarkup);

      $('.nav-trigger').on('click', function (e) {
        e.preventDefault();
        _this.toggleNav();
        _this.setNavButtonState();
      });
    },

    parallaxBg: function parallaxBg() {
      var $content = $(".pl-content");
      var $body = $("body");
      var $footer = $(".footer");
      var footerMarginTop = parseInt($footer.css("marginTop"), 10);

      $(document).on("scroll", function (e) {
        if (window.shouldScroll) {
          var scrolled = $(document).scrollTop();
          var slow = -(scrolled / 3);

          if (slow > -200) {
            $content.css({ "top": slow });
            $footer.css({ "margin-top": slow + footerMarginTop });
          }
        }
      });
    },

    resourceHandler: function resourceHandler() {
      var $content = $(".pl-content");
      $(".resource-cat__item").on("click", function (e) {
        e.preventDefault();
        window.shouldScroll = false;
        $content.css({ "top": 0 });
        var target = $(this).children().attr("href");
        $('' + target).get(0).scrollIntoView();
      });
    },

    subscriptionForm: function subscriptionForm() {
      var $form = $(".js-subscription-form");

      $form.submit(function (e) {
        e.preventDefault();
        $.post($form.attr("action"), $form.serialize(), function (data) {
          if (data.success === false) {
            $.each(data.errors, function (i, item) {
              alert(item);
            });
          } else {
            $(".js-subscription-form__items").hide();
            $(".js-subscription-form__success").show();
          }
        });
      });
    },

    hoverLogo: function hoverLogo() {
      var $logo = $(".logo");

      $logo.hover(function (e) {
        $logo.toggleClass("icon-blue-logo");
        $logo.toggleClass("icon-logo");
      });
    },

    animateAnalytics: function animateAnalytics() {
      if ($("#analyticsAnimation").length) {
        var barGraph = Snap('#analyticsAnimation'),
            pathLines = barGraph.group(),
            pathPoints = barGraph.group(),
            barLines = barGraph.group(),
            b1 = barLines.line(24, 260, 24, 260),
            b2 = barLines.line(84, 260, 84, 260),
            b3 = barLines.line(144, 260, 144, 260),
            b4 = barLines.line(204, 260, 204, 260),
            b5 = barLines.line(264, 260, 264, 260),
            b6 = barLines.line(324, 260, 324, 260),
            l1 = pathLines.line(6, 164, 6, 164),
            l2 = pathLines.line(55, 132, 55, 132),
            l3 = pathLines.line(120, 158, 120, 158),
            l4 = pathLines.line(163, 139, 163, 139),
            l5 = pathLines.line(191, 141, 191, 141),
            l6 = pathLines.line(237, 119, 237, 119),
            l7 = pathLines.line(299, 138, 299, 138),
            p1 = Snap("#c1").attr({ r: 0 }),
            p2 = Snap("#c2").attr({ r: 0 }),
            p3 = Snap("#c3").attr({ r: 0 }),
            p4 = Snap("#c4").attr({ r: 0 }),
            p5 = Snap("#c5").attr({ r: 0 }),
            p6 = Snap("#c6").attr({ r: 0 }),
            p7 = Snap("#c7").attr({ r: 0 }),
            p8 = Snap("#c8").attr({ r: 0 }),
            baseTime = 1200;

        pathLines.addClass("a0");
        pathPoints.addClass("a3");
        barLines.addClass("a1");

        animateLines = function (element, xpoint, ypoint, timing, delay) {
          window.setTimeout(function () {
            element.animate({ x2: xpoint, y2: ypoint }, timing, mina.easein);
          }, delay + baseTime);
        };

        animatePoints = function (element, radius, timing, delay) {
          window.setTimeout(function () {
            element.animate({ r: radius }, timing, mina.bounce);
            element.addClass("dot-pulse");
          }, delay + baseTime);
        };

        // Bar Graph Lines
        animateLines(b1, 24, 122, 800, 0);
        animateLines(b2, 84, 72, 1000, 250);
        animateLines(b3, 144, 32, 1200, 500);
        animateLines(b4, 204, 82, 600, 750);
        animateLines(b5, 264, 2, 1300, 950);
        animateLines(b6, 324, 72, 900, 1250);

        // Plot Points
        animatePoints(p1, 5, 250, 0);
        animatePoints(p2, 5, 250, 250);
        animatePoints(p3, 5, 250, 500);
        animatePoints(p4, 5, 250, 750);
        animatePoints(p5, 5, 250, 1000);
        animatePoints(p6, 5, 250, 1250);
        animatePoints(p7, 5, 250, 1500);
        animatePoints(p8, 5, 250, 1750);

        // Plot Point Connectors
        animateLines(l1, 55, 132, 250, 0);
        animateLines(l2, 120, 158, 250, 250);
        animateLines(l3, 163, 139, 250, 500);
        animateLines(l4, 191, 141, 250, 750);
        animateLines(l5, 237, 119, 250, 1000);
        animateLines(l6, 299, 138, 250, 1250);
        animateLines(l7, 346, 128, 250, 1500);
      }
    },

    animateRecovery: function animateRecovery() {
      // Recovery Animation
      if ($(".circles").length) {
        var c = Snap('.circles'),
            c1 = c.circle(17, 206, 0).addClass("st3"),
            c2 = c.circle(334, 206, 0).addClass("st3"),
            line = c.line(38, 206, 38, 206),
            t1 = Snap('#t1'),
            t2 = Snap('#t2'),
            arcBox = Snap('.arc'),
            arc = Snap('#arcPath'),
            burst = Snap('.burst');

        arc.attr({ strokeDasharray: '0, 1000', strokeOpacity: 0 });
        burst.attr({ strokeDasharray: '0, 40' });
        t1.attr({ x2: 244, opacity: 0 });
        t2.attr({ x1: 244, opacity: 0 });

        animateCircles = function (element, radius, timing, delay) {
          window.setTimeout(function () {
            element.animate({ r: radius }, timing, mina.bounce);
          }, delay);
        };

        animateCircles(c1, 9, 100, 500);
        animateCircles(c2, 9, 100, 600);

        animateCircles = function (delay) {
          var container = $(".arc");
          var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          circle.setAttribute("r", "0");
          circle.setAttribute("cx", "-1000");
          var animation = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
          animation.setAttribute("dur", "6000ms");
          animation.setAttribute("repeatCount", "indefinite");
          animation.setAttribute("rotate", "auto");
          animation.setAttribute("begin", delay + "ms");
          var mpath = document.createElementNS("http://www.w3.org/2000/svg", "mpath");
          mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#arcPath");
          animation.appendChild(mpath);
          circle.appendChild(animation);
          container.append(circle);

          window.setTimeout(function () {
            circle.setAttribute("class", "st4");
            circle.setAttribute("cx", "0");
            circle.setAttribute("r", "5");
          }, delay + 500);
        };

        window.setTimeout(function () {
          line.addClass('st2').animate({ x2: 314 }, 500, mina.easeout);
        }, 300);

        window.setTimeout(function () {
          t1.attr({ opacity: 1 });
          t2.attr({ opacity: 1 });
          line.attr({ opacity: 0 });
          t1.animate({ x2: 212 }, 75, mina.bounce);
          t2.animate({ x1: 280 }, 75, mina.bounce);
          burst.addClass("burst-animation");
          burst.attr({ strokeDasharray: '20, 40' });
        }, 1500);

        window.setTimeout(function () {
          Snap('#startDot').animate({ r: 5 }, 250, mina.bounce);
          arc.addClass("arc-animation");
          arc.attr({ strokeDasharray: '460, 1500', strokeOpacity: 1 });
        }, 1750);

        window.setTimeout(function () {
          Snap('#endDot').animate({ r: 5 }, 250, mina.bounce);
        }, 2500);

        animateCircles(2000);
        animateCircles(3500);
        animateCircles(5000);
        animateCircles(6500);
      }
    },

    setupAnalytics: function setupAnalytics() {
      if (Snap('#analyticsAnimation')) {
        Snap('#analyticsAnimation').clear();
      }
    },

    marketoForm: function marketoForm() {
      $(".js-gated-link").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr("data-marketoid");
        MktoForms2.loadForm("//app-ab13.marketo.com", "238-UZQ-013", id, function (form) {
          MktoForms2.lightbox(form).show();
        });
      });
    },

    setupRecovery: function setupRecovery() {
      if ($("#animationAnalyticsSVG").length) {
        Snap('.circles').clear();
        Snap('#arcPath').attr({ strokeDasharray: '0, 1000', strokeOpacity: 0 });
        Snap('.burst').attr({ strokeDasharray: '0, 40' });
        Snap('#t1').attr({ x2: 244, opacity: 0 });
        Snap('#t2').attr({ x1: 244, opacity: 0 });
      }
    },

    init: function init() {
      window.shouldScroll = true;
      this.setNavButtonState();
      this.parallaxBg();
      this.subscriptionForm();
      this.hoverLogo();
      this.resourceHandler();
      this.setupAnalytics();
      this.setupRecovery();
      this.animateAnalytics();
      this.animateRecovery();
      this.marketoForm();
    }
  };

  APP.init();
})();
//# sourceMappingURL=app-transpiled.js.map
