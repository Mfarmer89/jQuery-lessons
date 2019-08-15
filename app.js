$('.logInButton').on('click', () => {
  $('.logInBox').toggle();
  $('.logInButton').toggleClass('loggingIn');
});

//fade toggle
//cycle through array of immages?
// set on time
// $('#slideBox').children().fadeTo("slow", 0.33);

// $('img:first-child').fadeTo(2000, 1).fadeTo(800, 0).next('img').fadeTo(4800, 1).fadeTo(800, 0).next('img').fadeTo(9600, 1).fadeTo(800, 0);

var slideImages = $('#slideBox img');
var i = 0;

function slideShow() {
  slideImages.eq(i).fadeIn(1000).delay(2000).fadeOut(1000, function() {
    if (i === slideImages.length - 1) {
      i = 0;
    } else {
      i++;
    }
    slideShow();
  });
}

slideShow();

