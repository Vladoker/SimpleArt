import CoolLightBox from 'vue-cool-lightbox';
const VueScrollTo = require('vue-scrollto');
const domain = "https://simple-rest.bags.md/";

Vue.use(VueScrollTo);
let app = new Vue({
  el: '#app',
  components: {
    'cool-light-box': CoolLightBox
  },
  beforeMount(){
    this.getCategories();
    this.getPortfolio();
  },
  data: {
    responce: {},
    languagesMenu: false,
    items: [],
    portfolio: [],
    index: null,
    lang: 'ru',
    JQimages: false,
    messageData: {
      name: '',
      email: '',
      message: ''
    },
    btnSend: false
  },
  methods: {
    showCategoryImages(ind){
      if(this.responce.data[ind].images.length) {
        this.items = this.responce.data[ind].images.map(e => e.image);
        this.index = 0;
      }
    },
    async getPortfolio(){
      try {
        let request = await fetch(`${domain}/api/image/`);
        if(request.ok){
          let responce = await request.json();
          this.portfolio = responce.data;
          setTimeout(() => {
            carouselRedy();
          }, 1000);
        }
        else {
          console.error(request);
        }
      }
      catch(er){
        console.error(er);
      }
    },
    async getCategories(){
      try {
        let request = await fetch(`${domain}/api/category/`);
        if(request.ok){
          this.responce = await request.json();
        }
        else {
          console.error(request);
        }
        
      }
      catch(er){
        console.error(er);
      }
    },
    changeLang(lng) {
      this.lang = lng;
    },
    async sendMessage() {
      this.btnSend = true;
      try {
        let requesy = await fetch(`/server/send.php`, {
          method: "POST",
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(this.messageData)
          },
        });

        if(requesy.ok) {
          console.log(requesy);
          this.messageData.name = '';
          this.messageData.email = '';
          this.messageData.message = '';
        }
      }
      catch(er) {
        console.error(er);
      }
    }
  }
});





function carouselRedy() {
  const imagesPortfoli = document.querySelectorAll(".imgPortfolio"),
  modalSlaider = document.querySelector(".portfolio__slaider"),
  btnModal = document.querySelector(".modal-close");

  imagesPortfoli.forEach(item => {
    item.addEventListener("click", event => {
      modalSlaider.style.display = "flex";
    })
  });

  btnModal.addEventListener("click", ()=> {
    modalSlaider.style.display = "none";
  });



  $(document).ready(function() {
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
}






