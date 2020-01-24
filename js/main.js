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
    loop:true,
    margin:15,
    smartSpeed: 500,

    
    responsive:{
        0:{
            items:1
        }
    }
  })
});

