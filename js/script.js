$(function() {
    'use strict';

    $(window).scroll(function() {
        if($('.navbar').offset().top > 50){
            $('.fixed-top').addClass('top-nav');
            $('.navbar-brand').addClass('navbar-brand-top');
            $('.nav-link').addClass('nav-link-top');
        }
        else {
            $('.fixed-top').removeClass('top-nav');
            $('.navbar-brand').removeClass('navbar-brand-top');
            $('.nav-link').removeClass('nav-link-top');
        }
    });
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

const btnHamburger = document.querySelector('#btnHamburger');

btnHamburger.addEventListener('click', function(){ // Close Hamburger menu

  if(btnHamburger.classList.contains('open')){
    btnHamburger.classList.remove('open');
  }
  else{ // Open Hamburger menu
    btnHamburger.classList.add('open');
  }
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}