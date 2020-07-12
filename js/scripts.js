$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $(".navbar").addClass("sticky");
        $(".goTop").fadeIn();
    }
      else{
        $(".navbar").removeClass("sticky");
        $(".goTop").fadeOut();
      }
    });

    $(".goTop").click(function(){scroll(0,0)});
  
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });

    $(".photos").magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{enabled:true},
      image: {
      titleSrc: 'title' }

    });


    $(".illustrators").magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{enabled:true},
      image: {
      titleSrc: 'title' }
    });

    $(".indesigns").magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{enabled:true},
      image: {
        titleSrc: 'title' }
    });

});