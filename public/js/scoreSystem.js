    //UI Gems
    gem1 = document.querySelector('#gem1')
    gem2 = document.querySelector('#gem2')
    gem3 = document.querySelector('#gem3')
    gem4 = document.querySelector('#gem4')
    gem5 = document.querySelector('#gem5')
    gem6 = document.querySelector('#gem6')

    //Update click bool variables
    gemItem = document.querySelector("#gemItem");
    gemItem.addEventListener('click', () => { //first gem event listener
        console.log('clicked gem1')
        gem1.setAttribute('opacity', '1');
        gemItem.setAttribute('visible', 'false');

        //store collection value between pages
        window.sessionStorage.setItem('gem1Collected', 'true');
    });

    setInterval((data) => {
        if (sessionStorage.getItem('gem1Collected') === 'true') {
            gem1.setAttribute('opacity', '1');
            gemItem.setAttribute('visible', 'false');
        }
        // if(localStorage.getItem('gem2Collected') === 'true'){
        //     gem2.setAttribute('opacity','1');
        //     gemItem.setAttribute('visible', 'false');
        // }
        // if(localStorage.getItem('gem3Collected') === 'true'){
        //     gem3.setAttribute('opacity','1');
        //     gemItem.setAttribute('visible', 'false');
        // }
        // if(localStorage.getItem('gem4Collected') === 'true'){
        //     gem4.setAttribute('opacity','1');
        //     gemItem.setAttribute('visible', 'false');
        // }
        // if(localStorage.getItem('gem5Collected') === 'true'){
        //     gem5.setAttribute('opacity','1');
        //     gemItem.setAttribute('visible', 'false');
        // }
        // if(localStorage.getItem('gem6Collected') === 'true'){
        //     gem6.setAttribute('opacity','1');
        //     gemItem.setAttribute('visible', 'false');
        // }
    }, 1000);