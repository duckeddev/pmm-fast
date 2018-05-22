/*--- menu toggle ---*/

var menuToggle = document.querySelector('.header__menu-toggle');
var headerMavigation = document.querySelector('.header__nav');
var closeHeaderNavBtn = document.querySelector('.header__nav-close-btn');

menuToggle.addEventListener('click', function () {
  headerMavigation.style.visibility = 'visible';
});

closeHeaderNavBtn.addEventListener('click', function () {
  headerMavigation.style.visibility = 'hidden';
});



// end menu toggle


function statsCount() {
  var stats = document.querySelectorAll('.stats__count');
  for (let i = 0; i < stats.length; i++) {
    (function (i) {
      var valueStats = stats[i].innerHTML;
      if (stats[i].innerHTML > 0) {
        stats[i].innerHTML = 0;
        var statsInterval = setInterval(function () {
          stats[i].innerHTML++
          if (stats[i].innerHTML == valueStats) {
            clearInterval(statsInterval);
          }
        }, .01)
      }
    })(i);
  }
}

statsCount();

var carousels = document.querySelectorAll('.clients__testimonials-item');
var nextBtn = document.getElementById('next-array');
var prevBtn = document.getElementById('prev-array');
var currentCarousel = 0;

function nextCarousel() {
  carousels[currentCarousel].className = 'clients__testimonials-item';
  currentCarousel = (currentCarousel + 1) % carousels.length;
  carousels[currentCarousel].className = 'clients__testimonials-item clients__testimonials-item-active';
}

function prevCarousel() {
  carousels[currentCarousel].className = 'clients__testimonials-item';
  currentCarousel = (currentCarousel - 1) % carousels.length;
  carousels[currentCarousel].className = 'clients__testimonials-item clients__testimonials-item-active';
}

nextBtn.addEventListener('click', nextCarousel);

prevBtn.addEventListener('click', prevCarousel);



