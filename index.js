/* 시계 고정 눈금 */
const clockScaleDiv = document.querySelector('.clock__circle');
for (let i=0; i<60; i++) {
  let clockScale = document.createElement('div');
  clockScale.classList = 'clock__scale-line';

  clockScaleDiv.appendChild(clockScale);
  clockScale.style = `transform: rotate(${6 * i}deg); z-index: ${i%5 === 0 ? 2 : 0}`;
}


/* 타이머 애니메이션 등록 */
const markLength = document.querySelector('.moving-circle path').getTotalLength();
let startPoint = markLength/4

let animation = {
  keyframes: [
    {strokeDashoffset: startPoint},
    {strokeDashoffset: markLength}
  ],
  options: {
    duration: 6000,
    easing: "linear",
  },
}

const movingCircle = document.querySelector('.moving-circle')
movingCircle.style = `stroke-dasharray: ${markLength}; stroke-dashoffset: ${markLength};`
movingCircle.animate(animation.keyframes, animation.options);