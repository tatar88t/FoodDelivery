const tabs = (tabsContentSelector, triggerContainerSelector, triggerItemSelector) => {
     
    const tabsContent = document.querySelectorAll(tabsContentSelector),
          triggerContainer = document.querySelector(triggerContainerSelector),
          triggerItem = document.querySelectorAll(triggerItemSelector);
        //   imgItem = document.querySelectorAll('.tabcontent__img')
    
    
    
    const hideTabs = () => {
        tabsContent.forEach(item => {
            item.classList.remove('tabcontent_active');
            item.classList.add('tabcontent_hidden');
            item.childNodes[1].classList.remove('tabcontent__img_active');
            item.childNodes[3].classList.remove('tabcontent__descr_fade');   
        });


        triggerItem.forEach(item => {
            item.classList.remove('tabheader__item_active')
        });
    };

    const showTabs = (n) => {
        tabsContent[n].classList.remove('tabcontent_hidden'); 
        tabsContent[n].classList.add('tabcontent_active');

        tabsContent[n].childNodes[3].classList.add('tabcontent__descr_fade');  
        tabsContent[n].childNodes[1].classList.add('tabcontent__img_active'); 

        triggerItem[n].classList.add('tabheader__item_active');
    };

    
    hideTabs();
    showTabs(0);    

    const selectTab = () => {
        triggerContainer.addEventListener('click', (e) => {
            
            triggerItem.forEach((item, i) => {
                
                if(e.target == item) {
                    
                    hideTabs();
                    showTabs(i);
                    
                }
            });
                
        });
        
    };
    
    selectTab();

}
export default tabs;