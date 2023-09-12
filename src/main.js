'use strict';

// header 페이지 아래로 넘어가면 arrowbtn 활성화
const header = document.querySelector('.header');
const headerHeight = header.clientHeight;
const arrowBtn = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight / 2) {
    arrowBtn.style.opacity = 1;
  } else {
    arrowBtn.style.opacity = 0;
  }
});
