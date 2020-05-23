const formsjson = () => {
    const inputForms = document.querySelectorAll('form');

    const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо! Ваш запрос принят, скоро мы с вами свяжемся',
        failure: 'Сервер не отвечает, попробуйте позже...'
    };

    inputForms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            
            form.insertAdjacentElement('afterend', statusMessage);

            const request = new XMLHttpRequest();

            request.open('POST', 'server.php');

            request.setRequestHeader('Content-type', 'application/json');
            // request.setRequestHeader('Content-type', 'multipart/form-data'); Когда используется связка XMLHttprequest и FormData
            //то заголовок устанавливается автоматически и его назначать не нужно!!
            const formData = new FormData(form);
            console.log(formData);
            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);
            console.log(formData);
            console.log(formData);
            request.send(json);

            

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                    
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                    
                } else {
                    showThanksModal(message.failure)
                }
            })

        })
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog'),
              modal = document.querySelector('.modal');

        prevModalDialog.style.display = 'none';
        modal.style.display ='block';

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(()=>{
            thanksModal.remove();
            prevModalDialog.style.display = 'block';
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '';
        },3000)
    }

    

}
export default formsjson;