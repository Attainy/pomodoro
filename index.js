/* 시계 눈금 */
// const scaleWidth = clockBorder.clientWidth / 2;
// const clockScaleDiv = document.querySelector('.clock__scale');
const clockScaleDiv = document.querySelector('.clock__circle');


for (let i=0; i<60; i++) {
  let clockScale = document.createElement('div');
  clockScale.classList = 'clock__scale-line';

  clockScaleDiv.appendChild(clockScale);
  clockScale.style = `transform: rotate(${6 * i}deg); z-index: ${i%5 === 0 ? 2 : 0}`;
}


