// МОДАЛЬНОЕ ОКНО

const modal = () => {
    const modalbtn = document.querySelector('.modal__button')
    const modal = document.querySelector('.modal ')
    const modalInner = modal.querySelector('.modal__inner')

    modalInner.style.position = 'relative'

    const addCloseBtn = () => {
        const closeBtn = document.createElement('div')

        closeBtn.classList.add('close-button')
        closeBtn.innerHTML = '&times'
        closeBtn.style.position = 'absolute'
        closeBtn.style.right = '10px'
        closeBtn.style.top = '10px'
        closeBtn.style.width = '20px'
        closeBtn.style.height = '20px'
        closeBtn.style.fontSize = '26px'
        closeBtn.style.cursor = 'pointer'
        closeBtn.style.display = 'flex'
        closeBtn.style.justifyContent = 'center'
        closeBtn.style.alignItems = 'center'

        modalInner.append(closeBtn)


        closeBtn.addEventListener('click', () => {
            modal.style.display = ''
        })

  
    }


    modalbtn.addEventListener('click', () => {
        modal.style.display = 'flex'
    })

    modal.addEventListener('click', (event) => {
        const modalContent = event.target.closest('.modal__inner')

        if (!modalContent) {
            modal.style.display = ''
        }
    })

    document.addEventListener('keydown', (e) => {
      if (e.code == "Escape" && modalInner.classList.contains('show')) {
        closeModal(); 
      }
   })

    addCloseBtn()
}

modal()



// КНОПКА НАВЕРХ

const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
      if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.remove('btn-up_hide');
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
          this.el.classList.remove('btn-up_hiding');
        }, 300);
      }
    },
    hide() {
      if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
          this.el.classList.add('btn-up_hide');
          this.el.classList.remove('btn-up_hiding');
        }, 300);
      }
    },
    addEventListener() {
      // при прокрутке окна (window)
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (this.scrolling && scrollY > 0) {
          return;
        }
        this.scrolling = false;
        // если пользователь прокрутил страницу более чем на 200px
        if (scrollY > 400) {
          // сделаем кнопку .btn-up видимой
          this.show();
        } else {
          // иначе скроем кнопку .btn-up
          this.hide();
        }
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        this.scrolling = true;
        this.hide();
        // переместиться в верхнюю часть страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();