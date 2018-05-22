/* OffCanvas Menu
    * ------------------------------------------------------ */
   var clOffCanvas = function() {

    var menuTrigger     = $('.header__menu-toggle'),
        nav             = $('.header__nav'),
        closeButton     = nav.find('.header-nav__close'),
        siteBody        = $('body'),
        mainContents    = $('section, footer');

    // open-close menu by clicking on the menu icon
    menuTrigger.on('click', function(e){
        e.preventDefault();
        // menuTrigger.toggleClass('is-clicked');
        siteBody.toggleClass('menu-is-open');
    });

    // close menu by clicking the close button
    closeButton.on('click', function(e){
        e.preventDefault();
        menuTrigger.trigger('click');	
    });

    // close menu clicking outside the menu itself
    siteBody.on('click', function(e){
        if( !$(e.target).is('.header__nav, .header__nav-content, .header__menu-toggle, .header__menu-toggle span') ) {
            // menuTrigger.removeClass('is-clicked');
            siteBody.removeClass('menu-is-open');
        }
    });

};

