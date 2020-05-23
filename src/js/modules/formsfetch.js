const formsfetch = () => {
    const inputForms = document.querySelectorAll('form');

    const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо! Ваш запрос принят, скоро мы с вами свяжемся',
        failure: 'Сервер не отвечает, попробуйте позже...'
    };

    inputForms.forEach(item => {
        bindpostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    function bindpostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');

            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.statusMessage.remove();
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);
            console.log(formData);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData('http://localhost:3000/requests', json)
            .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove()
                    
            }).catch(() => {
                showThanksModal(message.failure);
                console.log('BUBRA')
            })
            .finally(() => {
                form.reset();
            });
        });
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
export default formsfetch;