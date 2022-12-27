import checkInput from "./checkNumInput";

const form = (state) => {
    const forms = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');


    checkInput('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжамся',
        failure: 'Что-то пошло не так...',
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
            
        });

        return await res.text();

    };

    function resetInput() {
        input.forEach(item => {
            item.value = '';
        });
    }

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                statusMessage.textContent = message.success;
            })
            .catch(res => {
                statusMessage.textContent = message.failure;
            })
            .finally(() => {
                resetInput();
                setTimeout(() => {
                    statusMessage.remove();
                }, 3000);
            });
        });
    });
};

export default form;