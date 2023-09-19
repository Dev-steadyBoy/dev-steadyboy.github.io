'use strict';

new TypeIt('.header__intro--data', {
  speed: 30,
})
  .move(-18)
  .type('프론트엔드 ')
  .move(null, { to: 'END' })
  .go();
