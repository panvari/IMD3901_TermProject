    //UI Gems
    gem1 = document.querySelector('#gem1')
    gem2 = document.querySelector('#gem2')

    //Update click bool variables
    gemItem1 = document.querySelector("#gemItem1");
    gemItem1.addEventListener('click', () => { //first gem event listener
        console.log('clicked gem1')
        gem1.setAttribute('opacity', '1');
        gemItem1.setAttribute('material', 'color', 'red');

        //store collection value between pages
        window.sessionStorage.setItem('gem1Collected', 'true');
    });

    setInterval((data) => {
        if (sessionStorage.getItem('gem1Collected') === 'true') {
            gem1.setAttribute('opacity', '1');
            gemItem1.setAttribute('material', 'color', 'red');

        }
        if (sessionStorage.getItem('gem2Collected') === 'true') {
            gem2.setAttribute('opacity', '1');
            gemItem2.setAttribute('visible', 'false');
        }
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