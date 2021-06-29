function myFunction(id) {
    const dots = document.getElementById(`dots${id}`);
    const moreText = document.getElementById(`more${id}`);
    const btnText = document.getElementById(`myBtn${id}`);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }



// scroll spy 

window.onscroll = function() {scrollSpy()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function scrollSpy() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(function() {
  const topOffset = 5; //variable for menu height

  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav-menu a').click(function() {
  if (location.pathname.replace(/^\//,'') === 
    this.pathname.replace(/^\//,'') && 
    location.hostname === this.hostname) {
    const target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top-topOffset
    }, 1500);
    return false;
    } //target.length
  } //click function
  }); //smooth scrolling

});		