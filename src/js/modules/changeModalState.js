import checkInput from "./checkNumInput";

const modalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

    checkInput('#width');
    checkInput('#height');

    function bindListener(event, selector, key) {
        selector.forEach((item, i) => {
            item.addEventListener(event, () => {

                switch(item.nodeName) {
                    case 'SPAN' :
                        state[key] = ++i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[key] = 'Cold' : state[key] = 'Hot';
                            selector.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.cheked = true;
                                }
                            });
                        } else {
                           state[key] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[key] = item.value;
                        break;
                    
                }

                console.log(state);

            });
            
        });
  
        
    }



    bindListener('click', windowForm, 'form');
    bindListener('input', windowHeight, 'height');
    bindListener('input', windowWidth, 'width');
    bindListener('change', windowType, 'type');
    bindListener('change', windowProfile, 'profile');

};

export default modalState;