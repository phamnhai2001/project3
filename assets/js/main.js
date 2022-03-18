$('.slider').slick({
  slidesToShow: 5,
  slidesToScroll: 3,
  dots: false,
  autoplay: true,
  infinite: true,
  cssEase: 'linear'
});

// slider banner
$("#slideshow > .slide:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > .slide:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);