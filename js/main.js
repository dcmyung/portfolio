

$('.allBtn').click(function(){
    $('.allBtn,.util').toggleClass('on')
})


$('.top').on('click',function(){

    $('html, body').animate({
        'scrollTop' : 0
    })
})




let conOffset = $('.row2').offset().top;
let conOffsetEnd = $('.row3').offset().top;


$(window).scroll(function(){
    let a = $(this).scrollTop(); //scrollTop

    if(a >= conOffset-300 && a< conOffsetEnd){
        $('.st0').addClass('active');


        $('.countSpan').each(function() {
            $(this).animate({
              left: $(this).data('count')
            }, {
              duration: 1800,
              step: function(now) {
                var data = Math.round(now);
                $(this).text(data);
              }
            });
          });

    }else{


    }//scroll If

});//scroll.func




// row3 skill 움직이는 바  -> 모바일 웹 사이즈 다르게 지정 

let firstLiWidth = $('.tabmenu').children().eq(0).width();
let firstLiOffset = $('.tabmenu').children().eq(0).offset().left

function mobile(){

$('.tabBg').css({
    'width' : firstLiWidth,
    'left' : firstLiOffset - 26
});

$('.tabmenu>li').click(function(e){
    e.preventDefault();

    let b = $(this).offset().left;
    let c = $(this).width();

    $('.tabBg').animate({
        'left' : b - 26,
        'width' : c},500);

    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    let d = $(this).index()
    $('.tabUl').children().eq(d).show().siblings().hide()

})

} //mobile




function pc(){

$('.tabBg').css({
    'width' : firstLiWidth,
    'left' : firstLiOffset - 365
});

$('.tabmenu>li').click(function(e){
    e.preventDefault();

    let b = $(this).offset().left;
    let c = $(this).width();

    $('.tabBg').animate({
        'left' : b - 365,
        'width' : c},500);

    $(this).addClass('active').siblings().removeClass('active');

    let d = $(this).index()
    $('.tabUl').children().eq(d).show().siblings().hide()

})

} //pc


let winWidth = $(window).width()

if(winWidth < 1200){
    //mobile 영역
    mobile();
}else{
    //pc 영역
    pc()
} 

$(window).on('resize',function(){
    let winWidth2 = $(window).width()

if(winWidth2 < 1200){
    //mobile 영역
    mobile();

}else{
    //pc
    pc();
} 
    
})




// nav 위치 이동 바 만들기

$('button, .util>li').click(function(){
    let i = $(this).index()
    let h = $('section').eq(i).offset().top;

    $('html, body').stop().animate({
        'scrollTop' : h + 10 
    })
})//button.click


$(window).scroll(function(){
    let scr = $(this).scrollTop()

    let of1 = $('.row1').offset().top; //about
    let of2 = $('.row2').offset().top; //skill
    let of3 = $('.r3Wrap').offset().top; //port 
    let of4 = $('.row4').offset().top; //contact
    

    if(scr >= of1 && scr < of2){
        $('button').eq(0).addClass('active').siblings().removeClass()
    } 
    if(scr >= of2 && scr < of3){
        $('button').eq(1).addClass('active').siblings().removeClass()
    } 
    if(scr >= of3 && scr < of4){
        $('button').eq(2).addClass('active').siblings().removeClass()
    } 
    if(scr >= of4){
        $('button').eq(3).addClass('active').siblings().removeClass()
    } 
    

})




