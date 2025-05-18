class BeforeAfter {
     constructor(enteryObject) {
 
         const beforeAfterContainer = document.querySelector(enteryObject.id);
         const before = beforeAfterContainer.querySelector('.bal-before');
         const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
         const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
         const handle = beforeAfterContainer.querySelector('.bal-handle');
         var widthChange = 0;
 
         beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
         window.onresize = function () {
             beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
         }
         before.setAttribute('style', "width: 50%;");
         handle.setAttribute('style', "left: 50%;");
 
         //touch screen event listener
         beforeAfterContainer.addEventListener("touchstart", (e) => {
 
             beforeAfterContainer.addEventListener("touchmove", (e2) => {
                 let containerWidth = beforeAfterContainer.offsetWidth;
                 let currentPoint = e2.changedTouches[0].clientX;
 
                 let startOfDiv = beforeAfterContainer.offsetLeft;
 
                 let modifiedCurrentPoint = currentPoint - startOfDiv;
 
                 if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10) {
                     let newWidth = modifiedCurrentPoint * 100 / containerWidth;
 
                     before.setAttribute('style', "width:" + newWidth + "%;");
                     afterText.setAttribute('style', "z-index: 1;");
                     handle.setAttribute('style', "left:" + newWidth + "%;");
                 }
             });
         });
 
         //mouse move event listener
         beforeAfterContainer.addEventListener('mousemove', (e) => {
             let containerWidth = beforeAfterContainer.offsetWidth;
             widthChange = e.offsetX;
             let newWidth = widthChange * 100 / containerWidth;
 
             if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
                 before.setAttribute('style', "width:" + newWidth + "%;");
                 afterText.setAttribute('style', "z-index:" + "1;");
                 handle.setAttribute('style', "left:" + newWidth + "%;");
             }
         })
 
     }
 }

// Initialize carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the carousel
    var carousel = bulmaCarousel.attach('#results-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        navigation: true,
        navigationKeys: true,
        navigationSwipe: true,
        pagination: true,
        loop: true
    });

    // Initialize the before/after comparisons
    new BeforeAfter({
        id: '#example1'
    });
    new BeforeAfter({
        id: '#example2'
    });
    new BeforeAfter({
        id: '#example4'
    });
    new BeforeAfter({
        id: '#example5'
    });
});