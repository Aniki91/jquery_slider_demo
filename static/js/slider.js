'use strict';

$(function(){
  
  var width = 720;
  var aniSpeed = 1000;
  var pause = 3000;
  var curSlide = 1;
  
  var $slider = $('#slider');
  var $slideContainer = $('.slides', $slider);
  var $slides = $('.slide', $slider);
  
  var $leftClick = $('#slide_left');
  var $rightClick = $('#slide_right');  
  var interval;
  
  ($leftClick).click(function(){
    console.log("clicked");
    if(curSlide > 1)$slideContainer.animate({'margin-left': '+=' + width}, aniSpeed, 
    function(){
      if(--curSlide === 0){
      curSlide = 5;
      $slideContainer.css('margin-left', 0);
      }
    });
  });
  
  ($rightClick).click(function(){
    console.log("clicked");
    if(curSlide < 5)$slideContainer.animate({'margin-left': '-=' + width}, aniSpeed, 
    function(){
      if(++curSlide === $slides.length){
      curSlide = 1;
      $slideContainer.css('margin-left', 0);
      }
    });
  });
  
  function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, aniSpeed, function() {
                if (++curSlide === $slides.length) {
                    curSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
  
  function pauseSlider() {
  clearInterval(interval);
  }
  
  $slideContainer.on('mouseenter', pauseSlider)
  $slideContainer.on('mouseleave', startSlider);
  
  startSlider();
});