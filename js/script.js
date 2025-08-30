$(document).ready(function(){
    // setInterval(function(){

    //     $('.imgbox').animate({
    //         marginLeft: '-100%'
    //     },1000, function(){
    //         $('.imgbox img').eq(0).appendTo('.imgbox');
    //     });
    // },6000);

    
    // setInterval(function(){

    //     $('.imgbox').animate({
    //         marginLeft: '-100%'
    //     },1000, function(){
    //         $('.imgbox img').eq(0).appendTo('.imgbox');
    //         $('.imgbox').css({
    //             marginLeft: 0
    //         });
    //     });
    // },6000);


    $(".gnb > li").mouseover(function () {
    // $(".gnb > li > .mega").stop().slideDown("fast");
    $(this).find(".mega").stop().slideDown("fast");
    console.log("mouseover");
  });

  $(".gnb > li").mouseout(function () {
    // $(".gnb > li > .mega").stop().slideUp("fast");
    $(this).find(".mega").stop().slideUp("fast");
    console.log("mouseout");
  });

});