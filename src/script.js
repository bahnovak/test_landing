import './style.scss';

class Landing {
  constructor() {
    this.page = 1;
    this.page1 = document.querySelector('.main__contain__page1');
    this.page2 = document.querySelector('.main__contain__page2');
    this.page3 = document.querySelector('.main__contain__page3');
    this.page4 = document.querySelector('.main__contain__page4');
    this.button1 = document.querySelector('.main__contain__page1__button');
    this.button2 = document.querySelector('.main__contain__page2__button');
    this.button3 = document.querySelector('.main__contain__page3__form__button');
    this.countText = document.querySelector('.main__contain__count');
  }

  event() {
    const context = this;
    function addClick(btn) {
      btn.addEventListener('click', () => {
        context.page += 1;
        context.nextPage();
      });
    }

    addClick(this.button1);
    addClick(this.button2);
    addClick(this.button3);
  }

  nextPage() {
    switch (this.page) {
      case 2:
        this.page1.classList.remove('visible');
        this.page2.classList.add('visible');
        break;
      case 3:
        this.page2.classList.remove('visible');
        this.page3.classList.add('visible');
        break;
      case 4:
        this.page3.classList.remove('visible');
        this.page4.classList.add('visible');
        break;

      default:
        break;
    }
  }

  init() {
    this.event();
    this.nextPage();
  }
}

const app = new Landing();
app.init();
