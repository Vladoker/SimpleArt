const anchors = document.querySelectorAll('.nav-item.nav-link'),
      imagesPortfoli = document.querySelectorAll(".imgPortfolio"),
      modalSlaider = document.querySelector(".portfolio__slaider")

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
imagesPortfoli.forEach(item => {
  item.addEventListener("click", event => {
    modalSlaider.style.display = "flex";
  })
});



$(document).ready(function(){
  $('.portfolio__slaider .owl-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout: 0,
    autoplayHoverPause: false,
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


