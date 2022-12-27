const checkInput = (selectors) => {
    const numInputs = document.querySelectorAll(selectors);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
      });
};

export default checkInput;