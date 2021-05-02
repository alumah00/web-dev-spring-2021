let position = 0;
        
    const previousImage = function() {
        position = position + 400;
        document.getElementById('js_imageSlider').style.transform = `translate(${position}px, 0)`;
    }

    const nextImage = function() {
        position = position - 400;
        document.getElementById('js_imageSlider').style.transform = `translate(${position}px, 0)`;
    }
// const previousImage = function() {
//     // increment position by 200
//    // grab image slider from the DOM & adjust the styles for transform translate -200
// }
// const nextImage = function() {
//     // decrement position by 200
//    // grab image slider from the DOM & adjust the styles for transform translate -200
// }