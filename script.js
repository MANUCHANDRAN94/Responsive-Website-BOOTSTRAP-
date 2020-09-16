// $(function () {

//     $(".toggle1").on("click", function() {
//     alert("vcx");
//     // $(".toggle1").addClass("d-none");
//     });

// });

// carousel for portfolio
$('.owl-portfolio').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        550:{
            items:2
        },
        900:{
            items:3
        }
    }
})

// carousel ofr our team
$('.owl-team').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dotsEach:true,
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        900:{
            items:4
        }
    }
})

//carousel for blog
$('.owl-blog').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        }
    }
})