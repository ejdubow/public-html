(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-full-width').cubeportfolio({
        filters: '#js-filters-full-width',
        loadMore: '#js-loadMore-full-width',
        loadMoreAction: 'auto',
        layoutMode: 'mosaic',
        sortToPreventGaps: true,
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });
})(jQuery, window, document);


// $(document).ready(function(){
//   setInterval ("move_background()", 100);
// })

// function move_background(){
//   var backpos = $('.hero').css('background-position').replace(/px/gi,'').split(' ');
//   var l_pos = String(backpos[0]-3)+'px 0px'
//   $('body').css('background-position',l_pos)
// }

// $(document).ready(function(){
//     $('.hero-bg').bind('mousemove', function(e) {
//         $(this).animate({
//             'background-position-x': e.pageX,
//             'background-position-y': e.pageY
//             // 'background-position-x': e +'10%',
//             // 'background-position-y': e +'20%'
//             }, 100, 'easeOutCubic');
//         });
//     });

// $(document).ready(function(){
//     $('.hero').bind('mousemove', function() {
//         $(this).animate({
//             'background-position-x': +'10%',
//             'background-position-y': +'20%'
//             }, 100, 'easeOutCubic');
//         });
//     });

$(document).ready(function(){
    $('.hero').mousemove(function( event ) {
    
    var containerWidth = $(this).innerWidth(),
        containerHeight = $(this).innerHeight(),
        mousePositionX = (event.pageX / containerWidth) * 2,
        mousePositionY = (event.pageY /containerHeight) * 2;

    $(".hero-bg").css('background-position', mousePositionX + '%' + ' ' + mousePositionY + '%');

    });
});

// });
// $(document).ready(function(){
//     $(".show-seeds").hide();
//     $(".logo-em").click(function() {
//         $(".show-seeds").show();
//     }, 5000 );
// });
$(document).ready(function(){
    $( ".logo-em" ).click(function() {
      $( ".show-seeds" ).animate({
        opacity: 1
      }, {
        duration: 1,
        specialEasing: {
          width: "linear",
          height: "easeOutBounce"
        },
        delay: 5000,
        complete: function() {
          $( this ).animate({ opacity: 0 });
        }
      });
    });
});




