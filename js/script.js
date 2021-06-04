$(document).ready(function(){
 $('.spoiler_links').click(function(){
  $(this).parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
});

(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 100000;
var hwNeedLinks = true;
var slilinkss = false;

$(document).ready(function(e) {
  $('.slide').css(
    {"position" : "absolute",
     "top":'0', "left": '0'}).hide().eq(0).show();
  var slideNum = 0;
  var slideTime;
  slideCount = $("#slider .slide").size();
  var animSlide = function(arrow){
    clearTimeout(slideTime);
    $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
    if(arrow == "next"){
      if(slideNum == (slideCount-1)){slideNum=0;}
      else{slideNum++}
      }
    else if(arrow == "prew")
    {
      if(slideNum == 0){slideNum=slideCount-1;}
      else{slideNum-=1}
    }
    else{
      slideNum = arrow;
      }
    $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
    $(".control-slide.active").removeClass("active");
    $('.control-slide').eq(slideNum).addClass('active');
    }
if(hwNeedLinks){
var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
  .prependTo('#slider');
  $('#nextbutton').click(function(){
    animSlide("next");
    return false;
    })
  $('#prewbutton').click(function(){
    animSlide("prew");
    return false;
    })
}
  var $adderSpan = '';
  $('.slide').each(function(index) {
      $adderSpan += '<span class = "control-slide">' + index + '</span>';
    });
  $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
  $(".control-slide:first").addClass("active");
  $('.control-slide').click(function(){
  var goToNum = parseFloat($(this).text());
  animSlide(goToNum);
  });
  var pause = false;
  var rotator = function(){
      if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
      }
  $('#slider-wrap').hover(
    function(){clearTimeout(slideTime); pause = true;},
    function(){pause = false; rotator();
    });
  rotator();

if (!slilinkss)  $('.sli-links').css({"display" : "none"});
});
})(jQuery);



(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 100000;
var hwNeedLinks = true;
var slilinkss = false;

$(document).ready(function(e) {
  $('.slide2').css(
    {"position" : "absolute",
     "top":'0', "left": '0'}).hide().eq(0).show();
  var slideNum = 0;
  var slideTime;
  slideCount = $("#slider2 .slide2").size();
  var animSlide = function(arrow){
    clearTimeout(slideTime);
    $('.slide2').eq(slideNum).fadeOut(hwSlideSpeed);
    if(arrow == "next"){
      if(slideNum == (slideCount-1)){slideNum=0;}
      else{slideNum++}
      }
    else if(arrow == "prew")
    {
      if(slideNum == 0){slideNum=slideCount-1;}
      else{slideNum-=1}
    }
    else{
      slideNum = arrow;
      }
    $('.slide2').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
    $(".control-slide.active").removeClass("active");
    $('.control-slide').eq(slideNum).addClass('active');
    }
if(hwNeedLinks){
var $linkArrow = $('<a id="prewbutton2" href="#">&lt;</a><a id="nextbutton2" href="#">&gt;</a>')
  .prependTo('#slider2');
  $('#nextbutton2').click(function(){
    animSlide("next");
    return false;
    })
  $('#prewbutton2').click(function(){
    animSlide("prew");
    return false;
    })
}
  var $adderSpan = '';
  $('.slide2').each(function(index) {
      $adderSpan += '<span class = "control-slide">' + index + '</span>';
    });
  $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap2');
  $(".control-slide:first").addClass("active");
  $('.control-slide').click(function(){
  var goToNum = parseFloat($(this).text());
  animSlide(goToNum);
  });
  var pause = false;
  var rotator = function(){
      if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
      }
  $('#slider-wrap2').hover(
    function(){clearTimeout(slideTime); pause = true;},
    function(){pause = false; rotator();
    });
  rotator();

if (!slilinkss)  $('.sli-links').css({"display" : "none"});
});
})(jQuery);




  (function ($) {
  var hwSlideSpeed = 700;
  var hwTimeOut = 100000;
  var hwNeedLinks = true;
  var slilinkss = false;

  $(document).ready(function(e) {
    $('.slide3').css(
      {"position" : "absolute",
       "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider3 .slide3").size();
    var animSlide = function(arrow){
      clearTimeout(slideTime);
      $('.slide3').eq(slideNum).fadeOut(hwSlideSpeed);
      if(arrow == "next"){
        if(slideNum == (slideCount-1)){slideNum=0;}
        else{slideNum++}
        }
      else if(arrow == "prew")
      {
        if(slideNum == 0){slideNum=slideCount-1;}
        else{slideNum-=1}
      }
      else{
        slideNum = arrow;
        }
      $('.slide3').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
      $(".control-slide.active").removeClass("active");
      $('.control-slide').eq(slideNum).addClass('active');
      }
  if(hwNeedLinks){
  var $linkArrow = $('<a id="prewbutton3" href="#">&lt;</a><a id="nextbutton3" href="#">&gt;</a>')
    .prependTo('#slider3');
    $('#nextbutton3').click(function(){
      animSlide("next");
      return false;
      })
    $('#prewbutton3').click(function(){
      animSlide("prew");
      return false;
      })
  }
    var $adderSpan = '';
    $('.slide3').each(function(index) {
        $adderSpan += '<span class = "control-slide">' + index + '</span>';
      });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap3');
    $(".control-slide:first").addClass("active");
    $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
        if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        }
    $('#slider-wrap3').hover(
      function(){clearTimeout(slideTime); pause = true;},
      function(){pause = false; rotator();
      });
    rotator();

  if (!slilinkss)  $('.sli-links').css({"display" : "none"});
  });
  })(jQuery);


  (function ($) {
  var hwSlideSpeed = 700;
  var hwTimeOut = 100000;
  var hwNeedLinks = true;
  var slilinkss = false;

  $(document).ready(function(e) {
    $('.slide4').css(
      {"position" : "absolute",
       "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider4 .slide4").size();
    var animSlide = function(arrow){
      clearTimeout(slideTime);
      $('.slide4').eq(slideNum).fadeOut(hwSlideSpeed);
      if(arrow == "next"){
        if(slideNum == (slideCount-1)){slideNum=0;}
        else{slideNum++}
        }
      else if(arrow == "prew")
      {
        if(slideNum == 0){slideNum=slideCount-1;}
        else{slideNum-=1}
      }
      else{
        slideNum = arrow;
        }
      $('.slide4').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
      $(".control-slide.active").removeClass("active");
      $('.control-slide').eq(slideNum).addClass('active');
      }
  if(hwNeedLinks){
  var $linkArrow = $('<a id="prewbutton4" href="#">&lt;</a><a id="nextbutton4" href="#">&gt;</a>')
    .prependTo('#slider4');
    $('#nextbutton4').click(function(){
      animSlide("next");
      return false;
      })
    $('#prewbutton4').click(function(){
      animSlide("prew");
      return false;
      })
  }
    var $adderSpan = '';
    $('.slide4').each(function(index) {
        $adderSpan += '<span class = "control-slide">' + index + '</span>';
      });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap4');
    $(".control-slide:first").addClass("active");
    $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
        if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        }
    $('#slider-wrap4').hover(
      function(){clearTimeout(slideTime); pause = true;},
      function(){pause = false; rotator();
      });
    rotator();

  if (!slilinkss)  $('.sli-links').css({"display" : "none"});
  });
  })(jQuery);


  (function ($) {
  var hwSlideSpeed = 700;
  var hwTimeOut = 100000;
  var hwNeedLinks = true;
  var slilinkss = false;

  $(document).ready(function(e) {
    $('.slide5').css(
      {"position" : "absolute",
       "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider5 .slide5").size();
    var animSlide = function(arrow){
      clearTimeout(slideTime);
      $('.slide5').eq(slideNum).fadeOut(hwSlideSpeed);
      if(arrow == "next"){
        if(slideNum == (slideCount-1)){slideNum=0;}
        else{slideNum++}
        }
      else if(arrow == "prew")
      {
        if(slideNum == 0){slideNum=slideCount-1;}
        else{slideNum-=1}
      }
      else{
        slideNum = arrow;
        }
      $('.slide5').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
      $(".control-slide.active").removeClass("active");
      $('.control-slide').eq(slideNum).addClass('active');
      }
  if(hwNeedLinks){
  var $linkArrow = $('<a id="prewbutton5" href="#">&lt;</a><a id="nextbutton5" href="#">&gt;</a>')
    .prependTo('#slider5');
    $('#nextbutton5').click(function(){
      animSlide("next");
      return false;
      })
    $('#prewbutton5').click(function(){
      animSlide("prew");
      return false;
      })
  }
    var $adderSpan = '';
    $('.slide5').each(function(index) {
        $adderSpan += '<span class = "control-slide">' + index + '</span>';
      });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap5');
    $(".control-slide:first").addClass("active");
    $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
        if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        }
    $('#slider-wrap5').hover(
      function(){clearTimeout(slideTime); pause = true;},
      function(){pause = false; rotator();
      });
    rotator();

  if (!slilinkss)  $('.sli-links').css({"display" : "none"});
  });
  })(jQuery);


  (function ($) {
  var hwSlideSpeed = 700;
  var hwTimeOut = 100000;
  var hwNeedLinks = true;
  var slilinkss = false;

  $(document).ready(function(e) {
    $('.slide6').css(
      {"position" : "absolute",
       "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider6 .slide6").size();
    var animSlide = function(arrow){
      clearTimeout(slideTime);
      $('.slide6').eq(slideNum).fadeOut(hwSlideSpeed);
      if(arrow == "next"){
        if(slideNum == (slideCount-1)){slideNum=0;}
        else{slideNum++}
        }
      else if(arrow == "prew")
      {
        if(slideNum == 0){slideNum=slideCount-1;}
        else{slideNum-=1}
      }
      else{
        slideNum = arrow;
        }
      $('.slide6').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
      $(".control-slide.active").removeClass("active");
      $('.control-slide').eq(slideNum).addClass('active');
      }
  if(hwNeedLinks){
  var $linkArrow = $('<a id="prewbutton6" href="#">&lt;</a><a id="nextbutton6" href="#">&gt;</a>')
    .prependTo('#slider6');
    $('#nextbutton6').click(function(){
      animSlide("next");
      return false;
      })
    $('#prewbutton6').click(function(){
      animSlide("prew");
      return false;
      })
  }
    var $adderSpan = '';
    $('.slide6').each(function(index) {
        $adderSpan += '<span class = "control-slide">' + index + '</span>';
      });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap6');
    $(".control-slide:first").addClass("active");
    $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
        if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        }
    $('#slider-wrap6').hover(
      function(){clearTimeout(slideTime); pause = true;},
      function(){pause = false; rotator();
      });
    rotator();

  if (!slilinkss)  $('.sli-links').css({"display" : "none"});
  });
  })(jQuery);

  (function ($) {
  var hwSlideSpeed = 700;
  var hwTimeOut = 100000;
  var hwNeedLinks = true;
  var slilinkss = false;

  $(document).ready(function(e) {
    $('.slide7').css(
      {"position" : "absolute",
       "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider7 .slide7").size();
    var animSlide = function(arrow){
      clearTimeout(slideTime);
      $('.slide7').eq(slideNum).fadeOut(hwSlideSpeed);
      if(arrow == "next"){
        if(slideNum == (slideCount-1)){slideNum=0;}
        else{slideNum++}
        }
      else if(arrow == "prew")
      {
        if(slideNum == 0){slideNum=slideCount-1;}
        else{slideNum-=1}
      }
      else{
        slideNum = arrow;
        }
      $('.slide7').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
      $(".control-slide.active").removeClass("active");
      $('.control-slide').eq(slideNum).addClass('active');
      }
  if(hwNeedLinks){
  var $linkArrow = $('<a id="prewbutton7" href="#">&lt;</a><a id="nextbutton7" href="#">&gt;</a>')
    .prependTo('#slider7');
    $('#nextbutton7').click(function(){
      animSlide("next");
      return false;
      })
    $('#prewbutton7').click(function(){
      animSlide("prew");
      return false;
      })
  }
    var $adderSpan = '';
    $('.slide7').each(function(index) {
        $adderSpan += '<span class = "control-slide">' + index + '</span>';
      });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap7');
    $(".control-slide:first").addClass("active");
    $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
        if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        }
    $('#slider-wrap7').hover(
      function(){clearTimeout(slideTime); pause = true;},
      function(){pause = false; rotator();
      });
    rotator();
  if (!slilinkss)  $('.sli-links').css({"display" : "none"});
  });
  })(jQuery);
