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

  // 배너 슬라이드
  (function initHeroSlider(){
    var $root = $('.slide');

    // 트랙 자동 생성: .frame들을 감싸는 .slide-track 추가
    if ($root.find('.slide-track').length === 0) {
      $root.children('.frame').wrapAll('<div class="slide-track"></div>');
    }

    var $track = $root.find('.slide-track');
    var $items = $track.children('.frame');

    var slideMs    = 800;   // 슬라이드 속도
    var intervalMs = 5000;  // 자동 재생 간격
    var timer      = null;

    // 트랙/아이템 가로 배치
    $track.css({
      display: 'flex',
      flexWrap: 'nowrap',
      width: ($items.length * 100) + '%',
      marginLeft: 0
    });
    $items.css({ flex: '0 0 40%' }); // 0 0 100% -> 0 0 40% 이미지 사이즈

    // 다음으로 한 장 이동
    function next(){
      if ($track.is(':animated')) return;
      $track.animate(
        { marginLeft: '-120%' }, // -100 -> 120
        slideMs,
        function(){
          // 첫 번째 카드 뒤로 보내고 위치 리셋
          $track.children('.frame').eq(0).appendTo($track);
          $track.css({ marginLeft: 0 });
        }
      );
    }

    // 자동재생/정지
    function start(){ stop(); timer = setInterval(next, intervalMs); }
    function stop(){ if (timer){ clearInterval(timer); timer = null; } }

    // 호버 시 일시정지
    // $root.on('mouseenter', stop).on('mouseleave', start);

    start();
  })();


  

});