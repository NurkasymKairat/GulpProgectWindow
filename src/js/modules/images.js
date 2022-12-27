const images = () => {

    const imgPopup = document.createElement('div'),
    worksSection = document.querySelector('.works'),
    bigImage = document.createElement('img'),
    preview = document.querySelectorAll('.preview');
    
    imgPopup.classList.add('popup2');
    worksSection.appendChild(imgPopup);

    imgPopup.appendChild(bigImage);

    

    imgPopup.style.cssText = 'justify-content: center; align-items: center;';


    worksSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
         if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            bigImage.style.width = '40%';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
         }

         if (target && target.matches('div.popup2')) {
            imgPopup.style.display = 'none';
         }
    });

};

export default images;