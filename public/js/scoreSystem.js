allGems = document.querySelectorAll('.gem'); //Quick select all gems  
    gem1 = document.querySelector('#gem1'),
    gem2 = document.querySelector('#gem2'),
    gem3 = document.querySelector('#gem3'),
    gem4 = document.querySelector('#gem4'),
    gem5 = document.querySelector('#gem5'),
    gem6 = document.querySelector('#gem6')

    gem1Clicked = false;
    gem2Clicked = false;    
    gem3Clicked = false;    
    gem4Clicked = false;    
    gem5Clicked = false;    
    gem6Clicked = false;    

    //Set GUI opacities on val change
    if(gem1Clicked == true){
        gem1.setAttribute('opacity','1');
    }
    if(gem2Clicked == true){
        gem2.setAttribute('opacity','1');
    }
    if(gem3Clicked == true){
        gem3.setAttribute('opacity','1');
    }
    if(gem4Clicked == true){
        gem4.setAttribute('opacity','1');
    }
    if(gem5Clicked == true){
        getm5.setAttribute('opacity','1');
    }
    if(gem6Clicked == true){
        gem6.setAttribute('opacity','1');
    }
