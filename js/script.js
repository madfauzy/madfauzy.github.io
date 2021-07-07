// Scroll Smooth
$('.page-scroll').on('click', function(e){

    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'swing')

    e.preventDefault();
})

// Parallax
$(window).on('load', function(){
    $('.pKiri').addClass('pShow');
    $('.pKanan').addClass('pShow');
})

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $(".jumbotron img").css({
        'transform' : 'translate(0px, '+ wScroll/4 + '%)'
    })

    $(".jumbotron h1").css({
        'transform' : 'translate(0px, '+ wScroll/2 + '%)'
    })

    $(".jumbotron p").css({
        'transform' : 'translate(0px, '+ wScroll/1.2 + '%)'
    })

    // Portfolio
    if(wScroll > $('.portfolio').offset().top - 250){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('show');
            }, 500 * (i+1))
        })
    }
})