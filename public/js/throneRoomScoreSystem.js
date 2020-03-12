gem1 = document.querySelector('#gem1')
gem2 = document.querySelector('#gem2')

gemItem2 = document.querySelector("#gemItem2");
gemItem2.addEventListener('click', () => { //first gem event listener
    console.log('clicked gem1')
    gem2.setAttribute('opacity', '1');
    gemItem2.setAttribute('material', 'color', 'red');

    //store collection value between pages
    window.sessionStorage.setItem('gem2Collected', 'true');
});


setInterval((data) => {
    if (sessionStorage.getItem('gem1Collected') === 'true') {
        gem1.setAttribute('opacity', '1');
    }
    if (sessionStorage.getItem('gem2Collected') === 'true') {
        gem2.setAttribute('opacity', '1');
        gemItem2.setAttribute('material', 'color', 'red');
    }

}, 1000);