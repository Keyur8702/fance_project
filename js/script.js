$(document).ready(function(){

    $('#banner').owlCarousel({
         loop:true,
         margin:10,
         nav:true,
         navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
         animateOut: 'animate__fadeOut',
           animateIn: 'animate__fadeIn',
       //   dots:false,
       //   center:true,
       //   mouseDrag:false,
       //   stagePadding:50,
       //   merge:true,
       // startPosition:2,
       autoplay:true,
       autoplayTimeout:2000,
       autoplayHoverPause:true,
       URLhashListener:true,
       startPosition: 'URLHash',
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:3
             },
             1000:{
                 items:1
             }
         }
     })

     $('#product').owlCarousel({
       loop:true,
       margin:10,
       nav:true,
       responsive:{
           0:{
               items:1
           },
           600:{
               items:3
           },
           1000:{
               items:4
           }
       }
   })

   var owl = $('#banner');
   owl.owlCarousel();
   // Listen to owl events:
   owl.on('changed.owl.carousel', function(event) {
       
       new WOW().init();

   })

   new WOW().init();
   
            

});