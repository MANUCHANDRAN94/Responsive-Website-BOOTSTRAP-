
// Navbar button toggle
    $(".navbar-toggler").on("click", function() {
    $(".toggle1").toggle("d-none");
    });

    $(".nav-link").on("click" , function(){
        $('.collapse.navbar-collapse , .toggle2').collapse('hide')
        $(".toggle1").toggle("d-inline");
    });



// Service card toggle
$(".collapse").on('show.bs.collapse', function () {
    $(this).next().find(".svg-inline--fa").removeClass("fa-chevron-down").addClass("fa-chevron-up")
}).on('hide.bs.collapse', function () {
    $(this).next().find(".svg-inline--fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
});



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