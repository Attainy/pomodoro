

/* 시계 고정 눈금 */
const clockScaleDiv = document.querySelector('.clock__circle');
for (let i=0; i<60; i++) {
  let clockScale = document.createElement('div');
  clockScale.classList = 'clock__scale-line';

  clockScaleDiv.appendChild(clockScale);
  clockScale.style = `transform: rotate(${6 * i}deg); z-index: ${i%5 === 0 ? 2 : 0}`;
}






// circlePath.addEventListener('animationend', (event) => {
//   // 애니메이션 종료 시 발생 이벤트
//   // 반복 지정 시 발생하지 않음
//   finishTime = new Date().getSeconds();
//   console.log('finishTime', finishTime);
// });

const progressBar = document.querySelector('.progress-bar');
const progressNumber = document.querySelector('.progress-number');

let starTime = 30; // 시작시간 (분단위)
let restTime = 30; // 시작시간
let restProgress = 360 * (restTime / 60);

const startTimer = () => {
  progressBar.style.background = 
  `conic-gradient(tomato 90deg, white 0deg);`;
  // `conic-gradient(tomato ${60 * starTime}deg, white 0deg);`;

  startTime = new Date().getSeconds();
  console.log('startTime', startTime);

  progressInterval = setInterval(() => {
    restTime --;
    restProgress = 360 * (restTime / 60);
    console.log(restTime, restProgress);
    playProgressBar();
  }, 1000);
}

const stopTimer = () => clearInterval(progressInterval);

function playProgressBar() {
  if (restProgress == 0) {
    stopTimer();
  }

  progressBar.style.background = 
  `conic-gradient(tomato ${restProgress}deg, white 0deg);`;
}
// background: conic-gradient(tomato 60deg, white 0deg);

/* 버튼 */
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

let startTime = 0;
let finishTime = 0;


startButton.addEventListener('click', startTimer);


stopButton.addEventListener('click', function() {
  progressBar.style = "animation-play-state:paused;";
  console.log('stop')
});

html, body, main {
  height: 100%;
}

:root {
  --clockBorder: black;
  --clockBackGround: white;
}

/* header */
h1 {
  text-align: center;
}

/* 타이머 세팅 */
.setting {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
}

.setting__time-butons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-bottom: 1rem;
}

button {
  background-color: #fa5a5a;
  color: white;
  margin: 5px;
  padding: 8px 18px;  
  font-size: 14px;
  box-shadow:0px 4px 0px #E04342;
  border: none;
  border-radius: 14px;
  cursor: pointer;
}

button:active {
  box-shadow: 0 0 #ff4c4b; background-color: #ff4c4b;
}

.ani-stop {
  animation-play-state:paused;
}

/* 시계 */
.clock {
  width: 50%;
  aspect-ratio: 1/1;
  margin: 0 auto;
  border: 1px solid var(--clockBorder);

  display: flex;
  justify-content: center;
  align-items: center;
}

/* 외부 원 */
.clock__circle {
  width: 90%;
  aspect-ratio: 1/1;
  border: 1px solid var(--clockBorder);
  border-radius: 50%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* 내부 원 */
.clock__inner-1, .clock__inner-2 {
  width: 90%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  position: absolute;
  background-color: var(--clockBackGround);
  z-index: 1;
}

.clock__inner-2 {
  width: 80%;
  z-index: 3;
  /* background-color: pink; */
  /* animation: pulse 2s infinite; */
}

/* 고정 눈금 */
.clock__scale-line {
  height: 95%;
  border: 1px solid black;
  position: absolute;
  top: 2.5%;
}

.progress-bar {
  height: 75%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  z-index: 5;
 
  animation: progress 5s linear infinite;
  /* animation: pulse 2s infinite; */
  /* transition: all ease; */
}


@keyframes pulse {
  0% {
    transform: scale(0.97);
    bax-shadow: 0 0 0 0 tomato;
  }
  50% {
    transform: scale(1);
    bax-shadow: 0 0 0 0 tomato;
  }
  100% {
    transform: scale(0.97);
    bax-shadow: 0 0 0 0 tomato;
  }

}

.progress-number {
  width: 25%;
  aspect-ratio: 1/1;
  position: absolute;
  border-radius: 50%;
  background-color: pink;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  z-index: 10;
}


.fins {
  width: 15em;
  height: 15em;
  aspect-ratio: 1/1;
  position: absolute;
  border-radius: 50%;
  border: 1px solid pink;
  /* background-color: pink; */
  z-index: 20;
  

}

.fin {
  position: absolute;
  width: 1px;
  height: calc(50%);
  top: 0; 
  left: calc(50% - 1px / 2);
  
  /* height: calc(50% - .3em); */
  /* top: .3em; */

  background: rgb(255, 57, 50);
  z-index: 15;
  transform-origin: bottom;
}


/* 움직이는 눈금 */
/* .clock__hand {
  height: 50%;
  border:1px solid red;
  position: absolute;
  top: 0;

  transition: transform 1s linear;
  transform-origin: 100% 100%;
  transform: rotate(-360deg);
  z-index: 5;
} */

/* 
background: conic-gradient(tomato 60deg, white 0deg);
@keyframes progress {
  0% {
    background-color: conic-gradient(tomato 60deg, white 0deg);;
  }
  50% {
    background-color: conic-gradient(tomato 30deg, white 0deg);;
  }
  100% {
    background-color: conic-gradient(tomato 0deg, white 0deg);
  }
} */

