const modals = (triggerSelector, modalSelector) => {
    const btnCall = document.querySelectorAll(triggerSelector),
          scrollWidth = calcScroll(),
          popupWindow = document.querySelector(modalSelector);


    let counter = 0;

    function showModal() {
        btnCall.forEach(button => {
            button.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                    popupWindow.style.display = 'block';
                    popupWindow.classList.add('modalShowUp');
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = scrollWidth;
                    counter++;
                    console.log(counter)
                }
            })
        })

        window.addEventListener('scroll', () => {
            if (counter < 1 && document.documentElement.clientHeight + window.scrollY >= document.body.scrollHeight) {
                document.querySelector(triggerSelector).click();
            }
        })
    };

    function closeModal() {
        popupWindow.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal__close') || e.target === popupWindow) {
                popupWindow.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '';
            }
        });
    };

    function calcScroll() {
        let tempElement = document.createElement('div');

        tempElement.style.width = '100px';
        tempElement.style.height = '100px';
        tempElement.style.overflow = 'scroll';
        tempElement.style.visibility = 'hidden';
        document.body.appendChild(tempElement);
        let scrollWidth = tempElement.offsetWidth - tempElement.clientWidth
        return `${scrollWidth}px`;


    }

    showModal();
    closeModal();
};


export default modals;