$('.page-scroll').on('click', function(e) {
   // Ambil isi href
   var tujuan = $(this).attr('href');
   // Tangkap elemen yang dituju
   var elemenTujuan = $(tujuan);

   // Perbaikan 1: Cek jika elemenTujuan ada sebelum menggunakan offset()
   if (elemenTujuan.length) {
      // Perbaikan 2: Perbaiki penulisan offset().offset().top menjadi elemenTujuan.offset().top
      $('body, html').animate({
         scrollTop: elemenTujuan.offset().top - 50
      }, 1000, 'easeInOutExpo');
   }

   e.preventDefault();
});



// parallax
// about 
$(window).on('load', function(){
   $('.pKiri').addClass('pMuncul');
   $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
   var wScroll = $(this).scrollTop();

   // jumbotron
   $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/4 +'%)'

   });
   $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+ wScroll/2 +'%)'

   });
   $('.jumbotron p').css({
      'transform' : 'translate(0px, '+ wScroll/1.1 +'%)'

   });


   // potfpolio
   if (wScroll > $('.portfolio').offset().top - 350) {
         $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
               $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 600 * (i+1));

         });

      
   }

});






