const forms = () => {
    const inputForms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Ваш запрос принят, скоро мы с вами свяжемся',
        failure: 'Сервер не отвечает, попробуйте позже...'
    };

    inputForms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();

            request.open('POST', 'server.php');

            
            // request.setRequestHeader('Content-type', 'multipart/form-data'); Когда используется связка XMLHttprequest и FormData
            //то заголовок устанавливается автоматически и его назначать не нужно!!
            const formData = new FormData(form);
            request.send(formData);

            

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            })

        })
    }

}
export default forms;