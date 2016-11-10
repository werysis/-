function changeImage() {
    var firstElem = document.getElementById('firstElem');
    var wrapperFirstElem = document.getElementById('firstWrapper');

    // console.log('first: ', firstElem);
    // console.log('wrapper: ', wrapperFirstElem);

    wrapperFirstElem.onmouseover = function() {
        firstElem.src = './img/Layer211.png';
        // console.log(firstElem);
    }
    wrapperFirstElem.onmouseout = function() {
        firstElem.src = './img/Layer223.png';
        // console.log(firstElem);
    }
}

changeImage();
