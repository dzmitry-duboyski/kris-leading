export class ModalWindow {
  constructor(){
    this.timer = 5;
    this.timerId = 0;
    localStorage.setItem('timerID','0');
  }

  init() {
    const testContent = `
    <div class="container">
    <div class="btn-close-wrapper">
      <div class="btn-close-test">X</div>
    </div>
    <div class="test-wrapper">
      <div class="test-content">
        <p class="test-text" data-i18n="testMessageText1"></p>
        <p class="test-text">
          <span data-i18n="testMessageText2"></span>
        </p>
      </div>
      <div class="preloader-wrapper">
        <div class="preloader__element">
          <div class="preloader">
            <div class="preloader__loader"></div>
          </div>
          <div class="preloader__text">
              <span data-i18n="testMessageTimerText"></span>
          </div>
        </div>
      </div>
  </div>`;

    const testSection = document.querySelector('.test');
    testSection.insertAdjacentHTML('afterbegin',testContent);
    return;
  }

  displayModalWindow () {
    document.querySelector('.test').classList.remove('hidden');
    document.querySelector('body').classList.add('display-modal');
    this.autoCloseModalWindow();
  }

  closeModalWindow () {
    document.querySelector('.test').classList.add('hidden');
    document.querySelector('body').classList.remove('display-modal');
  }

  autoCloseModalWindow () {
    const timer = this.timer;
    const timerIDnew = Math.floor((Math.random() * 1000000000),10);
    localStorage.setItem('currentTimerID',`${timerIDnew}`);
 
    const displayTextTimer = (timer, timerIDnew) => {
      const currentTimerId = Number(localStorage.getItem('currentTimerID'));
      const isOldTimer = timerIDnew !== currentTimerId;
      if(isOldTimer) {
        return;
      }
      
      if (timer) {
        const elementTimerText = document.querySelector(`[data-i18n="testMessageTimerText"]`);
        elementTimerText.textContent = timer;
        timer = timer - 1;
        setTimeout(displayTextTimer, 1000, timer, timerIDnew);
      } else {
        localStorage.setItem('currentTimerID','');
        return this.closeModalWindow();
      }
    }
    return displayTextTimer(timer, timerIDnew);
  }
}