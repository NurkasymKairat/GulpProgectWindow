const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {

    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          contant = document.querySelectorAll(contentSelector);

    function hideContant() {
        contant.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showContant(i = 0) {
        contant[i].classList.add('show');
        tabs[i].classList.add(activeClass);
    }

    hideContant();
    showContant();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideContant();
                    showContant(i);
                }
            });
        }
    });
    



};

export default tabs;