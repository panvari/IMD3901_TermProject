gem1 = document.querySelector('#gem1')
gem2 = document.querySelector('#gem2')

setInterval((data) => {
    if (sessionStorage.getItem('gem1Collected') === 'true') {
        gem1.setAttribute('opacity', '1');
    }
    if (sessionStorage.getItem('gem2Collected') === 'true') {
        gem2.setAttribute('opacity', '1');
    }

}, 1000);