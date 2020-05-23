const smoothSlider = (slideritemsSelector, slideCounterSelector, prevBtnSelector, nextBtnSelector, currentSlideIndexSelector, totalSlideSelector, activeSlideClass, hiddenSlideClass, sliderWrapperSelector, innerWrapperSelector) => {

    const slideItems = document.querySelectorAll(slideritemsSelector),
          slideCounter = document.querySelector(slideCounterSelector),
          prevBtn = document.querySelector(prevBtnSelector),
          nextBtn = document.querySelector(nextBtnSelector),
          currentSlideIndex = document.querySelector(currentSlideIndexSelector),
          totalSlide = document.querySelector(totalSlideSelector),
          slideWrapper = document.querySelector(sliderWrapperSelector),
          innerWrapper = document.querySelector(innerWrapperSelector);
          
    let slideIndex = 1,
        offset = 0,
        visibleWidthPx = window.getComputedStyle(slideWrapper).width,
        visibleWidth = visibleWidthPx.slice(0, visibleWidthPx.length - 2),
        totalSlidesWidth = (visibleWidth * slideItems.length);
    
    slideWrapper.style.overflow ='hidden';
    innerWrapper.style.width = `${totalSlidesWidth}px`;
    innerWrapper.style.transition = '0.6s ease-out all';

    currentSlideIndex.textContent = `0${slideIndex}`;
    
    function moveSlide() {
        
        slideCounter.addEventListener('click', (e) => {
                    
                    if(e.target == nextBtn) {
                        if (offset >= totalSlidesWidth - visibleWidth){
                            offset = 0;
                            slideIndex = 1;
                        } else {
                            offset += +visibleWidth;
                            slideIndex ++;
                            }

                        currentSlideIndex.textContent = `0${slideIndex}`;
                        innerWrapper.style.transform = `translateX(-${offset}px)`;
    
                    }
                    if(e.target == prevBtn) {
                        if (offset == 0){
                            offset = totalSlidesWidth - visibleWidth;
                            slideIndex = slideItems.length;
                        } else{
                            offset -= +visibleWidth;
                            slideIndex --;
                            }
                        currentSlideIndex.textContent = `0${slideIndex}`;
                        innerWrapper.style.transform = `translateX(-${offset}px)`;
    
                    }
        })
        return offset
    };

    function totalSlideAmount(){
        let total = slideItems.length;
        totalSlide.textContent = `0${total}`
    }
    function autoSlide() {
        
        let run = setInterval(function(){
            offset += +visibleWidth;
            slideIndex ++;
            if (offset >= totalSlidesWidth){
                offset = 0;
                slideIndex =1;   
            }
            slideCounter.addEventListener('mouseenter', () => {
                clearInterval(run)
            });
            
            
            currentSlideIndex.textContent = `0${slideIndex}`;
            innerWrapper.style.transform = `translateX(-${offset}px)`;
                    
        
        }, 8000);  
    }



    
    totalSlideAmount();
    autoSlide();
    moveSlide();
    
};

export default smoothSlider;