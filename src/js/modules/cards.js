 export default class Cards {
    constructor(menuItemImg, menuItemAltImg, menuItemSubtitle, menuItemDescr, menuItemPrice ) {
        this.menuItemImg = menuItemImg;
        this.menuItemSubtitle = menuItemSubtitle;
        this.menuItemDescr = menuItemDescr;
        this.menuItemPrice = menuItemPrice;
        this.menuItemAltImg = menuItemAltImg;
    }

    addCard() {
        const menuFieldSelector = document.querySelector('.menu__field .container');

        let menuItem = document.createElement('div');
            
        menuItem.classList.add('menu__item');
        menuFieldSelector.appendChild(menuItem);

        menuItem.innerHTML = `
            <img src=${this.menuItemImg} alt=${this.menuItemAltImg}>
            <h3 class="menu__item-subtitle">${this.menuItemSubtitle}</h3>
            <div class="menu__item-descr">${this.menuItemDescr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.menuItemPrice}</span> руб/день</div>
            </div>
        `
    }
   
}




export const fitnessMenu = new Cards('img/tabs/fitness.jpg',
                                     'fit-food-img',
                                     '"Меню "Фитнес"', 
                                     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
                                      '1 749');
export const premiumMenu = new Cards('img/tabs/elite.jpg',
                                     'premium-food-img',
                                      'Меню "Премиум"', 
                                      'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
                                       '2 199');                                      
export const veganMenu = new Cards('img/tabs/post.jpg',
                                    'vegeterian-food-img',
                                     '"Меню "Постное"', 
                                     'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
                                      '1 349');
