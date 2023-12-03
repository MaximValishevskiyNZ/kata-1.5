// Grid

const swiperBox = document.querySelector(".brands-list");
const swiperWrapper = document.querySelector(".brands-list__wrapper");
const brandsItems = document.querySelectorAll(".brands-list__brand");
const spoilerButton = document.querySelector(".brands-list__button-spoiler");
const hideBrandsButton = document.querySelector(".hide-button");

let swiperToMobile = function () {
    brandsItems.forEach((item) => {
        item.classList.add('swiper-slide');
    });
    swiperBox.classList.add('swiper');
    swiperWrapper.classList.add('swiper-wrapper');
};

let swiperToDesktop = function () {
    brandsItems.forEach((item) => {
        item.classList.remove('swiper-slide');
        item.classList.remove('swiper-slide-active');
        item.classList.remove('swiper-slide-next');
        item.removeAttribute("style")
    });
    swiperBox.classList.remove('swiper');
    swiperWrapper.classList.remove('swiper-wrapper');
};

var init =  window.innerWidth > 768;
var swiper;
function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiperToMobile();
            var swiper = new Swiper(".swiper", {
                slidesPerView: 1.2,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                },
                mousewheel: true,
                keyboard: true,
            });
        }
    } else if (init) {
        swiperToDesktop();
        init = false;
    }
}

function spoilerAction() {
  if (spoilerButton.classList.contains('button-spoiler--show-more')) {
      spoilerButton.classList.add('button-spoiler--hide');
      spoilerButton.classList.remove('button-spoiler--show-more');
      spoilerButton.textContent = 'Скрыть';
      swiperWrapper.classList.add('brands-list__wrapper--full');
  } else {
      spoilerButton.classList.add('button-spoiler--show-more');
      spoilerButton.classList.remove('button-spoiler--hide');
      spoilerButton.textContent = 'Показать все';
      swiperWrapper.classList.remove('brands-list__wrapper--full');
  }
};

swiperCard();
window.addEventListener("resize", swiperCard);
spoilerButton.addEventListener("click", spoilerAction);

