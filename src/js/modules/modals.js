
const modal =  (state) => {

    const btnTrigger = document.querySelector('.header_btn'),
          modal = document.querySelector('.popup_engineer'),
          btnClose = document.querySelector('.btn_1'),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();

          windows.forEach(item => {
            item.classList.add('hide');
          });

    function openModal(selector) {
        
        const selectModal = document.querySelector(selector);

        selectModal.classList.remove('hide');
        selectModal.classList.add('show');
        // document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${scroll}px`;
    }

    function closeModal(selector) {
        const closeSelect = document.querySelector(selector);

        closeSelect.classList.add('hide');
        closeSelect.classList.remove('show');
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = `0px`;
        
        windows.forEach(item => {
            item.classList.add('hide');
          });
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    //1

    btnTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('.popup_engineer');
    });

    modal.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target === modal || e.target == btnClose) {
                closeModal('.popup_engineer');
            }
    });

    //2

    const modal2 = document.querySelector('.popup'),
          btn2Close = document.querySelector('.btn_2'),
          btn2Open = document.querySelectorAll('.btn_link');

    btn2Open.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('.popup');
        });
    });

    modal2.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === modal2 || e.target == btn2Close) {
            closeModal('.popup');
        }
    });

    //3

    const modalCalcClose = document.querySelector('.popup_calc_close > strong'),
          modalCalc = document.querySelector('.popup_calc'),
          modalOpenCalc = document.querySelectorAll('.popup_calc_btn');

    modalOpenCalc.forEach(item => {
        item.addEventListener('click', () => {
            openModal('.popup_calc');
        });
    });


    modalCalc.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === modalCalc || e.target == modalCalcClose) {
            closeModal('.popup_calc');
        }
    });

    // 4

    const modalProfile = document.querySelector('.popup_calc_profile'),
          modalCloseProfile = document.querySelector('.popup_calc_profile_close > strong'),
          modalProfileOpen = document.querySelector('.popup_calc_button');
    
    modalProfileOpen.addEventListener('click', () => {
        modalCalc.classList.remove('show');
        if (state.form && state.width && state.height) {
            openModal('.popup_calc_profile');
        } else {
            openModal('.popup_calc');
        }
        
    });

    modalProfile.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target == modalCloseProfile) {
            closeModal('.popup_calc_profile');
        }
    });

    // 5

    const modalProfileF = document.querySelector('.popup_calc_end'),
    modalCloseProfileF = document.querySelector('.popup_calc_end_close > strong'),
    modalProfileOpenF = document.querySelector('.popup_calc_profile_button');


    modalProfileOpenF.addEventListener('click', () => {
    modalProfile.classList.remove('show');
        if (state.type) {
         openModal('.popup_calc_end');
        } else {
            openModal('.popup_calc_profile');
        }
    
    });

    modalProfileF.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target == modalCloseProfileF) {
        closeModal('.popup_calc_end');
    }
    });

          

    

    


};




export default modal;