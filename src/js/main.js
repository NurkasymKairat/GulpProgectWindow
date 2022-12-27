import './slider';
import modal from './modules/modals';
import tabs from './modules/tab';
import time from './modules/time';
import form from './modules/forms';
import modalState from './modules/changeModalState';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    
    let changeModal = {
        form: 1,
        type: 'tree',
    };
    modalState(changeModal);
    modal(changeModal);
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more');
    time('#days', '#hours', '#minutes', '#seconds', '2023-01-01');
    form(changeModal);
    images();
});