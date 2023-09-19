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

// header 섹션의 스크롤링으로 인한 투명도 조절

document.addEventListener('scroll', () => {
  header.style.opacity = 1 - window.scrollY / headerHeight;
});

// scrolling으로 인한 바디 컨텐츠의 fade-in효과

const targets = document.querySelectorAll('.section');
const observerCallback = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const container = entry.target;
      if (entry.isIntersecting) {
        container.classList.add('fade-in');
      } else {
        container.classList.remove('fade-in');
      }
    });
  },
  { threshold: 0.2 }
);

targets.forEach((target) => {
  observerCallback.observe(target);
});
