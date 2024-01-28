/* =========== 시계 고정 눈금 =========== */
const clockScaleDiv = document.querySelector('.clock__circle');
for (let i=0; i<60; i++) {
  let clockScale = document.createElement('div');
  clockScale.classList = 'clock__scale-line';

  clockScaleDiv.appendChild(clockScale);
  clockScale.style = `transform: rotate(${6 * i}deg); z-index: ${i%5 === 0 ? 2 : 0}`;
}

/* =========== 타이머 설정 =========== */
let startTime = 0;

const setTimeInput = document.querySelector('.setting__time-input input');
const plusValue0 = document.querySelector('.up-0');
const plusValue5 = document.querySelector('.up-5');
const plusValue10 = document.querySelector('.up-10');
const plusValue15 = document.querySelector('.up-15');

// 시간 조건
const timeCondition = (startTime) => {
  if (startTime > 60) {
    setTimeInput.focus();
    return 60;
  } else if (startTime < 0) {
    setTimeInput.focus();
    return 0;
  } else {
    return startTime
  }
}


setTimeInput.addEventListener('change', function(event) {
  startTime = timeCondition(startTime);
  startTime = event.target.value;
})

plusValue0.addEventListener('click', function() {
  startTime = 0;
  setTimeInput.value = startTime;
})
plusValue5.addEventListener('click', function() {
  startTime += 5;
  startTime = timeCondition(startTime);
  setTimeInput.value = startTime;
})
plusValue10.addEventListener('click', function() {
  startTime += 10;
  startTime = timeCondition(startTime);
  setTimeInput.value = startTime;
})
plusValue15.addEventListener('click', function() {
  startTime += 15;
  startTime = timeCondition(startTime);
  setTimeInput.value = startTime;
})

/* =========== 진행 표시하기 =========== */
const progressBar = document.querySelector('.progress__bar');
const progressNumber = document.querySelector('.progress-number');

// 버튼
const startStopButton = document.querySelector('.setting__active-buttons button:nth-child(1)')

// 시간
let selectTime = 'min' // 'sec'
// let remainTime = selectTime === 'min' ? 60 * startTime : startTime;
let remainTime = 60 * startTime;
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

// 시작 또는 중지 버튼
const startProgress = () => {
  console.log('starTime', startTime, remainTime);

  // 시간값이 0일 때
  if (startTime === 0) {
    alert("0보다 큰 수를 입력하세요.");
    setTimeInput.focus();
  } 

  // 시간값이 0보다 클 때
  else {
    remainTime = 60 * startTime;
    markProgressNumber(remainTime);
    markProgressBar();
    isStart = !isStart;
  
    // Start 버튼
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
        if (remainTime === 0 || !isStart) clearInterval(progressInterval);
      }, 1000);
    } 
    
    // Stop 버튼
    else {
      startStopButton.innerHTML = 'START';
      isStart = !isStart;
    }
  }

}

startStopButton.addEventListener('click', startProgress);
progressNumber.addEventListener('click', startProgress);

