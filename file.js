$(document).ready(function(){
    // Add smooth scrolling to all links
      $("a").on('click', function(event) {
  
      
      if (this.hash !== "") {
        
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
      
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          
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
var modalclose = document.querySelector('.close');

linkbox.addEventListener('click', function(){
    modalbg.classList.add('modal-active');
    
});

modalclose.addEventListener('click', function(){
    modalbg.classList.remove('modal-active');
});


var linkbox1 = document.querySelector('.gitmodal1');
var modalbg = document.querySelector('.modal-bg');

linkbox1.addEventListener('click', function(){
    modalbg.classList.add('modal-active');
});
var linkbox2 = document.querySelector('.gitmodal2');
var modalbg = document.querySelector('.modal-bg');

linkbox2.addEventListener('click', function(){
    modalbg.classList.add('modal-active');
});
var linkbox3 = document.querySelector('.gitmodal3');
var modalbg = document.querySelector('.modal-bg');

linkbox3.addEventListener('click', function(){
    modalbg.classList.add('modal-active');
});
var linkbox4 = document.querySelector('.gitmodal4');
var modalbg = document.querySelector('.modal-bg');

linkbox4.addEventListener('click', function(){
    modalbg.classList.add('modal-active');
});


// this is the scroll magic
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const text2 = intro.querySelector('h2');
const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();
//scene
let scene = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: intro,
    triggerHook: -1
})
// .addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text,3,{opacity:1},{opacity:0});

let scene2 = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

const textAnim2 = TweenMax.fromTo(text2,3,{opacity:-1},{opacity:1});

let scene3 = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: intro,
    triggerHook: 3
})
.setTween(textAnim2)
.addTo(controller);

// video animation
let accelamount = 1;
let scrollpos = 0
let delay = 0;

scene.on('update', e =>{
    scrollpos = e.scrollPos / 750;
    
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
},33.3);
