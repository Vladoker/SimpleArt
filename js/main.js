const anchors = document.querySelectorAll('.nav-item.nav-link'),
      imagesPortfoli = document.querySelectorAll(".imgPortfolio"),
      modalSlaider = document.querySelector(".portfolio__slaider"),
      btnModal = document.querySelector(".modal-close");

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

btnModal.addEventListener("click", ()=> {
  modalSlaider.style.display = "none";
});



$(document).ready(function(){
  $('.portfolio__slaider .owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop:true,
    margin: 15,
    nav:true,
    smartSpeed: 500,
    navClass: ["owl__prev","owl__next"],

    
    responsive:{
        0:{
            items:1,
            autoplay:false,
            autoplayTimeout: 0,
            autoplayHoverPause: false,
        },
        576:{
          items:2,
          autoplay:false,
          autoplayTimeout: 0,
          autoplayHoverPause: false,
        },
        1200:{
          items:3
        }
    }
  })
});


