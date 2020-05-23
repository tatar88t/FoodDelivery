const calculator = (resultSelector) => {
    const result =document.querySelector(resultSelector);

    let gender = 'female', height, weight, age, ratio = 1.375;

    function calcTotal(){
        if(!gender || !height || !weight || !age || !ratio ){
            result.textContent = "____";
            return;
        }

        if (gender === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio); 
        }
        console.log(result.textContent)
    }
    
    calcTotal()

    function getStaticValue(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if(e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                } else {
                    gender = e.target.getAttribute('id')
                }
    
                console.log(ratio, gender);
    
                elements.forEach(item => item.classList.remove(activeClass))
                e.target.classList.add(activeClass);
                calcTotal()
            });
        })

        // document.querySelector(parentSelector).
        

    }
    getStaticValue('#gender', 'calculating__choose-item_active');
    getStaticValue('.calculating__choose_big', 'calculating__choose-item_active')

    function getInputData(inpSelector){
        const input = document.querySelector(inpSelector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/)) {
                input.style.border = '1px solid red';   
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')){
                case 'height':
                    height =+input.value;
                    break;
                case 'weight':
                    weight =+input.value;
                    break;
                case 'age':
                    age =+input.value;
                    break;
            }
            console.log(height, weight, age)
            calcTotal();
        });
        
    }
    getInputData('#height');
    getInputData('#weight');
    getInputData('#age');
}
export default calculator;