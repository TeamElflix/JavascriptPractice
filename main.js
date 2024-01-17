var adsContainer = document.querySelector('#event .adsContainer');
var ads = adsContainer.querySelector(' .ads');
var ad = ads.querySelectorAll('.ad');

var currentAd = 0;

setInterval(function () {
  var from = -(100 * currentAd);
  var to = from - 100;
  ads.animate(
    {
      marginLeft: [from + '%', to + '%'],
    },
    {
      duration: 500,
      easing: 'ease',
      iterations: 1,
      fill: 'both',
    }
  );
  currentAd++;
  if (currentAd === ad.length - 1) {
    currentAd = 0;
  }
}, 3000);

setInterval(function () {
  var currentConstAd = document.querySelector(
    '#event .constAds .constAd.active'
  );
  var nextConstAd = currentConstAd.nextElementSibling;
  if (nextConstAd === null) {
    nextConstAd = currentConstAd.parentElement.firstElementChild;
  }
  currentConstAd.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 500,
      easing: 'ease',
      iterations: 1,
      fill: 'both',
    }
  );
  currentConstAd.classList.remove('active');
  nextConstAd.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: 500,
      easing: 'ease',
      iterations: 1,
      fill: 'both',
    }
  );
  nextConstAd.classList.add('active');
}, 10000);

// menuButtons.forEach(function (menuButton) {
//   menuButton.onclick = function (e) {
//     console.log(menuButton);
//     e.preventDefault();
//     var foldedMenus = menuButton.nextElementSibling;
//     console.log(foldedMenus);

//     var foldedMenu = foldedMenus.querySelectorAll('.foldedMenu');

//     foldedMenu.forEach(function (each) {
//       each.classList.toggle('active');
//     });
//   };
// });
var menuButtons = document.querySelectorAll(
  '#header .upperLeftSpace .menuBar .menu .visibleMenu'
);
console.log(menuButtons);
menuButtons.forEach(function (menuButton) {
  menuButton.firstElementChild.onclick = function (e) {
    menuButton.classList.toggle('active');
    e.preventDefault();
    var foldedMenu = menuButton.firstElementChild.nextElementSibling;
    foldedMenu.classList.toggle('active');
  };
});

// var media = window.matchMedia('(min-width: 300px) and (max-width: 560px)');
var media = window.matchMedia('(min-width: 1024px)');

// if (!media.matches) {
//   let child = document.querySelector('#header .upperLeftSpace .menuBar');
//   let parent = child.parentElement;
//   parent.removeChild(child);
// }

const openSlideMenuButton = document.getElementById('openSlideMenu');
const closeSlideMenuButton = document.getElementById('closeSlideMenu');
const slideMenu = document.getElementById('slideMenu');

openSlideMenuButton.addEventListener('click', () => {
  slideMenu.classList.add('on');
});

closeSlideMenuButton.addEventListener('click', () => {
  slideMenu.classList.remove('on');
});
