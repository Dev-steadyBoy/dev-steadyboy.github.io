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

// scrolling으로 인한 바디 컨텐츠의 fade-in효과와 index focus 기능
const sectionClass = [
  '.about',
  '.skills',
  '.projects',
  '.study',
  '.share',
  '.other',
];
const navItems = sectionClass.map((el) => document.querySelectorAll(`${el}`));
let activeNavItem = navItems[0];
const targets = document.querySelectorAll('.fade-class');
const visibleSections = sectionClass.map(() => false);
const observerCallback = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const container = entry.target;
      const index = sectionClass.indexOf(`.${container.id}`);

      visibleSections[index] = entry.isIntersecting;
      const lastIndex = selectLastOne(visibleSections);

      if (entry.isIntersecting) {
        container.classList.add('fade-in');
      } else {
        container.classList.remove('fade-in');
      }

      selectNavItem(lastIndex);
    });
  },
  { threshold: 0.35 }
);

function selectNavItem(index) {
  const navItem = navItems[index];
  activeNavItem.forEach((item) => {
    item.classList.remove('navIdx-focus');
  });
  activeNavItem = navItem;
  activeNavItem.forEach((item) => {
    item.classList.add('navIdx-focus');
  });
}

function selectLastOne(arr) {
  const idx = arr.lastIndexOf(true);
  return idx >= 0 ? idx : 0;
}

targets.forEach((target) => {
  observerCallback.observe(target);
});
