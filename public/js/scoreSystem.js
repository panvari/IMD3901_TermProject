    //UI Gems
    gem1 = document.querySelector('#gem1')
    gem2 = document.querySelector('#gem2')
    gem3 = document.querySelector('#gem3')
    gem4 = document.querySelector('#gem4')
    gem5 = document.querySelector('#gem5')
    gem6 = document.querySelector('#gem6')   

    //Update click bool variables
    gemItem = document.querySelector("#gemItem");
    gemItem.addEventListener('click', () => {
        console.log('clicked gem1')
        gem1.setAttribute('opacity','1');
        gemItem.setAttribute('visible', 'false');
    });

    allGems = document.querySelectorAll(".gem"); 
