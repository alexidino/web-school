// ---------------- start-stop modal window ----------------------

const modalCross = document.querySelectorAll(".modalBg-cross");
const modalClose = document.querySelector(".modalBg");
const modalStart = document.querySelector(".school-info--btn")

modalStart.onclick = () => {
  modalClose.classList.remove('modalBg-close');
  document.body.classList.toggle('modalLock');
};

modalCross.forEach( item => {
  item.onclick = () => {
    modalClose.classList.add('modalBg-close');
    document.body.classList.toggle('modalLock');
  };
});



// ---------------------------------------------------------------

let step = 0;
let score = 0;
let checkAnswer = '';

const answerBtn = document.querySelector('.answer-btn');
const beginBtn = document.querySelector('.modalBg-button--text');
const finalBtn = document.querySelector(".final-btn");

beginBtn.onclick = () => {
  document.querySelector(".quiz").classList.remove('element-off');
  document.querySelector('.window-first').classList.add('element-off');
  showQuestion();
}

function showQuestion() {
  console.log('step', step);
  if(step <= 3) {
    document.querySelector('.modalBg-question').innerHTML = quiz[step]['q'];
    document.querySelector('.modalBg-icon').innerHTML = "ЗАДАНИЕ №" + (step + 1);

    document.querySelector('.modalBg-answer').innerHTML = 
    `
      <div class="checkbox">
        <input type="radio" id="answer-1" class="custom-checkbox" name="answer" value="z">  
        <label for="answer-1">${quiz[step].a.z}</label>
      </div>
      <div class="radio">
        <input type="radio" id="answer-2" class="custom-checkbox" name="answer" value="y">
        <label for="answer-2">${quiz[step].a.y}</label>
      </div>
      <div class="radio">
        <input type="radio" id="answer-3" class="custom-checkbox" name="answer" value="x"> 
        <label for="answer-3">${quiz[step].a.x}</label>
      </div>
    `
  }

  // ------------- кнопка ответить ---------------

  answerBtn.onclick = (e) => {
    checkAnswer = document.querySelector(".modalBg-answer")
                                .querySelector('input[type="radio"]:checked').value;
    if(!checkAnswer) {
      answerBtn.blur();
      // return
    } else {
      console.log('checkAnswer', checkAnswer);
      step = step + 1;
      console.log('step >>>', step);
      showQuestion(step);  
    };

    let move = step - 1;
    if(checkAnswer !== quiz[move]["correct"]) {
      console.log('checkAnswer', checkAnswer);   
    } else {
      score++; 
      console.log('score', score);   
    };

    if(step > 3) {
      document.querySelector(".quiz").classList.add('element-off');
      document.querySelector(".final-modal").classList.add('final-modal--on');
      document.querySelector('.score').innerHTML = `НАБРАНО ${score}/4`;
      if(score <= 1) {
        document.querySelector('.final-modal--text').innerHTML = `
        Слабый результат, с вашими знаниями лучше рыть канавы`
      }
      if(score === 2) {
        document.querySelector('.final-modal--text').innerHTML = `
        При должном усердии из вас вполне может получиться неплохой программист`
      }
      if(score >= 3) {
        document.querySelector('.final-modal--text').innerHTML = `
        Это великолепный результат! 
        У вас есть все шансы стать отличным программистом. 
        Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт`
      };
      step = 0;
      move = step - 1;
      score = 0;
    }
  }
}
showQuestion(step);

finalBtn.onclick = () => {
  modalClose.classList.add('modalBg-close')
  document.querySelector(".final-modal").classList.remove('final-modal--on');
  document.querySelector('.window-first').classList.remove('element-off');
  document.body.classList.toggle('modalLock');
}
 