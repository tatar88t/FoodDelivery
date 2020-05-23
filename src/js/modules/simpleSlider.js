const simpleSlider = (slideritemsSelector, slideCounterSelector, prevBtnSelector, nextBtnSelector, currentSlideIndexSelector, totalSlideSelector, activeSlideClass, hiddenSlideClass) => {

    const slideItems = document.querySelectorAll(slideritemsSelector),
          slideCounter = document.querySelector(slideCounterSelector),
          prevBtn = document.querySelector(prevBtnSelector),
          nextBtn = document.querySelector(nextBtnSelector),
          currentSlideIndex = document.querySelector(currentSlideIndexSelector),
          totalSlide = document.querySelector(totalSlideSelector);
    let slideIndex = 1;

    function endToStart(n){
        if (n > slideItems.length){slideIndex = 1};
        if(n < 1){slideIndex = slideItems.length};
        return slideIndex;
    }

    function hideSlides(){
        slideItems.forEach(slide => {
            slide.classList.remove(activeSlideClass);
            slide.classList.add(hiddenSlideClass);
        })
    }

    function showSlide(n) {
        endToStart(n);
        slideItems[slideIndex-1].classList.remove(hiddenSlideClass);
        slideItems[slideIndex-1].classList.add(activeSlideClass);
    }

    function changeSlide(){
        slideCounter.addEventListener('click', (e) => {
            if(e.target == prevBtn) {
                hideSlides();
                showSlide(slideIndex += -1);
            }
            if(e.target == nextBtn) {
                hideSlides();
                showSlide(slideIndex += 1);
            }
            currentSlide(slideIndex)
        })
    }

    function currentSlide(n){
        let slideNumber = endToStart(n);
        console.log(slideNumber);
        currentSlideIndex.textContent = `0${slideNumber}`;
    }

    function totalSlideAmount(){
        let total = slideItems.length;
        totalSlide.textContent = `0${total}`
    }
    
    hideSlides();
    totalSlideAmount();
    currentSlide(slideIndex);
    showSlide(slideIndex);
    changeSlide();   
};

export default simpleSlider;
