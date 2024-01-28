/* =========== 시계 고정 눈금 =========== */
const clockScaleDiv = document.querySelector('.clock__circle');
for (let i=0; i<60; i++) {
  let clockScale = document.createElement('div');
  clockScale.classList = 'clock__scale-line';

  clockScaleDiv.appendChild(clockScale);
  clockScale.style = `transform: rotate(${6 * i}deg); z-index: ${i%5 === 0 ? 2 : 0}`;
}

/* =========== 타이머 설정 =========== */



/* =========== 진행 표시하기 =========== */
const progressBar = document.querySelector('.progress__bar');
const progressNumber = document.querySelector('.progress-number');

// 버튼
const startStopButton = document.querySelector('.setting__active-buttons button:nth-child(1)')

// 시간
let selectTime = 'min' // 'sec'
let inputTime = 40;
let remainTime = selectTime === 'min' ? 60 * inputTime : inputTime;
let second = 0;

// 진행 여부
let isStart = false;

// 진행 Bar 표시
const markProgressBar = () => {
  remainTime --;

  for (let sec=0; sec<remainTime; sec++) {
    const progressHand = document.createElement('div');
    progressHand.classList.add('progress__hand');
    // selectTime === 'min'이면 1초에 0.1도, selectTime === 'sec'이면 1초에 6도
    progressHand.style.transform = `rotate(${0.1 * sec}deg)`; // 초는 6, 분은 0.1
    progressBar.appendChild(progressHand);
  }
}

// 남은 시간 숫자로 표시하기
const markProgressNumber = (remainTime) => {
  let remainMin = Math.floor(remainTime/60).toString();
  let remianSec = (remainTime % 60).toString();
  progressNumber.innerText = `${remainMin.padStart(2, '0')} : ${remianSec.padStart(2, '0')}`;
}



/* =========== 이벤트 리스너 =========== */
const startProgress = () => {
  markProgressNumber(remainTime);
  markProgressBar();
  isStart = !isStart;

  if (isStart) {
    startStopButton.innerHTML = 'STOP';
    // 1초마다 실행
    let progressInterval = setInterval(function () {
      // progress-hand 마지막 요소 없애기
      let lastEl = document.querySelector('.progress__hand:last-child');
      lastEl.remove();

      // progress-number 시간 표시 하기
      markProgressNumber(remainTime);

      remainTime--;
      if (remainTime === 0) clearInterval(progressInterval);
    }, 1000);

    
  } else {
    startStopButton.innerHTML = 'START';
    clearInterval(progressInterval)
  }

}

startStopButton.addEventListener('click', startProgress);

