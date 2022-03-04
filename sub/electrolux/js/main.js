
$('.allBtn').on('click',function(){
    $('aside').stop().animate({
        'left' : '0'
    })
})

$('.closeLeft').on('click',function(){
    $('aside').stop().animate({
        'left' : '-100%'
    })
})


$('.my').on('click',function(){
    $('nav').stop().animate({
        'right' : '0'
    })
})

$('.closeRight').on('click',function(){
    $('nav').stop().animate({
        'right' : '-100%'
    })
})


$('.gnb>li').on('click',function(){
    $(this).children('.sub').stop().slideToggle()
    $(this).siblings().children('.sub').stop().slideUp()
})


$('.playBtn').click(function(){
    let key = $(this).find('.key').text()
    let iframe = '<iframe width="640" height="360" src="https://www.youtube.com/embed/'+key+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    
    $('.detail').fadeIn()
    $('.detail').find('figure').html(iframe)

})

$('.closeBtn, .closeBox').click(function(){
    $('.detail').fadeOut()
})

$(window).keydown(function(i){
    if(i.keyCode == 27 || i.which == 27){
        $('.detail').fadeOut()
        $('aside').stop().animate({
            'left' : '-100%'
        })
    }
})

//높이에 따라 바뀌는 헤더 적용
$(window).scroll(function(){
    let i = $(this).scrollTop()

    if(i>=800){
        $('header').addClass('on')

    }else{
        $('header').removeClass('on')
    }

})


//메인 배너 슬라이드 적용

$('.bnWrap').on('init', function(event, slick) {
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);

}).slick({
    autoplay: true,
    autoplaySpeed: 3900,
    infinite: true,
    speed:1500,
    nextArrow : '.mainNext, .btnNext',  //next button 연결하는 법
    prevArrow : '.mainPrev, .btnPrev',  //prev button 연결하는 법
  //   slidesToShow : 1, // 한 화면에서 보여줄 개수
  //   slidesToScroll : 1 // 한 번 스크롤에 넘어가는 슬라이드 개수

}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
});


//row 2 이벤트 배너 슬라이드 적용
$('.r2secWrap').slick({
    autoplay: true,
    autoplaySpeed: 3700,
    infinite: true,
    dots : true,
    nextArrow : '.arrRight',  //next button 연결하는 법
    prevArrow : '.arrLeft',  //prev button 연결하는 법
  //   slidesToShow : 1, // 한 화면에서 보여줄 개수
  //   slidesToScroll : 1 // 한 번 스크롤에 넘어가는 슬라이드 개수

});


AOS.init();




/*
자바스크립트 연습

    let allBtn = document.querySelector('.allBtn');
    let closeBtnL = document.querySelector('.closeLeft');
    let closeBtnR = document.querySelector('.closeRight');
    let nav = document.querySelector('nav');
    let aside = document.querySelector('aside');
    let myBtn = document.querySelector('.my');


    allBtn.addEventListener('click', function(){
        aside.style.left = 0;
    });
    closeBtnL.addEventListener('click',function(){
        aside.style.left = '-100%';
    });

    closeBtnR.addEventListener('click',function(){
        nav.style.right = '-100%';
    });

    myBtn.addEventListener('click', function(){
        nav.style.right = 0;
    })

*/