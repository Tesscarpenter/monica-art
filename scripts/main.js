$(document).ready(function() {
	//jquery code HERE

  $(window).load(function(){
    $('.mosaic').masonry({
      // options
      itemSelector: '.pic',
      columnWidth: 200,
      gutter: 10,
    });
  });

  
// scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
// go here for more changes i can make to lightbox http://lokeshdhakar.com/projects/lightbox2/

  // end
});
