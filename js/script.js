$('.page-scroll').on('click', function(e){

    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 62
    }, 1000)

    e.preventDefault();
})