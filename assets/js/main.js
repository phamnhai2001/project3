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

// tab content
$(document).ready(function()
{
    function activeTab(obj)
    {
        $('.container ul li').removeClass('active');
 
        $(obj).addClass('active');
 
        var id = $(obj).find('a').attr('href');
 
        $('.tab_item').hide();
 
        $(id) .show();
    }
 
    $('.tab li').click(function(){
        activeTab(this);
        return false;
    });
 
    activeTab($('.tab li:first-child'));
});