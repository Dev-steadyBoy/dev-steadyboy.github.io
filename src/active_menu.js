'use strict';

// scrolling으로 인한 목차의 focus 기능
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
const targets = document.querySelectorAll('.section');
const visibleSections = sectionClass.map(() => false);
const observerCallback = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const container = entry.target;
      const index = sectionClass.indexOf(`.${container.id}`);

      visibleSections[index] = entry.isIntersecting;
      const lastIndex = selectLastOne(visibleSections);
      selectNavItem(lastIndex);
    });
  },
  { threshold: 0.55 }
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
