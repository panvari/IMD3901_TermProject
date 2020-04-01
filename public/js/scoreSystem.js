    //UI Gem Elements
    gem1 = document.querySelector('#gem1')
    gem2 = document.querySelector('#gem2')
    gem3 = document.querySelector('#gem3')
    gem4 = document.querySelector('#gem4')
    gem5 = document.querySelector('#gem5')
    gem6 = document.querySelector('#gem6')

    setInterval((data) => {
        if (sessionStorage.getItem('gem1Collected') == 'true') {
            gem1.setAttribute('opacity', '1');
        }

        if (sessionStorage.getItem('gem2Collected') == 'true') {
            gem2.setAttribute('opacity', '1');
        }

        if (sessionStorage.getItem('gem3Collected') == 'true') {
            console.log('setting gem color on ui')
            gem3.setAttribute('opacity', '1');
        }

        if (sessionStorage.getItem('gem4Collected') == 'true') {
            gem4.setAttribute('opacity', '1');
        }

        if (sessionStorage.getItem('gem5Collected') == 'true') {
            gem5.setAttribute('opacity', '1');
        }

        if (sessionStorage.getItem('gem6Collected') == 'true') {
            gem6.setAttribute('opacity', '1');
        }
    }, 1000);