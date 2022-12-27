
function slidesPlugin(activeSlide = 0) {
    let slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');
    
    slides.forEach(function(slide) {
        slide.addEventListener('click', function() {
            clearActiveSlide();
            slide.classList.add('active');
        })
    });
    
    function clearActiveSlide() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

slidesPlugin();