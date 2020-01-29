const anchors = document.querySelectorAll('.nav-item.nav-link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(document).ready(function(){
  $('.portfolio__slaider .owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop:true,
    margin:15,
    nav:true,
    smartSpeed: 500,
    navClass: ["owl__prev","owl__next"],

    
    responsive:{
        0:{
            items:1
        }
    }
  })
});


