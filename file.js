$(document).ready(function(){
    // Add smooth scrolling to all links
      $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  $('.smoothscroll').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});


var linkbox = document.querySelector('.gitmodal');
var modalbg = document.querySelector('.modal-bg');

linkbox.addEventListener('click', function(){
    modalbg.classList.add('modal-active')
});
var linkbox1 = document.querySelector('.gitmodal1');
var modalbg = document.querySelector('.modal-bg');

linkbox1.addEventListener('click', function(){
    modalbg.classList.add('modal-active')
});
var linkbox2 = document.querySelector('.gitmodal2');
var modalbg = document.querySelector('.modal-bg');

linkbox2.addEventListener('click', function(){
    modalbg.classList.add('modal-active')
});
var linkbox3 = document.querySelector('.gitmodal3');
var modalbg = document.querySelector('.modal-bg');

linkbox3.addEventListener('click', function(){
    modalbg.classList.add('modal-active')
});
var linkbox4 = document.querySelector('.gitmodal4');
var modalbg = document.querySelector('.modal-bg');

linkbox4.addEventListener('click', function(){
    modalbg.classList.add('modal-active')
});
var linkbox5= document.querySelector('.gitmodal5');
var modalbg = document.querySelector('.modal-bg');

linkbox5.addEventListener('click', function(){
    modalbg.classList.add('modal-active')
});
var linkbox6 = document.querySelector('.gitmodal6');
var modalbg = document.querySelector('.modal-bg');

linkbox6.addEventListener('click', function(){
    modalbg.classList.add('modal-active')
});
var linkbox7 = document.querySelector('.gitmodal7');
var modalbg = document.querySelector('.modal-bg');

linkbox7.addEventListener('click', function(){
    modalbg.classList.add('modal-active')
});