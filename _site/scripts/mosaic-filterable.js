// has jqurey as a dependcy

$(document).ready(function(){
  /* filtering */
  $('#portfolio-grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter: 10,
  stagger: 30
});
  $('nav#portfolio-filter a').click(function(e) {
    e.preventDefault();
    console.log("We clicked it");

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('nav#portfolio-filter .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().toLowerCase().replace(' ','-');

    $('#portfolio-grid .grid').each(function() {
        if(filterVal == 'all'){
          $(this).addClass('grid-item');
          $('#portfolio-grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter: 10,
  stagger: 30
});
        }else{
          if(!$(this).hasClass(filterVal)) {
            $(this).removeClass('grid-item'); // hide those that don't have the filter
          }else{
            $(this).addClass('grid-item'); // show those that do have the filter
          }
          $('#portfolio-grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter: 10,
  stagger: 30
});
        }
      });

});


});
