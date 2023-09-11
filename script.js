let menu = document.querySelector('#bar');
let navbar = document.querySelector('.navi');
menu.onclick =() =>{
    menu.classList.toggle('fa-times');   
    navbar.classList.toggle('active');   
}
window.onscroll =()=>{
    menu.classList.remove('fa-times');
    navbar.classList.toggle('active'); 
}
var swiper = new Swiper(".container", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  var swiper = new Swiper(".review-slide", {
    spaceBetween: 20,
    hashNavigation: {
      watchState: true,
    },
    loop:true,
  });