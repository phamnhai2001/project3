$('.slider').slick({
  slidesToShow: 5,
  slidesToScroll: 3,
  dots: false,
  autoplay: true,
  infinite: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});



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
