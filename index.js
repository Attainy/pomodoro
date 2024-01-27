/* 시계 눈금 */
const clockBorder = document.querySelector('.clock__border');

for (let i=0; i<60; i++) {
  let clockScale = document.createElement('div');
  clockScale.classList = 'clock__scale';

  clockBorder.appendChild(clockScale);
  clockScale.style = `transform-origin: bottom; transform: rotate(${6 * i}deg);`;
}